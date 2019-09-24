function aboutContent() {
    const aboutText = document.createElement('pre');
    const aboutImage = document.createElement('img');

    aboutImage.src = '../dist/img/venue.jpg';
    aboutImage.setAttribute('class', 'aboutImage');

    aboutText.textContent = 
    `Welcome to the home of đụ mámái Restaurant! This is your premiere stop for the greatest 
Vietnamese food Hawaii has ever tasted! Our chefs are da best!

We make good food pho you! 

`;

    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }
    
    info.appendChild(aboutText);
    info.appendChild(aboutImage);
}

export { aboutContent };