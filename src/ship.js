const ship = (length) => {
    let hits = 0;

    const getHits = () => hits;
    const hit = () => hits++;

    const isSunk = () => length === hits;

    return { length, getHits, hit, isSunk };
};

export default ship;
