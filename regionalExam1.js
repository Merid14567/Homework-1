const specialitésJSON = [
    {"id": 1,"nom": "Médecin généraliste"}, 
    {"id": 2,"nom": "Dentiste"},
    {"id": 3,"nom": "Cardiologue"},
    {"id": 4,"nom": "Dermatologue"},
    {"id": 5,"nom": "Ophtalmologue"}
];

const selection = document.getElementById("specialité");

const fullName = document.getElementById("name");
const phoneNumber = document.getElementById("phonenumber");
const dateRendezVous = document.getElementById("daterdv");
const submitButton = document.getElementById("submitButton");
const searchBar = document.getElementById("searchbar");

for (let i=0; i < specialitésJSON.length; i++) {
    selection.innerHTML += `<option value="${specialitésJSON[i].nom}">${specialitésJSON[i].nom}</option>`;
}

submitButton.addEventListener("click", addStuff);

const tableBody = document.querySelector("tbody");


function addStuff() {
    if (fullName.value === "" || phoneNumber.value === "" || dateRendezVous.value === "" || selection.value === "") {
        alert("Please fill the entire form");
        return;
    } else {
        let name = fullName.value;
        let phone = phoneNumber.value;
        let date = dateRendezVous.value;
        let specialite = selection.value;
        console.log(name, phone, date, specialite);
        let rendezvous = new RendezVous(name, phone, date, specialite);
        if (rendezvous.estValide()) {
            tableau.push(rendezvous);
            tableBody.appendChild(rendezvous.toHTML());
        } else {
            console.log("les données ne sont pas valide");
        }
    }
}

function deleting(e) {
    let target = e.target.id;
    for (let i=0; i < tableau.length; i++) {
        if (target === tableau[i].PhoneNumber) {
            tableau.splice(i, 1);
            e.target.parentElement.remove();
        }
    }
}

class RendezVous {
    constructor(nom, telephone, date, specialite) {
        this.name = nom;
        this.PhoneNumber = telephone;
        this.Date = date;
        this.specialite = specialite;
    }

    estValide() {
        if (this.name === "" || this.PhoneNumber === "" || this.Date === "" || this.specialite === "") {
            return false;
        } else if (this.PhoneNumber.length < 8){
            return false;
        } else if (this.Date < new Date().toISOString().split("T")[0]) {
            return false;
        } else {
            return true;
        }
    }

    toHTML() {
        let tablerow = document.createElement("tr");

        let datacell1 = document.createElement("td");

        datacell1.textContent = this.name;

        tablerow.appendChild(datacell1);

        let datacell2 = document.createElement("td");

        datacell2.textContent = this.PhoneNumber;

        tablerow.appendChild(datacell2);

        let datacell3 = document.createElement("td");

        datacell3.textContent = this.Date;

        tablerow.appendChild(datacell3);

        let datacell4 = document.createElement("td");

        datacell4.textContent = this.specialite;

        tablerow.appendChild(datacell4);

        let deleteButton = document.createElement("button");

        deleteButton.id = this.PhoneNumber;

        deleteButton.setAttribute("nom", "button");

        deleteButton.textContent = "Delete";

        deleteButton.setAttribute("onclick", "deleting(event)");

        deleteButton.setAttribute("type", "button");

        tablerow.appendChild(deleteButton);

        return tablerow;
    }
}

let student1 = new RendezVous("Wassim", "0656994499", "27-06-2026", "Dentiste");

let student2 = new RendezVous("Ilyass", "0698908909", "12-04-2090", "PornActor");

student1.toHTML();

student2.toHTML();


let tableau = [];

searchBar.addEventListener("input", searching);

function searching() {
    const searchvalue = searchBar.value.toLowerCase();
    let rows = tableBody.querySelectorAll("tr");
    for (let j = 0; j < rows.length; j++) {
        let name = rows[j].cells[0].textContent.toLowerCase();
        let specialite = rows[j].cells[3].textContent.toLowerCase();
        if (name.includes(searchvalue) || specialite.includes(searchvalue)) {
            rows[j].style.display = "";
        } else {
            rows[j].style.display = "none";
        }
    }
}