/* eslint-disable no-lonely-if */
/* eslint-disable eqeqeq */
import ship from './ship';

function includesArray(array, target) {
    return array.some(
        (subArray) =>
            subArray.length === target.length &&
            subArray.every((value, index) => value === target[index]),
    );
}

function includesCoordinates(array, target, shipLength, vertical) {
    let result = false;

    if (vertical) {
        for (let i = 0; i < shipLength; i++) {
            if (includesArray(array, [target[0] + i, target[1]])) result = true;
        }
    } else {
        for (let i = 0; i < shipLength; i++) {
            if (includesArray(array, [target[0], target[1] + i])) result = true;
        }
    }

    return result;
}

const gameboardCell = (coordinates) => {
    const isAttacked = false;
    const isPartOfShip = false;
    const ship = '';

    return { coordinates, isAttacked, isPartOfShip, ship };
};

const gameboard = () => {
    let board = [];
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

    const resetBoard = () => {
        board = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(gameboardCell([i, j]));
            }
            board.push(row);
        }
    };

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

    const randomPlacement = () => {
        resetBoard();
        const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
        const existingCoordinates = [];
        let i = 0;
        while (i < ships.length) {
            const randomCoordinate = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
            const randomAlignment = Math.floor(Math.random() * 2) == true;
            let shipCoordinates = [];
            if (randomAlignment) {
                if (
                    randomCoordinate[0] + ships[i].length - 1 < 10 &&
                    !includesCoordinates(
                        existingCoordinates,
                        randomCoordinate,
                        ships[i].length,
                        true,
                    )
                ) {
                    shipCoordinates = placeShip(
                        ships[i],
                        randomCoordinate,
                        randomAlignment,
                    );
                    for (let j = 0; j < shipCoordinates.length; j++) {
                        existingCoordinates.push(shipCoordinates[j]);
                    }
                    i++;
                }
            } else {
                if (
                    randomCoordinate[1] + ships[i].length - 1 < 10 &&
                    !includesCoordinates(
                        existingCoordinates,
                        randomCoordinate,
                        ships[i].length,
                        false,
                    )
                ) {
                    shipCoordinates = placeShip(
                        ships[i],
                        randomCoordinate,
                        randomAlignment,
                    );
                    for (let j = 0; j < shipCoordinates.length; j++) {
                        existingCoordinates.push(shipCoordinates[j]);
                    }
                    i++;
                }
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

        return false;
    };

    return {
        getBoard,
        placeShip,
        randomPlacement,
        receiveAttack,
        allSunk,
    };
};

export default gameboard;
