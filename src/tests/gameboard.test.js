import gameboard from '../gameboard';
import ship from '../ship';

describe('gameboard test units', () => {
    const game = gameboard();
    const board = game.getBoard();

    const carrier = ship('carrier', 5);
    const battleship = ship('battleship', 4);
    const destroyer = ship('destroyer', 3);
    const submarine = ship('submarine', 3);
    const patrolBoat = ship('patrol', 2);

    game.placeShip(destroyer, [1, 0], false);
    game.placeShip(submarine, [2, 0], false);
    game.placeShip(patrolBoat, [3, 0], false);

    test('should check if a ship is horizontal and placed correctly', () => {
        expect(game.placeShip(carrier, [0, 0], false)).toStrictEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
        ]);
    });

    test('should check if a ship is vertical and placed correctly', () => {
        expect(game.placeShip(battleship, [5, 5], true)).toStrictEqual([
            [5, 5],
            [6, 5],
            [7, 5],
            [8, 5],
        ]);
    });

    test('should check if cell is part of ship', () => {
        expect(board[0][0].isPartOfShip).toBeTruthy();
    });

    test('should check if cell is not part of ship', () => {
        expect(board[7][7].isPartOfShip).toBeFalsy();
    });

    test('should reject incorrect placements of ships', () => {
        expect(game.placeShip(carrier, [9, 9], false)).toMatch(
            'Incorrect placement of ship',
        );
    });

    test('should reject overlapping of ships', () => {
        expect(game.placeShip(carrier, [5, 4], false)).toMatch(
            'Incorrect placement of ship',
        );
    });

    test('should reject cells already part of ships', () => {
        expect(game.placeShip(carrier, [5, 5], false)).toMatch(
            'Incorrect placement of ship',
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
        expect(game.allShips[0].getHits()).toBe(1);
    });

    test('should record multiple attacks on ship', () => {
        game.receiveAttack([5, 5]);
        game.receiveAttack([6, 5]);
        game.receiveAttack([7, 5]);
        game.receiveAttack([8, 5]);
        expect(game.allShips[1].getHits()).toBe(4);
        expect(game.allShips[1].isSunk()).toBeTruthy();
    });

    test('should not increment hits if cell is already attacked', () => {
        expect(game.receiveAttack([5, 5])).toMatch('cell already attacked');
    });

    test('should check for when all ships have sunk', () => {
        game.receiveAttack([0, 0]);
        game.receiveAttack([0, 1]);
        game.receiveAttack([0, 2]);
        game.receiveAttack([0, 3]);
        game.receiveAttack([0, 4]);

        game.receiveAttack([1, 0]);
        game.receiveAttack([1, 1]);
        game.receiveAttack([1, 2]);

        game.receiveAttack([2, 0]);
        game.receiveAttack([2, 1]);
        game.receiveAttack([2, 2]);

        game.receiveAttack([3, 0]);
        game.receiveAttack([3, 1]);

        expect(game.allSunk()).toBeTruthy();
    });
});
