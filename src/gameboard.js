import { carrier, battleship, destroyer, submarine, patrolBoat } from './ship';

const gameboardCell = (coordinates) => {
    const isAttacked = false;
    const isPartOfShip = false;
    const ship = '';

    return { isAttacked, isPartOfShip, ship };
};

const gameboard = () => {
    const board = [];

    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            row.push(gameboardCell([i, j]));
        }
        board.push(row);
    }

    const getBoard = () => board;

    const placeShip = (ship, coordinates, vertical) => {
        const [x, y] = coordinates;

        if (x + ship.length - 1 > 9 || y + ship.length - 1 > 9)
            return 'Incorrect placement of a ship';

        for (let i = 0; i < ship.length; i++) {
            if (vertical && board[x + i][y].isPartOfShip === false) {
                board[x + i][y].isPartOfShip = true;
                board[x + i][y].ship = ship.name;
                ship.addCoordinates([x + i, y]);
            } else if (!vertical && board[x][y + i].isPartOfShip === false) {
                board[x][y + i].isPartOfShip = true;
                board[x][y + i].ship = ship.name;
                ship.addCoordinates([x, y + i]);
            } else {
                return 'cell already part of a ship';
            }
        }
    };

    const receiveAttack = (coordinates) => {
        const [x, y] = coordinates;
        if (board[x][y].isAttacked === false) {
            board[x][y].isAttacked = true;
            switch (board[x][y].ship) {
                case 'carrier':
                    carrier.hit();
                    break;
                case 'battleship':
                    battleship.hit();
                    break;
                case 'destroyer':
                    destroyer.hit();
                    break;
                case 'submarine':
                    submarine.hit();
                    break;
                case 'patrol':
                    patrolBoat.hit();
                    break;
                default:
            }
        } else {
            return 'cell already attacked';
        }
    };

    const allSunk = () => {
        if (
            carrier.isSunk() &&
            battleship.isSunk() &&
            destroyer.isSunk() &&
            submarine.isSunk() &&
            patrolBoat.isSunk()
        )
            return true;
    };

    return { getBoard, placeShip, receiveAttack, allSunk };
};

export default gameboard;
