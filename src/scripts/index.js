import loadContact from '../scripts/contact';
import loadHome from '../scripts/home';
import loadPage from '../scripts/loadPage';
import loadMenu from '../scripts/menu';

const addNavEvents = () =>{
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');

    homeBtn.addEventListener('click',loadHome);
    menuBtn.addEventListener('click',loadMenu);
    contactBtn.addEventListener('click',loadContact);
}
const init = () =>{
    loadPage();
    loadHome();
    addNavEvents();
}
init();