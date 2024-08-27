import player from './player';
import ship from './ship';

let currentPlayer = 'player1';

function includesArray(array, target) {
    return array.some(
        (subArray) =>
            subArray.length === target.length &&
            subArray.every((value, index) => value === target[index]),
    );
}

function renderGameboard(player) {
    const playerBoard = player.playerGameboard.getBoard();
    playerBoard.forEach((row) => {
        row.forEach((boardCell) => {
            const selector = `#${player.type === 'player1' ? 'firstBoard' : 'secondBoard'}${boardCell.coordinates.join('')}`;
            const boardCellDiv = document.querySelector(selector);
            if (boardCellDiv.hasAttribute('name')) {
                boardCellDiv.removeAttribute('name');
                boardCellDiv.removeAttribute('draggable');
                boardCellDiv.removeAttribute('style');
            }
            if (boardCell.isPartOfShip) {
                boardCellDiv.style.backgroundColor = 'rgba(0,0,255,0.1)';
                boardCellDiv.style.border = '2px solid #00f';
                boardCellDiv.draggable = true;
                boardCellDiv.setAttribute('name', boardCell.ship);
            }
            if (boardCell.isAttacked) {
                if (boardCell.isPartOfShip) {
                    boardCellDiv.style.backgroundColor = 'rgba(255,0,0,.2)';
                    boardCellDiv.style.border = '2px solid red';
                } else {
                    const point = document.createElement('span');
                    boardCellDiv.appendChild(point);
                }
            }
        });
    });
}

function renderOpponentView(player) {
    const playerBoard = player.playerGameboard.getBoard();
    playerBoard.forEach((row) => {
        row.forEach((boardCell) => {
            const selector = `#${player.type === 'player1' ? 'firstBoard' : 'secondBoard'}${boardCell.coordinates.join('')}`;
            const boardCellDiv = document.querySelector(selector);
            if (boardCell.isAttacked) {
                if (boardCell.isPartOfShip) {
                    boardCellDiv.style.backgroundColor = 'rgba(255,0,0,.2)';
                    boardCellDiv.style.border = '2px solid red';
                } else {
                    const point = document.createElement('span');
                    boardCellDiv.appendChild(point);
                }
            }
        });
    });
}

function passScreen() {
    const passScreen = document.createElement('div');
    passScreen.className = 'pass-screen';
    passScreen.textContent = 'click to pass screen';

    return passScreen;
}

function setUpTurns(player1, player2) {
    const firstBoard = document.querySelector('#firstBoard');
    const secondBoard = document.querySelector('#secondBoard');
    const instructions = document.querySelector('.instructions');

    const body = document.querySelector('body');
    const passScreen = document.querySelector('.pass-screen');

    passScreen.addEventListener('click', () => {
        body.removeChild(body.lastChild);
    });

    const allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
        if (cell.firstChild) {
            cell.removeChild(cell.firstChild);
        }
        cell.style.backgroundColor = '';
        cell.style.border = '';
    });

    if (currentPlayer === 'player1') {
        renderGameboard(player1);
        renderOpponentView(player2);
        firstBoard.style.pointerEvents = 'auto';
        secondBoard.style.pointerEvents = 'none';
        instructions.textContent = 'Your turn';
    } else {
        renderGameboard(player2);
        renderOpponentView(player1);
        firstBoard.style.pointerEvents = 'none';
        secondBoard.style.pointerEvents = 'auto';
        instructions.textContent = "Opponent's turn";
    }
}

function takeTurns(player1, player2) {
    const firstBoard = document.querySelector('#firstBoard');
    const secondBoard = document.querySelector('#secondBoard');
    const instructions = document.querySelector('.instructions');

    const body = document.querySelector('body');
    const passScreen = document.querySelector('.pass-screen');

    passScreen.addEventListener('click', () => {
        body.removeChild(body.lastChild);
    });

    const allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
        if (cell.firstChild) {
            cell.removeChild(cell.firstChild);
        }
        cell.style.backgroundColor = '';
        cell.style.border = '';
    });

    if (currentPlayer === 'player1') {
        renderGameboard(player1);
        renderOpponentView(player2);
        firstBoard.style.pointerEvents = 'none';
        secondBoard.style.pointerEvents = 'auto';
        instructions.textContent = 'Your turn';
    } else {
        renderGameboard(player2);
        renderOpponentView(player1);
        firstBoard.style.pointerEvents = 'auto';
        secondBoard.style.pointerEvents = 'none';
        instructions.textContent = "Opponent's turn";
    }
}

