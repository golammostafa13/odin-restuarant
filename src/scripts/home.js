const url = 'http://amakenlb.com/wp-content/uploads/2016/07/stock-footage-happy-chef-making-ok-sign-to-camera-in-commercial-kitchen.jpg';

const createLine = (text) => {
    const h2 = document.createElement('h2');
    h2.innerText = text;
    return h2;
}

const createChef = (id) => {
    const chef = document.createElement('div');
    chef.setAttribute('id', id);

    const firstLine = createLine('Best quality in your country');
    chef.appendChild(firstLine);

    const secondLine = createLine('Made with passion since 1901');
    chef.appendChild(secondLine);

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.src = url;
    imgDiv.appendChild(img);
    
    chef.appendChild(imgDiv);

    const thirdLine = createLine('Order food Get on Mood');
    chef.appendChild(thirdLine);

    return chef;
}
const loadHome = () =>{
    const main = document.querySelector('#main');
    main.innerHTML = '';
    
    const chef = createChef('chef');
    main.appendChild(chef);
}
export default loadHome;