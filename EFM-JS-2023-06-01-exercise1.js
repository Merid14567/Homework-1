let T_Ords = [
              {Reference: "A1000", Designation: "Dell latitude 5420", Garantie: 3, Caracteristiques: "Intel Core i5-11145G8(4 core, 8M caccche),etc...", Prix: 9500},

              {Reference: "A2000", Designation: "Hp elite book x360", Garantie: 2, Caracteristiques: "Intel Core i7-11645G7 jusqu'a 4.7 GHz avec Turbo Boost, 12M cache 4 coeurs,etc...", Prix: 235000},

              {Reference: "A3000", Designation: "Asus light gamer F571H", Garantie: 2, Caracteristiques: "Intel Core i7-10870H (Processor 2.2 Gtz, 16M, up to 5.0 Ghz, 8 cores),etc...", Prix: 11000}
                 ]
document.addEventListener("DOMContentLoaded", getAllOrds);

function getAllOrds() {
    let content = "";
    for (let i=0; i < T_Ords.length; i++) {
        content += `<tr>
                      <td>${T_Ords[i].Reference}</td>
                      <td>${T_Ords[i].Designation}</td>
                      <td>${T_Ords[i].Garantie}</td>
                      <td>${T_Ords[i].Caracteristiques}</td>
                      <td>${T_Ords[i].Prix}</td>
                      <td>
                         <button type="button" onclick="deleteOrd('${T_Ords[i].Reference}')">Deleting</button>
                      </td>
                    </tr>`
    }
    document.querySelector("tbody").innerHTML = content;
}


function deleteOrd(reference) {
    let index = T_Ords.findIndex(function(item) {
        return item.Reference === reference;
    })
    if (index !== -1) {
        T_Ords.splice(index, 1);
        getAllOrds();
    } else {
        console.log("index not found");
    }
}
function getOrd(des) {
    let newArray;
    newArray = T_Ords.filter(function(item) {
        return item.Designation.includes(des);
    })
    let content = "";
    for (let i=0; i < newArray.length; i++) {
        content += `<tr>
                      <td>${newArray[i].Reference}</td>
                      <td>${newArray[i].Designation}</td>
                      <td>${newArray[i].Garantie}</td>
                      <td>${newArray[i].Caracteristiques}</td>
                      <td>${newArray[i].Prix}</td>
                    </tr>`
    }
    document.getElementById("tableBody2").innerHTML = content;
}

getOrd("Dell")