function boardsHandler(players, boards, coordIndicesArray) {
    const body = document.querySelector('body');
    players.forEach((player, index) => {
        const boardDiv = document.querySelector(boards[index]);
        const playerBoard = player.playerGameboard.getBoard();
        const coordIndices = coordIndicesArray[index];
        let clicked = false;

        boardDiv.addEventListener('click', (e) => {
            if (!clicked) {
                clicked = true;
                const coordinates = [
                    parseInt(e.target.id[coordIndices[0]], 10),
                    parseInt(e.target.id[coordIndices[1]], 10),
                ];

                const [x, y] = coordinates;

                if (!playerBoard[x][y].isAttacked) {
                    if (player.type === currentPlayer) return;

                    if (playerBoard[x][y].isPartOfShip) {
                        e.target.style.backgroundColor = 'rgba(255,0,0,.2)';
                        e.target.style.border = '2px solid red';
                    } else {
                        const point = document.createElement('span');
                        e.target.appendChild(point);
                    }

                    player.playerGameboard.receiveAttack(coordinates);

                    if (player.playerGameboard.allSunk()) {
                        const boards = document.querySelectorAll('.board');
                        boards.forEach((board) => {
                            board.style.pointerEvents = 'none';
                        });
                        const instructions =
                            document.querySelector('.instructions');
                        instructions.textContent = `${currentPlayer} won!`;
                    } else {
                        passDeviceButton.onclick = () => {
                            if (clicked) {
                                clicked = false;
                                body.appendChild(passScreen());
                                currentPlayer =
                                    currentPlayer === 'player1'
                                        ? 'opponent'
                                        : 'player1';

                                takeTurns(players[0], players[1]);
                            }
                        };
                    }
                }
            }
        });
    });
}

function takeTurnsComputer() {
    const firstBoard = document.querySelector('#firstBoard');
    const secondBoard = document.querySelector('#secondBoard');
    const instructions = document.querySelector('.instructions');

    if (currentPlayer === 'player1') {
        firstBoard.style.pointerEvents = 'none';
        secondBoard.style.pointerEvents = 'auto';
        instructions.textContent = 'Your turn';
    } else {
        firstBoard.style.pointerEvents = 'auto';
        secondBoard.style.pointerEvents = 'none';
        instructions.textContent = "Opponent's turn";
    }
}

function computerHandler(player) {
    const secondBoard = document.querySelector('#secondBoard');
    const playerBoard = player.playerGameboard.getBoard();
    const existingCoordinates = [];

    secondBoard.addEventListener('click', () => {
        const instructions = document.querySelector('.instructions');

        if (currentPlayer === 'opponent') {
            instructions.textContent = 'Computer is thinking';
            setTimeout(() => {
                let coordinates = [];
                do {
                    coordinates = [
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 10),
                    ];
                } while (includesArray(existingCoordinates, coordinates));

                const [x, y] = coordinates;

                if (!playerBoard[x][y].isAttacked) {
                    const boardCell = document.querySelector(
                        `#firstBoard${x}${y}`,
                    );
                    if (player.type === currentPlayer) return;

                    if (playerBoard[x][y].isPartOfShip) {
                        boardCell.style.backgroundColor = 'rgba(255,0,0,.2)';
                        boardCell.style.border = '2px solid red';
                    } else {
                        const point = document.createElement('span');
                        boardCell.appendChild(point);
                    }

                    existingCoordinates.push(coordinates);
                    player.playerGameboard.receiveAttack(coordinates);

                    if (player.playerGameboard.allSunk()) {
                        const boards = document.querySelectorAll('.board');
                        boards.forEach((board) => {
                            board.style.pointerEvents = 'none';
                        });
                        instructions.textContent = `${currentPlayer} won!`;
                    } else {
                        currentPlayer =
                            currentPlayer === 'player1'
                                ? 'opponent'
                                : 'player1';
                        takeTurnsComputer();
                    }
                }
            }, 0);
        }
    });
}

function boardHandler(player, board, coordIndices) {
    const boardDiv = document.querySelector(board);
    const playerBoard = player.playerGameboard.getBoard();

    boardDiv.addEventListener('click', (e) => {
        const coordinates = [
            parseInt(e.target.id[coordIndices[0]], 10),
            parseInt(e.target.id[coordIndices[1]], 10),
        ];

        const [x, y] = coordinates;

        if (!playerBoard[x][y].isAttacked) {
            if (player.type === currentPlayer) return;

            if (playerBoard[x][y].isPartOfShip) {
                e.target.style.backgroundColor = 'rgba(255,0,0,.2)';
                e.target.style.border = '2px solid red';
            } else {
                const point = document.createElement('span');
                e.target.appendChild(point);
            }

            player.playerGameboard.receiveAttack(coordinates);

            if (player.playerGameboard.allSunk()) {
                const boards = document.querySelectorAll('.board');
                boards.forEach((board) => {
                    board.style.pointerEvents = 'none';
                });
                const instructions = document.querySelector('.instructions');
                instructions.textContent = `${currentPlayer} won!`;
            } else {
                currentPlayer =
                    currentPlayer === 'player1' ? 'opponent' : 'player1';
                takeTurnsComputer();
            }
        }
    });
}

