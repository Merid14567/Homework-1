const clients = [{id: 1,nom: "Bennani",prenom: "Sara", ville: "Settat",commandes: [{id: 101,date: "2026-04-10",produits: [{id: 1,libelle: "Clavier",prix: 120,quantite: 2}, {id: 2,libelle: "Souris",prix: 80,quantite: 1}],payee: true},{id: 102,date: "2026-04-15",produits: [{id: 3,libelle: "Ecran", prix: 950,quantite: 1}],payee: false}]},
                 {id: 2,nom: "Radi",prenom: "Hamza",ville: "Casablanca",commandes: [{id: 103,date: "2026-04-11",produits: [{id: 4,libelle: "Casque",prix: 200,quantite: 1}, {id: 5,libelle: "Webcam",prix: 300,quantite: 1}],payee: true}]},
                 {id: 3,nom: "Khalidi",prenom: "Khadija",ville: "Rabat",commandes: [{id: 104,date: "2026-04-09",produits: [{id: 6,libelle: "Imprimante",prix: 1200,quantite: 1}],payee: false}]}];

// question number one:
function afficherClients() {
    for (let i=0; i < clients.length; i++) {
        console.log(`The last name of the client is ${clients[i].nom}`);
        console.log(`The first name of the client is ${clients[i].prenom}`);
        console.log(`The city of the client is ${clients[i].ville}`);
    }
}

afficherClients();

// question number two:
function afficherCommandesClient(idClient) {
    for (let i=0; i < clients.length; i++) {
        if (idClient === clients[i].id) {
            for (let j=0; j < clients[i].commandes.length; j++) {
                console.log(`order id : ${clients[i].commandes[j].id}`);
                console.log(`order date : ${clients[i].commandes[j].date}`);
                for (let c=0; c < clients[i].commandes[j].produits.length; c++) {
                    console.log(`product id : ${clients[i].commandes[j].produits[c].id}`);
                    console.log(`label : ${clients[i].commandes[j].produits[c].libelle}`);
                    console.log(`price : ${clients[i].commandes[j].produits[c].prix}`);
                    console.log(`quantity : ${clients[i].commandes[j].produits[c].quantite}`);
                }
            }
        }
    }
}

afficherCommandesClient(1);

afficherCommandesClient(2);

afficherCommandesClient(3);

// question number three:
function afficherProduitsCommande(idCommande) {
    for (let i=0; i < clients.length; i++) {
        for (let k=0; k < clients[i].commandes.length; k++) {
            if (idCommande === clients[i].commandes[k].id) {
                for (let c=0; c < clients[i].commandes[k].produits.length; c++) {
                    console.log(`product id : ${clients[i].commandes[k].produits[c].id}`);
                    console.log(`label : ${clients[i].commandes[k].produits[c].libelle}`);
                    console.log(`price : ${clients[i].commandes[k].produits[c].prix}`);
                    console.log(`quantity : ${clients[i].commandes[k].produits[c].quantite}`);
                }
            }
        }
    }
}

afficherProduitsCommande(102);

// question number four:
function chercherClient(id) {
    for (let i=0; i < clients.length; i++) {
        if (id === clients[i].id) {
            console.log(`the client's first name : ${clients[i].prenom}`);
            console.log(`the client's last name : ${clients[i].nom}`);
            console.log(`the client's city : ${clients[i].ville}`);
            for (let j=0; j < clients[i].commandes.length; j++) {
                console.log(`order id : ${clients[i].commandes[j].id}`);
                console.log(`order date : ${clients[i].commandes[j].date}`);
                for (let c=0; c < clients[i].commandes[j].produits.length; c++) {
                    console.log(`product id : ${clients[i].commandes[j].produits[c].id}`);
                    console.log(`label : ${clients[i].commandes[j].produits[c].libelle}`);
                    console.log(`price : ${clients[i].commandes[j].produits[c].prix}`);
                    console.log(`quantity : ${clients[i].commandes[j].produits[c].quantite}`);
                }
            }
        }
    }
}
console.log("-----separation------");
chercherClient(2);

