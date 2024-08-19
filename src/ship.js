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

export default ship;
