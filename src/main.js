const createBoard = (id) => {
    const gameboardDiv = document.createElement('div');
    gameboardDiv.className = 'gameboard';

    const boardDiv = document.createElement('div');
    boardDiv.className = 'board';
    boardDiv.id = id;

    const label = document.createElement('div');
    label.className = 'board-label';
    label.textContent = id === 'firstBoard' ? 'Your grid' : "Opponent's grid";

    for (let i = 0; i < 10; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for (let j = 0; j < 10; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.id = `${id}${i}${j}`;
            rowDiv.appendChild(cellDiv);
        }
        boardDiv.appendChild(rowDiv);
    }

    gameboardDiv.appendChild(boardDiv);
    gameboardDiv.appendChild(label);

    return gameboardDiv;
};

const createButton = (textContent, id) => {
    const button = document.createElement('button');
    button.textContent = textContent;
    button.id = id;
    button.classList.add('button');

    return button;
};

const main = () => {
    const main = document.createElement('main');

    const content = document.createElement('div');
    content.className = 'content';
    content.appendChild(createBoard('firstBoard'));
    content.appendChild(createBoard('secondBoard'));

    const opponentButtons = document.createElement('div');
    opponentButtons.className = 'opponentButtons';
    opponentButtons.appendChild(createButton('HUMAN', 'humanButton'));
    opponentButtons.appendChild(createButton('COMPUTER', 'computerButton'));

    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    buttons.appendChild(createButton('START', 'startButton'));
    buttons.appendChild(createButton('RANDOMIZE', 'randomButton'));

    content.appendChild(opponentButtons);
    main.appendChild(content);
    main.appendChild(buttons);

    return main;
};

export default main;
