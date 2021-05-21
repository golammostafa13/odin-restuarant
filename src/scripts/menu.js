const createItem = (name, price) => {
    const item = document.createElement('div');
    item.className = 'item';

    const img = document.createElement('img');
    img.src = `images/${name}.jpg`;
    img.al = `${name}`;

    console.log(img?.src);
    item.appendChild(img);

    const p1 = document.createElement('p');
    p1.innerText = name;

    item.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = 'Price '+price+'$ only';

    item.appendChild(p2);

    return item;
}
const loadMenu = () => {
    const main = document.querySelector('#main');
    main.innerHTML = "";

    const menu = document.createElement('div');
    menu.className = 'menu';

    const pizza = createItem('pizza', 200);
    menu.appendChild(pizza);
    const porota = createItem('porota', 1000);
    menu.appendChild(porota);
    const nodoles = createItem('nodoles', 100);
    menu.appendChild(nodoles);
    const haleem = createItem('haleem', 50);
    menu.appendChild(haleem);
    const biriyani = createItem('biriyani', 1000);
    menu.appendChild(biriyani);
    const drinks = createItem('drinks', 0);
    menu.appendChild(drinks);
    const coffee = createItem('coffee', 123);
    menu.appendChild(coffee);

    main.appendChild(menu);
}
export default loadMenu;