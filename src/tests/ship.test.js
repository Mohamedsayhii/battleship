import ship from '../ship';

describe('Ship unit tests', () => {
    test('should return hits', () => {
        const carrier = ship(5);
        expect(carrier.getHits()).toBe(0);
    });
    test('should increment hits', () => {
        const carrier = ship(5);
        carrier.hit();
        carrier.hit();
        expect(carrier.getHits()).toBe(2);
    });
    test('should check if a ship has not sunk', () => {
        const carrier = ship(5);
        carrier.hit();
        expect(carrier.isSunk()).toBeFalsy();
    });
    test('should check if a ship has sunk', () => {
        const carrier = ship(5);
        carrier.hit();
        carrier.hit();
        carrier.hit();
        carrier.hit();
        carrier.hit();
        expect(carrier.isSunk()).toBeTruthy();
    });
});
