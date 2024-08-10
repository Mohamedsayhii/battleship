const ship = (length) => {
    let hits = 0;

    const hit = () => hits++;
    const isSunk = () => length === hits;

    return { hit, isSunk };
};
