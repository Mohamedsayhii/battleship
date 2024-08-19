import ship from './ship';

const gameboardCell = (coordinates) => {
    const isAttacked = false;
    const isPartOfShip = false;
    const ship = '';

    return { coordinates, isAttacked, isPartOfShip, ship };
};

const gameboard = () => {
    const board = [];
    const carrier = ship('carrier', 5);
    const battleship = ship('battleship', 4);
    const destroyer = ship('destroyer', 3);
    const submarine = ship('submarine', 3);
    const patrolBoat = ship('patrol', 2);

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
        const shipCoordinates = [];

        if (vertical) {
            if (x + ship.length <= 10) {
                for (let i = 0; i < ship.length; i++) {
                    if (!board[x + i][y].isPartOfShip) {
                        board[x + i][y].isPartOfShip = true;
                        board[x + i][y].ship = ship.name;
                        shipCoordinates.push([x + i, y]);
                    } else {
                        return 'Incorrect placement of ship';
                    }
                }
            } else {
                return 'Incorrect placement of ship';
            }
        } else if (!vertical) {
            if (y + ship.length <= 10) {
                for (let i = 0; i < ship.length; i++) {
                    if (!board[x][y + i].isPartOfShip) {
                        board[x][y + i].isPartOfShip = true;
                        board[x][y + i].ship = ship.name;
                        shipCoordinates.push([x, y + i]);
                    } else {
                        return 'Incorrect placement of ship';
                    }
                }
            } else {
                return 'Incorrect placement of ship';
            }
        } else {
            return 'Incorrect placement of ship';
        }

        return shipCoordinates;
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
            submarine.isSunk()
        )
            return true;

        return false;
    };

    const allShips = [carrier, battleship, destroyer, submarine, patrolBoat];

    return { allShips, getBoard, placeShip, receiveAttack, allSunk };
};

export default gameboard;
