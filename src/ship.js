const ship = (name, length) => {
    let hits = 0;
    const shipCoordinates = [];

    const addCoordinates = (coordinates) => shipCoordinates.push(coordinates);
    const hit = () => hits++;
    const isSunk = () => length === hits;

    const getHits = () => hits;
    const getShipCoordinates = () => shipCoordinates;

    return {
        name,
        length,
        getHits,
        getShipCoordinates,
        addCoordinates,
        hit,
        isSunk,
    };
};

const carrier = ship('carrier', 5);
const battleship = ship('battleship', 4);
const destroyer = ship('destroyer', 3);
const submarine = ship('submarine', 3);
const patrolBoat = ship('patrol', 2);

export { carrier, battleship, destroyer, submarine, patrolBoat };
