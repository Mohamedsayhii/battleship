import gameboard from './gameboard';

const player = (type) => {
    const playerGameboard = gameboard();

    return { type, playerGameboard };
};

export default player;
