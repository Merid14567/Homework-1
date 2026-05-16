const firstName = automate("prenom");

const lastName = automate("nom");

const age = automate("age");

const email = automate("email");

const phoneNumber = automate("phonenumber");

const password = automate("motDePasse");

const confirmPassword = automate("confirmationMotDePasse");

const selected = automate("selecting");

function automate(id) {
    return document.getElementById(id);
}

function verifier_donees() {
    const radio = document.querySelector('input[name="sexe"]:checked');

    let verifié = true;

    let regexPatternName = /^[A-Za-z]{3,}$/;

    let emailPattern = /^\w+@\w+\.[A-Za-z]{2,}$/;

    let phonePattern = /^\d{9}$/;

    let passwordPattern = /^(?=.*\d).{6,}$/

    if (!regexPatternName.test(firstName.value)) {
        alert("the first name must contain at least three characters");
        verifié = false;
    }
    if (!regexPatternName.test(lastName.value)) {
        alert("the last name must contain at least three characters");
    }
    if (age.value < 18 || age.value > 30) {
        alert("the age should be between 18 and 30");
        verifié = false;
    }
    if (!emailPattern.test(email.value)) {
        alert("the email must contain a @ symbol");
        verifié = false;
    }
    if (!phonePattern.test(phoneNumber.value)) {
        alert("the phone number is restricted to nine numbers");
        verifié = false;
    }
    if (!passwordPattern.test(password.value)) {
        alert("the password must be at least six characters long and contain at least one number");
        verifié = false;
    }
    if (confirmPassword.value != password.value) {
        alert("the passwords must match");
        verifié = false;
    }
    if (!radio) {
        alert("please select at least one option");
        verifié = false;
    }
    if (selected.value === "") {
        alert("please select at least one option");
        verifié = false;
    }
    return verifié;
}

const validationButton = automate("validation");

console.log(validationButton);

validationButton.addEventListener("click", verifier_donees);