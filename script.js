let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let company = document.querySelector('#company');
let address = document.querySelector('#address');

const updateLocalStorage = () => {
    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        address: address.value,
    }
    localStorage.setItem('formData', JSON.stringify(data));
}

const importDataLS = () => {
    let data = JSON.parse(localStorage.getItem('formData'));
    if(data) {
        firstName.value = data.firstName || '';
        lastName.value = data.lastName || '';
        email.value = data.email || '';
        phone.value = data.phone || '';
        address.value = data.address || '';
        company.value = data.company || '';
    }
}
importDataLS();

const submitForm = () => {
    console.log('submit');
    let history = JSON.parse(localStorage.getItem('historyForm')) || [];
    let data = {
        id: history.length + 1,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        address: address.value,
    }
    history.push(data);
    localStorage.setItem('historyForm', JSON.stringify(history));
    clearForm();
}

const clearForm = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    company.value = '';
    localStorage.removeItem('formData');
}

let sync = setInterval(() => importDataLS(), 100);
