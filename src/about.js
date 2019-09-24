function aboutContent() {
    const aboutText = document.createElement('pre');

    aboutText.textContent = `Welcome to the home of đụ mámái Restaurant! This is your premiere stop for the greatest Vietnamese food
Hawaii has ever tasted! Our chefs are da best!

We make good food pho you!`;

    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }
    info.appendChild(aboutText);
}

export { aboutContent };