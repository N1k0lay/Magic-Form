let history = JSON.parse(localStorage.getItem('historyForm')) || [];
let divCards = document.querySelector('.history-cards');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const updateHistory = () => {
    let history = JSON.parse(localStorage.getItem('historyForm')) || [];
    removeAllChildNodes(divCards);
    history.map(e => {
        let historyCard = document.createElement("div");
        historyCard.classList.add('submit-history-card');
        historyCard.setAttribute('key', e.id);
        historyCard.innerHTML = `
            <span>First Name</span>
            <p class="card-first-name">${e.firstName}</p>
            <span>Last Name</span>
            <p class="card-last-name">${e.lastName}</p>
            <span>Email</span>
            <p class="card-email">${e.email}</p>
            <span>Phone</span>
            <p class="card-phone">${e.phone}</p>
            <span>Company</span>
            <p class="card-company">${e.company}</p>
            <span>Address</span>
            <p class="card-address">${e.address}</p>
            <button class="delete-button" onclick="deleteCard(Number(this.parentNode.getAttribute('key')))">Delete</button>`;
        divCards.append(historyCard);
    });
}

const deleteCard = (id) => {
    let newHistory = history.filter(card => card.id !== id);
    localStorage.setItem('historyForm', JSON.stringify(newHistory));
    updateHistory();
}

updateHistory();

let sync = setInterval(() => updateHistory(), 100);