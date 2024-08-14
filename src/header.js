const header = () => {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = 'Battleship';

    const instructions = document.createElement('div');
    instructions.className = 'instructions';
    instructions.textContent = 'Place your ships!';

    header.appendChild(title);
    header.appendChild(instructions);

    return header;
};

export default header;
