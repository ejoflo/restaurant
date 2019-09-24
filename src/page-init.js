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
    content.appendChild(main);
    main.setAttribute('id', 'main');
    
    main.appendChild(header);
    header.textContent = 'đụ mámái Restaurant';

    main.appendChild(hero);
    hero.src = '../dist/img/viet_food.jpg';
    hero.setAttribute('class', 'hero');

    main.appendChild(menu);
    menu.setAttribute('id', 'menu');
    
    main.appendChild(info);
    info.setAttribute('id', 'info');

    menu.appendChild(about);
    about.setAttribute('class', 'aboutActive');
    about.textContent = 'ABOUT';

    menu.appendChild(food);
    food.setAttribute('class', 'food');
    food.textContent = 'MENU';

    menu.appendChild(contact);
    contact.setAttribute('class', 'contact');
    contact.textContent = 'CONTACT';
}

export { frontPage };
