import ship from '../ship';

describe('Ship unit tests', () => {
    const carrier = ship('carrier', 5);
    const patrolBoat = ship('patrol', 2);

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
