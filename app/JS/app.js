const form = document.querySelector('.secondary__form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordInput = document.querySelector('#password');
const errorIcon = document.querySelectorAll('.error-icon')
const errorMsg = document.querySelectorAll('.error-msg');
const submitButton = document.querySelector('.submit--button');

form.addEventListener('submit', (e) => {
    console.log(e.target)
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
})

function checkFirstName() {
    if(firstNameInput.value == '' || firstNameInput.value === undefined){
        firstNameInput.classList.add('invalid');
        errorMsg[0].innerText = 'First Name cannot be empty';
        errorMsg[0].style.display = "block";
        errorIcon[0].style.display = 'block';
    } else {
        firstNameInput.classList.remove('invalid');
        errorMsg[0].innerText = ""
        errorMsg[0].style.display = "none";
        errorIcon[0].style.display = 'none';
    }
}

function checkLastName() {
    if(lastNameInput.value == '' || lastNameInput.value === undefined){
        lastNameInput.classList.add('invalid');
        errorMsg[1].innerText = 'Last Name cannot be empty';
        errorMsg[1].style.display = "block";
        errorIcon[1].style.display = 'block';
    } else {
        lastNameInput.classList.remove('invalid');
        errorMsg[1].innerText = '';
        errorMsg[1].style.display = "none";
        errorIcon[1].style.display = 'none';
    }
}

function checkEmail() {
    if(emailInput.value == '' || emailInput.value === undefined){
        emailInput.classList.add('invalid');
        errorMsg[2].innerText = 'Email cannot be empty';
        errorMsg[2].style.display = "block";
        errorIcon[2].style.display = 'block';
    } else if (!emailInput.value.match(regEx)) {
        errorMsg[2].innerText = 'Looks like this is not an email';
    } else {
        emailInput.classList.remove('invalid');
        errorMsg[2].innerHTML = '';
        errorMsg[2].style.display = 'none';
        errorIcon[2].style.display = 'none';
    }
}

function checkPassword() {
    if(passwordInput.value == '' || passwordInput.value === undefined){
        passwordInput.classList.add('invalid');
        errorMsg[3].innerText = 'Password cannot be empty';
        errorMsg[3].style.display = "block";
        errorIcon[3].style.display = 'block';
    } else {
        passwordInput.classList.remove('invalid');
        errorMsg[3].innerText = 'Password cannot be empty';
        errorMsg[3].style.display = "none";
        errorIcon[3].style.display = 'none';
    }
}