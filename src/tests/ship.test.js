import ship, { carrier, patrolBoat } from '../ship';

describe('Ship unit tests', () => {
    test('should return hits', () => {
        expect(carrier.getHits()).toBe(0);
    });
    test('should increment hits', () => {
        carrier.hit();
        carrier.hit();
        expect(carrier.getHits()).toBe(2);
    });
    test('should check if a ship has not sunk', () => {
        carrier.hit();
        expect(carrier.isSunk()).toBeFalsy();
    });
    test('should check if a ship has sunk', () => {
        patrolBoat.hit();
        patrolBoat.hit();
        expect(patrolBoat.isSunk()).toBeTruthy();
    });
});
