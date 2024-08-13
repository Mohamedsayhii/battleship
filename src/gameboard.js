const gameboardCell = (coordinates) => {
    const isAttacked = false;
    const isPartOfShip = false;

    return { isAttacked, isPartOfShip };
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
        const shipCoordinates = [];

        if (x + ship.length - 1 > 9 || y + ship.length - 1 > 9)
            return 'Incorrect placement of a ship';

        for (let i = 0; i < ship.length; i++) {
            if (vertical && board[x + i][y].isPartOfShip === false) {
                board[x + i][y].isPartOfShip = true;
                shipCoordinates.push([x + i, y]);
            } else if (!vertical && board[x][y + i].isPartOfShip === false) {
                board[x][y + i].isPartOfShip = true;
                shipCoordinates.push([x, y + i]);
            } else {
                return 'cell already part of a ship';
            }
        }

        return shipCoordinates;
    };

    const receiveAttack = (coordinates) => {
        const [x, y] = coordinates;
        board[x][y].isAttacked = true;
    };

    return { getBoard, placeShip, receiveAttack };
};

export default gameboard;
