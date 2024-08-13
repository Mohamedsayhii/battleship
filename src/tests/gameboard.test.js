// Test cases
import gameboard from '../gameboard';
import ship from '../ship';

describe('gameboard test units', () => {
    const game = gameboard();
    const board = game.getBoard();
    const carrier = ship(5);
    const shipCoordinates = game.placeShip(carrier, [0, 0], false);

    test('should check if cell is part of ship', () => {
        expect(board[0][0].isPartOfShip).toBeTruthy();
    });

    test('should check if cell is not part of ship', () => {
        expect(board[5][5].isPartOfShip).toBeFalsy();
    });

    test('should check if a ship is horizontal and placed correctly', () => {
        expect(shipCoordinates).toStrictEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
        ]);
    });

    test('should check if a ship is vertical and placed correctly', () => {
        expect(game.placeShip(carrier, [5, 5], true)).toStrictEqual([
            [5, 5],
            [6, 5],
            [7, 5],
            [8, 5],
            [9, 5],
        ]);
    });

    test('should reject incorrect placements of ships', () => {
        expect(game.placeShip(carrier, [9, 9], false)).toMatch(
            'Incorrect placement of a ship',
        );
    });

    test('should check for cells already part of ships', () => {
        expect(game.placeShip(carrier, [5, 5], false)).toMatch(
            'cell already part of a ship',
        );
    });

    test('should record attacks for missed shots', () => {
        game.receiveAttack([9, 9]);
        expect(board[9][9].isPartOfShip).toBeFalsy();
        expect(board[9][9].isAttacked).toBeTruthy();
    });

    test('should record attacks for hits', () => {
        game.receiveAttack([0, 0]);
        expect(board[0][0].isPartOfShip).toBeTruthy();
        expect(board[0][0].isAttacked).toBeTruthy();
    });
});
