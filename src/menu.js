function menuContent() {
    const menu = document.createElement('img');
    
    menu.src = '../dist/img/viet_menu.jpg';
    menu.setAttribute('class', 'foodMenu');

    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }

    info.appendChild(menu);
}    

export { menuContent };
    