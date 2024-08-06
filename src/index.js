import _ from 'lodash';
import './sass/style.scss';

if (process.env.NODE_ENV !== 'prodcution') {
    console.log('Looks like we are in development mode!');
}

export default function printMe() {
    console.log('Called from print.js!');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hamza'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
