const createBtn = (id, text) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.innerText = text;
    return btn;
}
const createHeader = (id) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);

    const h1 = document.createElement('h1');
    h1.innerText = "Welcome To Odin Restuarant"
    header.appendChild(h1);

    const nav = createNav('nav');
    header.appendChild(nav);
    
    return header;
}
const createMain = (id) => {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}
const createFooter = (id) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    footer.innerText = `Copyright© Golam Mostafa-2021`
    return footer;
}
const createNav = (id) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createBtn('home', 'home');
    nav.appendChild(homeBtn);

    const menuBtn = createBtn('menu', 'menu');
    nav.appendChild(menuBtn);

    const contactBtn = createBtn('contact', 'contact');
    nav.appendChild(contactBtn);

    return nav;
}
const loadPage = () =>{
    const content = document.querySelector('#content');

    const header = createHeader('header');
    content.appendChild(header);

    const main = createMain('main');
    content.appendChild(main);

    const footer = createFooter('footer');
    content.appendChild(footer);
}
export default loadPage;