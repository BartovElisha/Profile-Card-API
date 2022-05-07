function togleDisplayDarkLightMode() {
    let bodyElement = document.body;
    let headerElement = document.getElementById('header-dark-mode');
    let DarkSvgiconElement = document.getElementById('icon-dark-mode');
    let inputSectionElement = document.getElementById('input-section-dark-mode');  
    let cardSectionElement = document.getElementById('card-dark-mode');  
    
    // Body Element update Dark/Light mode
    bodyElement.classList.toggle("bg-dark");

    // Header Element update Dark/Light mode
    headerElement.classList.toggle("bg-dark");
    headerElement.classList.toggle("text-white");
    
    // Display mode icon Element update Dark/Light mode
    DarkSvgiconElement.classList.toggle("icon-dark");

    // Input Section Element update Dark/Light mode
    inputSectionElement.classList.toggle("text-white");
    
    // Card Element update Dark/Light mode
    cardSectionElement.classList.toggle("bg-dark");
    cardSectionElement.classList.toggle("text-white");
}

function clearProfileCard() {
    let statusMessageElement = document.getElementById("status-message");
    let cardUserFirstNameElement = document.getElementById("user-first-name");
    let cardUserLastNameElement = document.getElementById("user-last-name");
    let cardUserIdElement = document.getElementById("user-id-number");
    let cardUserAgeElement = document.getElementById("user-age");
    let cardUserNameElement = document.getElementById("user-name");
    let cardUserEmailElement = document.getElementById("user-email");

    while(statusMessageElement.firstChild) {
        statusMessageElement.removeChild(statusMessageElement.lastChild);
    }
    while(cardUserFirstNameElement.firstChild) {
        cardUserFirstNameElement.removeChild(cardUserFirstNameElement.lastChild);
    }
    while(cardUserLastNameElement.firstChild) {
        cardUserLastNameElement.removeChild(cardUserLastNameElement.lastChild);
    }
    while(cardUserIdElement.firstChild) {
        cardUserIdElement.removeChild(cardUserIdElement.lastChild);
    }
    while(cardUserAgeElement.firstChild) {
        cardUserAgeElement.removeChild(cardUserAgeElement.lastChild);
    }
    while(cardUserNameElement.firstChild) {
        cardUserNameElement.removeChild(cardUserNameElement.lastChild);
    }
    while(cardUserEmailElement.firstChild) {
        cardUserEmailElement.removeChild(cardUserEmailElement.lastChild);
    }
}

 