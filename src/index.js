import { frontPage } from './page-init.js';
import { aboutContent } from './about.js';
import { menuContent } from './menu.js';
import { contactContent } from './contact.js';

frontPage();
aboutContent();
// menuContent();
// contactContent();

const createListeners = function() {
    const aboutTab = document.querySelector('.aboutActive');
    const menuTab = document.querySelector('.food');
    const contactTab = document.querySelector('.contact');

    // aboutTab.addEventListener('click', aboutContent);
    aboutTab.addEventListener('click', function() {
        aboutTab.classList = 'aboutActive';
        menuTab.classList = 'food';
        contactTab.classList = 'contact';
        aboutContent();
    });
    // menuTab.addEventListener('click', menuContent);
    menuTab.addEventListener('click', function() {
        aboutTab.classList = 'about';
        menuTab.classList = 'foodActive';
        contactTab.classList = 'contact';
        menuContent();
    });
    // contactTab.addEventListener('click', contactContent);
    contactTab.addEventListener('click', function() {
        aboutTab.classList = 'about';
        menuTab.classList = 'food';
        contactTab.classList = 'contactActive';
        contactContent();
    });
};

createListeners();