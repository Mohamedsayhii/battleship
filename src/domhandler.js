import player from './player';
import { battleship, carrier, destroyer, patrolBoat, submarine } from './ship';

function populateGameboard(player) {
    const playerBoard = player.playerGameboard.getBoard();
    playerBoard.forEach((row) => {
        row.forEach((boardCell) => {
            const selector =
                player.type === 'player1'
                    ? `#firstBoard${boardCell.coordinates[0]}${boardCell.coordinates[1]}`
                    : `#secondBoard${boardCell.coordinates[0]}${boardCell.coordinates[1]}`;
            if (boardCell.isPartOfShip) {
                const boardCellDiv = document.querySelector(selector);
                boardCellDiv.style.backgroundColor = 'rgba(0,0,255,0.1)';
                boardCellDiv.style.border = '2px solid #00f';
            }
        });
    });
}

function boardHandler(player, board, coordIndices) {
    const boardDiv = document.querySelector(board);
    boardDiv.addEventListener('click', (e) => {
        if (e.target.style.backgroundColor) {
            e.target.style.backgroundColor = 'rgba(255,0,0,.2)';
            e.target.style.border = '2px solid red';
        } else {
            const point = document.createElement('span');
            e.target.appendChild(point);
        }

        const coordinates = [
            parseInt(e.target.id[coordIndices[0]], 10),
            parseInt(e.target.id[coordIndices[1]], 10),
        ];

        player.playerGameboard.receiveAttack(coordinates);
    });
}

const domHandler = () => {
    const player1 = player('player1');
    player1.playerGameboard.placeShip(carrier, [0, 0], false);
    player1.playerGameboard.placeShip(battleship, [3, 0], false);
    player1.playerGameboard.placeShip(destroyer, [5, 7], false);
    player1.playerGameboard.placeShip(submarine, [7, 0], true);
    player1.playerGameboard.placeShip(patrolBoat, [8, 9], true);
    populateGameboard(player1);

    const player2 = player('player2');
    player2.playerGameboard.placeShip(carrier, [0, 0], true);
    player2.playerGameboard.placeShip(battleship, [1, 9], true);
    player2.playerGameboard.placeShip(destroyer, [2, 2], false);
    player2.playerGameboard.placeShip(submarine, [7, 5], false);
    player2.playerGameboard.placeShip(patrolBoat, [9, 8], false);
    populateGameboard(player2);

    boardHandler(player1, '#firstBoard', [10, 11]);
    boardHandler(player2, '#secondBoard', [11, 12]);
};

export default domHandler;
