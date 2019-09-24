import { frontPage } from './page-init.js';
import { aboutContent } from './about.js';
import { menuContent } from './menu.js';
import { contactContent } from './contact.js';

frontPage();
// aboutContent();
// menuContent();
contactContent();

const createListeners = function() {
    const aboutTab = document.querySelector('.about');
    const menuTab = document.querySelector('.food');
    const contactTab = document.querySelector('.contact');

    console.log(aboutContent);
    aboutTab.addEventListener('click', aboutContent);
    menuTab.addEventListener('click', menuContent);
    contactTab.addEventListener('click', contactContent);
};

createListeners();