function humanVersusComputer(player1, player2) {
    startButton.style.pointerEvents = 'none';
    randomButton.style.pointerEvents = 'none';
    const instructions = document.querySelector('.instructions');
    instructions.textContent = 'your turn';

    boardHandler(player2, '#secondBoard', [11, 12]);
    computerHandler(player1);
}

function humanVersusHuman(player1, player2) {
    startButton.style.visibility = 'collapse';
    randomButton.style.visibility = 'collapse';
    passDeviceButton.style.visibility = 'visible';

    const instructions = document.querySelector('.instructions');
    instructions.textContent = 'your turn';

    const players = [player1, player2];
    const boards = ['#firstBoard', '#secondBoard'];
    const coordIndicesArray = [
        [10, 11],
        [11, 12],
    ];

    boardsHandler(players, boards, coordIndicesArray);
}

const domHandler = () => {
    const player1 = player('player1');
    let player2;
    let opponent;

    player1.playerGameboard.placeShip(ship('carrier', 5), [0, 0], false);
    player1.playerGameboard.placeShip(ship('battleship', 4), [3, 0], false);
    player1.playerGameboard.placeShip(ship('destroyer', 3), [5, 7], false);
    player1.playerGameboard.placeShip(ship('submarine', 3), [7, 0], true);
    player1.playerGameboard.placeShip(ship('patrol', 2), [8, 9], true);
    renderGameboard(player1);

    humanButton.addEventListener('click', () => {
        const opponentButtons = document.querySelector('.opponentButtons');
        opponentButtons.style.visibility = 'hidden';

        opponent = 'human';
        player2 = player('opponent');

        player2.playerGameboard.placeShip(ship('carrier', 5), [0, 0], true);
        player2.playerGameboard.placeShip(ship('battleship', 4), [1, 9], true);
        player2.playerGameboard.placeShip(ship('destroyer', 3), [2, 2], false);
        player2.playerGameboard.placeShip(ship('submarine', 3), [7, 5], false);
        player2.playerGameboard.placeShip(ship('patrol', 2), [9, 8], false);
        renderGameboard(player2);

        const body = document.querySelector('body');
        body.appendChild(passScreen());

        currentPlayer = currentPlayer === 'player1' ? 'opponent' : 'player1';
        setUpTurns(player1, player2);

        const passScreenDiv = document.querySelector('.pass-screen');
        passScreenDiv.textContent = 'Click to let Player2 place his ships';

        startButton.style.visibility = 'visible';
        randomButton.style.visibility = 'visible';
    });

    computerButton.addEventListener('click', () => {
        const opponentButtons = document.querySelector('.opponentButtons');
        opponentButtons.style.visibility = 'hidden';

        opponent = 'computer';
        player2 = player('opponent');

        player2.playerGameboard.randomPlacement();
    });

    randomButton.addEventListener('click', () => {
        if (currentPlayer === 'player1') {
            const cells = document.querySelectorAll('#firstBoard .cell');
            cells.forEach((cell) => {
                cell.style.removeProperty('background-color');
                cell.style.removeProperty('border');
            });
            player1.playerGameboard.randomPlacement();
            renderGameboard(player1);
        } else {
            const cells = document.querySelectorAll('#secondBoard .cell');
            cells.forEach((cell) => {
                cell.style.removeProperty('background-color');
                cell.style.removeProperty('border');
            });
            player2.playerGameboard.randomPlacement();
            renderGameboard(player2);
        }
    });

    function dragstartHandler(ev) {
        const board =
            currentPlayer === 'player1' ? '#firstBoard' : '#secondBoard';
        const [x, y] = currentPlayer === 'player1' ? [10, 11] : [11, 12];

        const shipName = ev.target.getAttribute('name');
        const shipCells = document.querySelectorAll(
            `${board} [name="${shipName}"]`,
        );

        const isVertical =
            shipCells.length > 1 && shipCells[0].id[x] !== shipCells[1].id[x];

        const shipData = {
            cells: Array.from(shipCells).map((cell) => cell.id),
            isVertical,
        };

        ev.dataTransfer.setData(
            'application/ship-cells',
            JSON.stringify(shipData),
        );
    }

    function dropHandler(ev) {
        ev.preventDefault();

        const board =
            currentPlayer === 'player1' ? 'firstBoard' : 'secondBoard';
        const player = currentPlayer === 'player1' ? player1 : player2;
        const [x, y] = currentPlayer === 'player1' ? [10, 11] : [11, 12];

        const shipData = JSON.parse(
            ev.dataTransfer.getData('application/ship-cells'),
        );

        const shipName = document
            .getElementById(shipData.cells[0])
            .getAttribute('name');

        player.playerGameboard.removeShip(shipName);

        const targetCoordinates = [
            parseInt(ev.target.id[x], 10),
            parseInt(ev.target.id[y], 10),
        ];

        if (
            player.playerGameboard.placeShip(
                ship(shipName, shipData.cells.length),
                targetCoordinates,
                shipData.isVertical,
            ) !== 'Incorrect placement of ship'
        ) {
            shipData.cells.forEach((cellId) => {
                const cell = document.getElementById(cellId);
                if (cell) {
                    cell.removeAttribute('name');
                    cell.removeAttribute('draggable');
                    cell.removeAttribute('style');
                }
            });

            shipData.cells.forEach((cellId, index) => {
                let newCoordinates;

                if (shipData.isVertical) {
                    newCoordinates = [
                        targetCoordinates[0] + index,
                        targetCoordinates[1],
                    ];
                } else {
                    newCoordinates = [
                        targetCoordinates[0],
                        targetCoordinates[1] + index,
                    ];
                }

                const newCellId = `${board}${newCoordinates.join('')}`;
                const newCell = document.getElementById(newCellId);

                if (newCell) {
                    newCell.style.backgroundColor = 'rgba(0,0,255,0.1)';
                    newCell.style.border = '2px solid #00f';
                    newCell.setAttribute('name', shipName);
                    newCell.draggable = true;
                }
            });
        }
    }

    function clickHandler(ev) {
        const player = currentPlayer === 'player1' ? player1 : player2;
        const board =
            currentPlayer === 'player1' ? 'firstBoard' : 'secondBoard';
        const [x, y] = currentPlayer === 'player1' ? [10, 11] : [11, 12];

        if (ev.target.style.length === 0) return;
        const shipName = ev.target.getAttribute('name');
        const shipCells = document.querySelectorAll(
            `#${board} [name="${shipName}"]`,
        );

        const isVertical =
            shipCells.length > 1 && shipCells[0].id[x] !== shipCells[1].id[x];

        const shipData = {
            cells: Array.from(shipCells).map((cell) => cell.id),
            isVertical,
        };

        const targetCoordinates = [
            parseInt(shipData.cells[0][x], 10),
            parseInt(shipData.cells[0][y], 10),
        ];

        player.playerGameboard.removeShip(shipName);

        if (
            player.playerGameboard.placeShip(
                ship(shipName, shipData.cells.length),
                targetCoordinates,
                !shipData.isVertical,
            ) !== 'Incorrect placement of ship'
        ) {
            shipData.cells.forEach((cellId) => {
                const cell = document.getElementById(cellId);
                if (cell) {
                    cell.style.backgroundColor = '';
                    cell.style.border = '';
                    cell.removeAttribute('name');
                }
            });

            shipData.cells.forEach((cellId, index) => {
                let newCoordinates;

                if (shipData.isVertical) {
                    newCoordinates = [
                        targetCoordinates[0],
                        targetCoordinates[1] + index,
                    ];
                } else {
                    newCoordinates = [
                        targetCoordinates[0] + index,
                        targetCoordinates[1],
                    ];
                }

                const newCellId = `${board}${newCoordinates.join('')}`;
                const newCell = document.getElementById(newCellId);

                if (newCell) {
                    newCell.style.backgroundColor = 'rgba(0,0,255,0.1)';
                    newCell.style.border = '2px solid #00f';
                    newCell.setAttribute('name', shipName);
                    newCell.draggable = true;
                }
            });
        }
    }

    const handler = () => {
        const cells = document.querySelectorAll('.cell');

        cells.forEach((cell) => {
            cell.addEventListener('dragstart', dragstartHandler);
            cell.addEventListener('click', clickHandler);
        });

        const boards = document.querySelectorAll('.board');
        boards.forEach((board) => {
            board.addEventListener('dragover', (ev) => ev.preventDefault());
            board.addEventListener('drop', dropHandler);
        });
    };

    window.addEventListener('DOMContentLoaded', handler);

    startButton.addEventListener('click', () => {
        const instructions = document.querySelector('.instructions');

        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.draggable = false;
            cell.removeEventListener('click', clickHandler);
        });

        if (player2 === undefined) {
            instructions.textContent = 'opponent not ready';
        } else {
            if (opponent === 'computer') {
                humanVersusComputer(player1, player2);
            } else {
                const body = document.querySelector('body');
                body.appendChild(passScreen());

                currentPlayer =
                    currentPlayer === 'player1' ? 'opponent' : 'player1';
                takeTurns(player1, player2);

                const passScreenDiv = document.querySelector('.pass-screen');
                passScreenDiv.textContent = 'Click to start the game';

                humanVersusHuman(player1, player2);
            }
        }
    });
};

export default domHandler;
