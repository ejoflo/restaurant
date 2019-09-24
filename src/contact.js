function contactContent() {
    const contactText = document.createElement('pre');

    contactText.textContent = `This is where the contact information will go.`;

    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }
    info.appendChild(contactText);
}

export { contactContent };