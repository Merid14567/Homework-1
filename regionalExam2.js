const submitButton = document.getElementById("submit");
const nom = document.getElementById("nomComplet");
const ville = document.getElementById("ville");
const competence = document.getElementById("competence");
const disponibilite = document.getElementById("disponibilite");
const typemission = document.getElementById("typemission");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const htmlTable = document.querySelector("tbody");
const deleteButton = document.getElementById("dltbutton");

const regexPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

let currentClickedRow = null;

submitButton.addEventListener("click", submitting);

function submitting() {
    if (nom.value === "" || ville.value === "" || competence.value === "" || disponibilite.value === "" || typemission.value === "" || email.value === "" || password.value === "") {
        alert("please fill everything");
    } else if (!regexPattern.test(email.value)) {
        alert("the email isnt valid");
    } else if (password.value.length <= 6) {
        alert("the password is shorter than or equal to six characters");
    } else {
            const valeurNom = nom.value;
            const valeurVille = ville.value;
            const valeurCompetence = competence.value;
            const valeurDisponibilite = disponibilite.value;
            const valeurTypeMission = typemission.value;
            const valeurEmail = email.value;
            const valeurPass = password.value;
            console.log(valeurNom, valeurVille, valeurCompetence, valeurDisponibilite, valeurTypeMission, valeurEmail, valeurPass);
            const Candidature = {Nom: nom.value, Ville: ville.value, Competence: competence.value, Disponibilite: disponibilite.value, Typemission: typemission.value};
            table.push(Candidature);
            let content = "";
            for (let i=0; i < table.length; i++) {
                content  += `<tr onclick="clicked(event)">
                                <td>${table[i].Nom}</td>
                                <td>${table[i].Ville}</td>
                                <td>${table[i].Competence}</td>
                                <td>${table[i].Disponibilite}</td>
                                <td>${table[i].Typemission}</td>
                            </tr>`
            }
            htmlTable.innerHTML = content;
    }
}

const table = [];

function clicked(e) {
    currentClickedRow = e.currentTarget;
    let row = e.currentTarget;
    row.classList.toggle("selected");
}

deleteButton.addEventListener("click", deleting);

function deleting() {
    if (currentClickedRow === null || !currentClickedRow.classList.contains("selected")) {
        alert("no rows were selected");
    } else {
        currentClickedRow.remove();
    }
}