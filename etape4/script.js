"use strict";

// Déclaration de la variable lignes (Slide 26)
let lignes = 0;

// Déclaration de la variable total_points initialisée à 0 (Slide 36)
let total_points = 0;

// Tableau d'objets persons (Slide 20)
const persons = [
  { nom: "nom-1", prenom: "prenom-1", points: 5 },
  { nom: "nom-2", prenom: "prenom-2", points: 10 },
  { nom: "nom-3", prenom: "prenom-3", points: 15 },
];

// Appel de la fonction init au démarrage (Slide 22)
init();

function init() {
  // Utilisation de la boucle for..of pour parcourir le tableau persons (Slide 22 / 45)
  for (const person of persons) {
    doInsert(person.nom, person.prenom, person.points);
  }
}

function doInsert(nom, prenom, points) {
  lignes++; // Incrémentation de la variable lignes de 1 (Slide 26)
  total_points += points; // Addition des points passés en paramètre à total_points (Slide 38)

  doInsertRowTable(lignes, nom, prenom, points); // Insertion de la ligne dans le tableau

  update_summary(); // Appel de la fonction update_summary() (Slide 40)
}

function doInsertRowTable(num, nom, prenom, points) {
  const table = document.querySelector("table tbody");
  const row = document.createElement("tr"); // (Slide 15)

  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  col1.innerText = num; // (Slide 18)
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  const chkbox = document.createElement("input");
  chkbox.setAttribute("type", "checkbox"); // (Slide 15)
  col5.appendChild(chkbox); // (Slide 25)

  col1.setAttribute("class", "col_number"); // (Slide 16)
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  row.append(col1, col2, col3, col4, col5); // (Slide 20)
  table.appendChild(row); // (Slide 20)
}

// Fonction pour mettre à jour l'espace résumé (Slide 42)
function update_summary() {
  const element_lignes = document.getElementById("p1"); // (Slide 42)
  const element_points = document.getElementById("p3"); // (Slide 42)

  element_lignes.innerText = lignes + " ligne(s)"; // (Slide 42)
  element_points.innerText = "Total point(s)= " + total_points; // (Slide 42)
}

// Fonction pour afficher le contenu du tableau persons dans la console (Slide 29, 30)
function consoleTableau() {
  console.log(persons);
}
