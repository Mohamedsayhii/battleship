const ship = (length) => {
    let hits = 0;
    const shipCoordinates = [];

    const addCoordinates = (coordinates) => shipCoordinates.push(coordinates);
    const hit = () => hits++;
    const isSunk = () => length === hits;

    const getHits = () => hits;
    const getShipCoordinates = () => shipCoordinates;

    return { length, getHits, getShipCoordinates, addCoordinates, hit, isSunk };
};

export default ship;
