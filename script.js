// Data
let produits = [];
let selectedRowIndex = -1;

const categories = [
    { id: 1, nom: "Informatique" },
    { id: 2, nom: "Électronique" },
    { id: 3, nom: "Mobilier" },
    { id: 4, nom: "Alimentation" },
    { id: 5, nom: "Vêtements" }
];

// DOM Elements
const oCode        = document.getElementById("code");
const oTitre       = document.getElementById("titre");
const oDescription = document.getElementById("description");
const oPrix        = document.getElementById("prix");
const oCategorie   = document.getElementById("categorie");
const tdata        = document.getElementById("tdata");
const searchBar    = document.getElementById("searchBar");

// Populate categorie dropdown from categories array
for (let i = 0; i < categories.length; i++) {
    oCategorie.innerHTML += `<option value="${categories[i].nom}">${categories[i].nom}</option>`;
}

// Events
document.getElementById("sauvegarder").addEventListener("click", sauvegarder);
document.getElementById("modifier").addEventListener("click", modifier);
document.getElementById("afficher-data").addEventListener("click", afficher);
document.getElementById("vider").addEventListener("click", vider);
document.getElementById("supprimer").addEventListener("click", supprimer);
searchBar.addEventListener("input", rechercher);

// Sauvegarder : validate then push to array
function sauvegarder(e) {
    e.preventDefault();

    if (oCode.value === "" || oTitre.value === "" || oDescription.value === "" || oPrix.value === "" || oCategorie.value === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (oPrix.value <= 0) {
        alert("Le prix doit être un nombre positif.");
        return;
    }

    let nouveauProduit = {
        code: oCode.value,
        titre: oTitre.value,
        description: oDescription.value,
        prix: oPrix.value,
        categorie: oCategorie.value
    };

    produits.push(nouveauProduit);
    vider();
}

// Afficher : display all products in the table
function afficher(e) {
    if (e) e.preventDefault();

    let tableContent = "";

    for (let i = 0; i < produits.length; i++) {
        tableContent += `<tr onclick="selectionner(event, ${i})">
                            <td>${produits[i].code}</td>
                            <td>${produits[i].titre}</td>
                            <td>${produits[i].description}</td>
                            <td>${produits[i].prix}</td>
                            <td>${produits[i].categorie}</td>
                        </tr>`;
    }

    tdata.innerHTML = tableContent;
    selectedRowIndex = -1;
}

// Selectionner : highlight a row and fill the form
function selectionner(e, index) {
    let rows = tdata.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove("selected");
    }

    e.currentTarget.classList.add("selected");
    selectedRowIndex = index;

    // Fill the form with the selected row's data
    oCode.value        = produits[index].code;
    oTitre.value       = produits[index].titre;
    oDescription.value = produits[index].description;
    oPrix.value        = produits[index].prix;
    oCategorie.value   = produits[index].categorie;
}

// Modifier : update the selected product with form values
function modifier(e) {
    e.preventDefault();

    if (selectedRowIndex === -1) {
        alert("Veuillez sélectionner une ligne avant de modifier.");
        return;
    }

    if (oCode.value === "" || oTitre.value === "" || oDescription.value === "" || oPrix.value === "" || oCategorie.value === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    produits[selectedRowIndex] = {
        code: oCode.value,
        titre: oTitre.value,
        description: oDescription.value,
        prix: oPrix.value,
        categorie: oCategorie.value
    };

    afficher();
    vider();
}

// Vider : clear all form fields
function vider(e) {
    if (e) e.preventDefault();
    oCode.value        = "";
    oTitre.value       = "";
    oDescription.value = "";
    oPrix.value        = "";
    oCategorie.value   = categories[0].nom;
}

// Supprimer : delete selected row
function supprimer(e) {
    e.preventDefault();

    if (selectedRowIndex === -1) {
        alert("Veuillez sélectionner une ligne avant de supprimer.");
        return;
    }

    produits.splice(selectedRowIndex, 1);
    afficher();
}

// Rechercher : filter table by titre or categorie
function rechercher() {
    let searchValue = searchBar.value.toLowerCase();
    let rows = tdata.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        let titre     = rows[i].cells[1].textContent.toLowerCase();
        let categorie = rows[i].cells[4].textContent.toLowerCase();

        if (titre.includes(searchValue) || categorie.includes(searchValue)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}