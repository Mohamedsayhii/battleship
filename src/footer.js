import GithubLogo from './assets/github-brands.svg';

const footer = () => {
    const footer = document.createElement('footer');
    footer.textContent = 'Realized by MohamedSayhii';

    const githubLink = document.createElement('a');
    const githubIcon = document.createElement('img');

    githubLink.href = 'https://github.com/mohamedsayhii';
    githubIcon.src = GithubLogo;
    githubLink.appendChild(githubIcon);

    footer.appendChild(githubLink);

    return footer;
};

export default footer;
