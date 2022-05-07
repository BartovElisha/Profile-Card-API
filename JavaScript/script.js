const delayMs = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(),ms));
}

// Test delayMs Function
//delayMs(5000).then(() => alert('5 Sec'));

const url = 'http://localhost:3001/profile';

// Methode 1:
// function fetchTodos() {
//     console.log('Fetch todo started...');
//     return delayMs(5000)
//         .then(() => fetch(url))
//         .then(response => response.json());
// }

// fetchTodos()
//     .then(data => {
//         document.getElementById("importedHTML").innerHTML = data.profiles[0].firstName;
//         console.log('First Name: ',data.profiles[0].firstName);
//     })
//     .catch(error => console.log('Error: ',error));

// Methode 2:
async function fetchAsyncTodos() {
    let statusMessageElement = document.getElementById("status-message");
    let cardUserFirstNameElement = document.getElementById("user-first-name");
    let cardUserLastNameElement = document.getElementById("user-last-name");
    let cardUserIdElement = document.getElementById("user-id-number");
    let cardUserAgeElement = document.getElementById("user-age");
    let cardUserNameElement = document.getElementById("user-name");
    let cardUserEmailElement = document.getElementById("user-email");

    clearProfileCard();
    statusMessageElement.innerHTML = "Get user data from server started...";

    try {
        await delayMs(5000);
        const response = await fetch(url);
        const data = await response.json();

        cardUserFirstNameElement.innerHTML = data.profiles[0].firstName;
        cardUserLastNameElement.innerHTML = data.profiles[0].lastName;
        cardUserIdElement.innerHTML = data.profiles[0].id;
        cardUserAgeElement.innerHTML = data.profiles[0].age;
        cardUserNameElement.innerHTML = data.profiles[0].user;
        cardUserEmailElement.innerHTML = data.profiles[0].mail;

        statusMessageElement.innerHTML = "Get user data from server finished.";
    } 
    catch(error) {
        statusMessageElement.innerHTML = "Error, Get user data from server failed, please try restart mockoon server.";
    }
    finally {

    }
}