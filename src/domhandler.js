import player from './player';
import ship from './ship';

let currentPlayer = 'player1';

function renderGameboard(player) {
    const playerBoard = player.playerGameboard.getBoard();
    playerBoard.forEach((row) => {
        row.forEach((boardCell) => {
            const selector = `#${player.type === 'player1' ? 'firstBoard' : 'secondBoard'}${boardCell.coordinates.join('')}`;
            if (boardCell.isPartOfShip) {
                const boardCellDiv = document.querySelector(selector);
                boardCellDiv.style.backgroundColor = 'rgba(0,0,255,0.1)';
                boardCellDiv.style.border = '2px solid #00f';
            }
        });
    });
}

function takeTurns() {
    const firstBoard = document.querySelector('#firstBoard');
    const secondBoard = document.querySelector('#secondBoard');
    const instructions = document.querySelector('.instructions');

    if (currentPlayer === 'player1') {
        firstBoard.style.pointerEvents = 'none';
        secondBoard.style.pointerEvents = 'auto';
        instructions.textContent = 'Your turn';
    } else {
        firstBoard.style.pointerEvents = 'auto';
        secondBoard.style.pointerEvents = 'none';
        instructions.textContent = "Opponent's turn";
    }
}

function boardHandler(player, board, coordIndices) {
    const boardDiv = document.querySelector(board);
    const playerBoard = player.playerGameboard.getBoard();

    boardDiv.addEventListener('click', (e) => {
        const coordinates = [
            parseInt(e.target.id[coordIndices[0]], 10),
            parseInt(e.target.id[coordIndices[1]], 10),
        ];

        const [x, y] = coordinates;

        if (!playerBoard[x][y].isAttacked) {
            if (player.type === currentPlayer) return;

            if (e.target.style.backgroundColor) {
                e.target.style.backgroundColor = 'rgba(255,0,0,.2)';
                e.target.style.border = '2px solid red';
            } else {
                const point = document.createElement('span');
                e.target.appendChild(point);
            }

            player.playerGameboard.receiveAttack(coordinates);

            if (player.playerGameboard.allSunk()) {
                const boards = document.querySelectorAll('.board');
                boards.forEach((board) => {
                    board.style.pointerEvents = 'none';
                });
                const instructions = document.querySelector('.instructions');
                instructions.textContent = `${currentPlayer} has won!`;
            } else {
                currentPlayer =
                    currentPlayer === 'player1' ? 'player2' : 'player1';
                takeTurns();
            }
        }
    });
}

const domHandler = () => {
    const player1 = player('player1');
    player1.playerGameboard.placeShip(ship('carrier', 5), [0, 0], false);
    player1.playerGameboard.placeShip(ship('battleship', 4), [3, 0], false);
    player1.playerGameboard.placeShip(ship('destroyer', 3), [5, 7], false);
    player1.playerGameboard.placeShip(ship('submarine', 3), [7, 0], true);
    player1.playerGameboard.placeShip(ship('patrol', 2), [8, 9], true);
    renderGameboard(player1);

    const player2 = player('player2');
    player2.playerGameboard.placeShip(ship('carrier', 5), [0, 0], true);
    player2.playerGameboard.placeShip(ship('battleship', 4), [1, 9], true);
    player2.playerGameboard.placeShip(ship('destroyer', 3), [2, 2], false);
    player2.playerGameboard.placeShip(ship('submarine', 3), [7, 5], false);
    player2.playerGameboard.placeShip(ship('patrol', 2), [9, 8], false);
    renderGameboard(player2);

    startButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'none';
        randomButton.style.pointerEvents = 'none';

        const instructions = document.querySelector('.instructions');
        instructions.textContent = 'your turn';

        boardHandler(player1, '#firstBoard', [10, 11]);
        boardHandler(player2, '#secondBoard', [11, 12]);
    });

    randomButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('#firstBoard .cell');
        cells.forEach((cell) => {
            cell.style.removeProperty('background-color');
            cell.style.removeProperty('border');
        });
        player1.playerGameboard.randomPlacement();
        renderGameboard(player1);
    });
};

export default domHandler;
