import footer from './footer';
import header from './header';
import main from './main';
import './sass/style.scss';

const renderUI = () => {
    const body = document.querySelector('body');

    body.appendChild(header());
    body.appendChild(main());
    body.appendChild(footer());
};

export default renderUI;
