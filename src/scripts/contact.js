const loadContact = () => {
    const main = document.querySelector('#main');
    main.innerHTML = '';

    const intro = document.createElement('div');
    intro.className = 'intro';

    const greet = document.createElement('p');
    greet.innerText = `Hi, I am Golam Mostafa from most beautiful and wonderful country in the world "Bangladesh"
                    to contact with me ->`;
 
    intro.appendChild(greet);

    const email = document.createElement('p');
    email.innerText = `Email: `
    const eLink = document.createElement('a');
    eLink.innerText = 'mostafarmstu@gmail.com'
    email.appendChild(eLink);

    intro.appendChild(email);

    const github = document.createElement('p');
    github.innerText = `My github link: `
    
    const gitLink = document.createElement('a');
    gitLink.innerText = `golammostafa13.git`;
    github.appendChild(gitLink);

    intro.appendChild(github);

    main.appendChild(intro);
}
export default loadContact;