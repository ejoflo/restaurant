function contactContent() {
    const contactGrid = document.createElement('div');
    const contactTitle = document.createElement('h2');
    const contactText = document.createElement('pre');
    const contactMap = document.createElement('img');

    contactMap.src = '../dist/img/location.jpg';
    contactMap.setAttribute('class', 'contactMap');

    contactText.setAttribute('class', 'contactCopy');

    contactGrid.setAttribute('id', 'contactInfo');
    contactGrid.appendChild(contactTitle);
    contactGrid.appendChild(contactText);

    contactTitle.textContent = `đụ mámái Restaurant`;
    contactText.textContent = 
    `Hours: 10:00 AM to 9:00 PM HST

Address: 2320 S King St. 
               Honolulu, HI 96826

Phone: 808-729-7782`

    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }
    contactGrid.appendChild(contactTitle);
    contactGrid.appendChild(contactText);
    contactGrid.appendChild(contactMap);
    info.appendChild(contactGrid);
}

export { contactContent };