// question number five:
function montantTotal(idCommande) {
    let montantTotale = 0;
    for (let i=0; i < clients.length; i++) {
        for (let p=0; p < clients[i].commandes.length; p++) {
            if (clients[i].commandes[p].id === idCommande) {
                for (let h=0; h < clients[i].commandes[p].produits.length; h++) {
                    montantTotale += clients[i].commandes[p].produits[h].prix;
                }
                return montantTotale;
            }
        }
    }
}

let b = montantTotal(101);

console.log(`le montant total est : ${b}`);

// question number six:
function afficherCommandesNonPayee() {
    for (let i=0; i < clients.length; i++) {
        for (let t=0; t < clients[i].commandes.length; t++) {
            if (clients[i].commandes[t].payee === false) {
                console.log(`order id : ${clients[i].commandes[t].id}`);
                console.log(`order date : ${clients[i].commandes[t].date}`);
                for (let c=0; c < clients[i].commandes[t].produits.length; c++) {
                    console.log(`product id : ${clients[i].commandes[t].produits[c].id}`);
                    console.log(`label : ${clients[i].commandes[t].produits[c].libelle}`);
                    console.log(`price : ${clients[i].commandes[t].produits[c].prix}`);
                    console.log(`quantity : ${clients[i].commandes[t].produits[c].quantite}`);
                }    
            }
        }
    }
}

console.log("these are all the non payed orders :");

afficherCommandesNonPayee();

// question number seven:
function ajouterCommande(idClient, nouvelleCommande) {
    for (let i=0; i < clients.length; i++) {
        if (clients[i].id === idClient) {
            clients[i].commandes.push(nouvelleCommande);
        }
    }
}

// ajouterCommande(1, {id: 103,date: "2026-04-16",produits: [{id: 4,libelle: "Mouse",prix: 9999, quantite:99,payee: true}]});

console.log(clients[0].commandes);

// question number eight:
function modifierQuantite(idCommande, idProduit, nouvelleQuantite) {
    for (let i=0; i < clients.length; i++) {
        for (let f=0; f < clients[i].commandes.length; f++) {
            if (clients[i].commandes[f].id === idCommande) {
                for (let b=0; b < clients[i].commandes[f].produits.length; b++) {
                    if (idProduit === clients[i].commandes[f].produits[b].id) {
                        clients[i].commandes[f].produits[b].quantite = nouvelleQuantite;
                    }
                }
            }
        }
    }
}

// modifierQuantite(101, 2, 100);

console.log(clients[0].commandes);

// question number nine:
function supprimerCommande(idCommande) {
    for (let i=0; i < clients.length; i++) {
        for (let o=0; o < clients[i].commandes.length; o++) {
            if (idCommande === clients[i].commandes[o].id) {
                clients[i].commandes.splice(o, 1);
                return;
            }
        }
    }
}

/* supprimerCommande(102);

console.log(clients[0].commandes); */

// question number ten:
function clientPlusGrandMontant() {
    let maximumValue = 0;
    let montantTotal = 0;
    let meilleurClient = 0;
    for (let i=0; i < clients.length; i++) {
        montantTotal = 0;
        for (let k=0; k < clients[i].commandes.length; k++) {
            for (let s=0; s < clients[i].commandes[k].produits.length; s++) {
                montantTotal += clients[i].commandes[k].produits[s].prix * clients[i].commandes[k].produits[s].quantite;
            }
        }
        if (montantTotal > maximumValue) {
            maximumValue = montantTotal;
            meilleurClient = clients[i];
        }
    }
    console.log(`le meilleur client est : ${meilleurClient.nom} avec le montant totale :`);
    return maximumValue;
}

console.log(clientPlusGrandMontant());

// question number eleven:
function regexVerification(codeCommande) {
    let regex = /^[A-Z]{3}-\d{4}-\d{3}/;
    if (regex.test(codeCommande)) {
        console.log("the code is valid, good job!");
    } else {
        console.log("the pattern isn't valid dummy! it's supposed to be three uppercase letters,dash,four numbers,dash and then three numbers");
        }
}
regexVerification("AAA-4586-889");