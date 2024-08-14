const ship = (name, length) => {
    let hits = 0;

    const getHits = () => hits;
    const hit = () => hits++;
    const isSunk = () => length === hits;

    return {
        name,
        length,
        getHits,
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
