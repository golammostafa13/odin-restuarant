const createItem = (name) => {
    const item = document.createElement('div');
    item.className = 'item';

    const img = document.createElement('img');
    img.src = '../../dist/images/drinks.jpg';
    item.appendChild(img);

    const p = document.createElement('p');
    p.innerText = name;

    return item;
}
const loadMenu = () => {
    const chef = document.querySelector('#chef');
    chef.innerHTML = "";

    const pizza = createItem('pizza');
    chef.appendChild(pizza);
    const porota = createItem('porota');
    chef.appendChild(porota);
    const nodoles = createItem('nodoles');
    chef.appendChild(nodoles);
    const haleem = createItem('haleem');
    chef.appendChild(haleem);
    const biriyani = createItem('biriyani');
    chef.appendChild(biriyani);
    const drinks = createItem('drinks');
    chef.appendChild(drinks);
    const coffee = createItem('coffee');
    chef.appendChild(coffee);
}
export default loadMenu;