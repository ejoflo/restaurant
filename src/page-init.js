const content = document.getElementById('content');
const main = document.createElement('div');
const header = document.createElement('h1');
const hero = document.createElement('img');
const menu = document.createElement('div');
const about = document.createElement('p');
const food = document.createElement('p');
const contact = document.createElement('p');
const info = document.createElement('div');

const frontPage = function() {
    hero.src = '../dist/img/viet_food.jpg';
    hero.setAttribute('class', 'hero');

    content.appendChild(main);

    main.setAttribute('id', 'main');
    main.appendChild(header);
    main.appendChild(hero);
    main.appendChild(menu);
    main.appendChild(info);

    menu.setAttribute('id', 'menu');
    info.setAttribute('id', 'info');

    header.textContent = 'đụ mámái Restaurant';

    menu.appendChild(about);
    about.setAttribute('class', 'about');
    about.textContent = 'ABOUT';

    menu.appendChild(food);
    food.setAttribute('class', 'food');
    food.textContent = 'MENU';

    menu.appendChild(contact);
    contact.setAttribute('class', 'contact');
    contact.textContent = 'CONTACT';


}

// const createListeners = () {
    
// }


export { frontPage };