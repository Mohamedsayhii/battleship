// Test cases
import gameboard from '../gameboard';
import { battleship, carrier } from '../ship';

describe('gameboard test units', () => {
    const game = gameboard();
    const board = game.getBoard();

    test('should check if cell is part of ship', () => {
        game.placeShip(carrier, [0, 0], false);
        expect(board[0][0].isPartOfShip).toBeTruthy();
    });

    test('should check if cell is not part of ship', () => {
        expect(board[5][5].isPartOfShip).toBeFalsy();
    });

    test('should check if a ship is horizontal and placed correctly', () => {
        expect(carrier.getShipCoordinates()).toStrictEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
        ]);
    });

    test('should check if a ship is vertical and placed correctly', () => {
        game.placeShip(battleship, [5, 5], true);
        expect(battleship.getShipCoordinates()).toStrictEqual([
            [5, 5],
            [6, 5],
            [7, 5],
            [8, 5],
        ]);
    });

    test('should reject incorrect placements of ships', () => {
        expect(game.placeShip(carrier, [9, 9], false)).toMatch(
            'Incorrect placement of a ship',
        );
    });

    test('should reject cells already part of ships', () => {
        expect(game.placeShip(carrier, [5, 5], false)).toMatch(
            'cell already part of a ship',
        );
    });

    test('should record missed attacks', () => {
        game.receiveAttack([9, 9]);
        expect(board[9][9].isPartOfShip).toBeFalsy();
        expect(board[9][9].isAttacked).toBeTruthy();
    });

    test('should record attack on ships', () => {
        game.receiveAttack([0, 0]);
        expect(board[0][0].isPartOfShip).toBeTruthy();
        expect(board[0][0].isAttacked).toBeTruthy();
        expect(carrier.getHits()).toBe(1);
    });

    test('should record multiple attacks on ship', () => {
        game.receiveAttack([5, 5]);
        game.receiveAttack([6, 5]);
        game.receiveAttack([7, 5]);
        expect(battleship.getHits()).toBe(3);
    });

    test('should not increment hits if cell is already attacked', () => {
        expect(game.receiveAttack([5, 5])).toMatch('cell already attacked');
    });
});
