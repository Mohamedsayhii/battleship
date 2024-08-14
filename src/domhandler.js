import player from './player';
import { battleship, carrier, destroyer, patrolBoat, submarine } from './ship';

const domHandler = () => {
    const player1 = player('player1');
    player1.playerGameboard.placeShip(carrier, [0, 0], false);
    player1.playerGameboard.placeShip(battleship, [3, 0], false);
    player1.playerGameboard.placeShip(destroyer, [5, 7], false);
    player1.playerGameboard.placeShip(submarine, [7, 0], true);
    player1.playerGameboard.placeShip(patrolBoat, [8, 9], true);

    const firstPlayerBoard = player1.playerGameboard.getBoard();
    firstPlayerBoard.forEach((row) => {
        row.forEach((boardCell) => {
            if (boardCell.isPartOfShip) {
                const boardCellDiv = document.querySelector(
                    `#firstBoard${boardCell.coordinates[0]}${boardCell.coordinates[1]}`,
                );

                boardCellDiv.style.backgroundColor = 'rgba(0,0,255,0.1)';
                boardCellDiv.style.border = '2px solid #00f';
            }
        });
    });

    const player2 = player('player2');
    player2.playerGameboard.placeShip(carrier, [0, 0], true);
    player2.playerGameboard.placeShip(battleship, [1, 9], true);
    player2.playerGameboard.placeShip(destroyer, [2, 2], false);
    player2.playerGameboard.placeShip(submarine, [7, 5], false);
    player2.playerGameboard.placeShip(patrolBoat, [9, 8], false);

    const secondPlayerBoard = player2.playerGameboard.getBoard();
    secondPlayerBoard.forEach((row) => {
        row.forEach((boardCell) => {
            if (boardCell.isPartOfShip) {
                const boardCellDiv = document.querySelector(
                    `#secondBoard${boardCell.coordinates[0]}${boardCell.coordinates[1]}`,
                );

                boardCellDiv.style.backgroundColor = 'rgba(0,0,255,0.1)';
                boardCellDiv.style.border = '2px solid #00f'
            }
        });
    });
};

export default domHandler;
