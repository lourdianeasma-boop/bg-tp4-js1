"use strict";

// Déclaration de la variable compteur pour les lignes (Slide 26)
let lignes = 0;

// Déclaration du tableau d'objets persons (Slide 20)
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
  doInsertRowTable(lignes, nom, prenom, points); // Appel de la fonction d'insertion de ligne avec le numéro incrémenté (Slide 19, 24)
}

function doInsertRowTable(num, nom, prenom, points) {
  // Récupération de l'élément tableau tbody (Slide 12)
  const table = document.querySelector("table tbody");

  // Création d'un élément de type tr (Slide 15)
  const row = document.createElement("tr");

  // Création des 5 éléments de type td (Slide 15)
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  // Remplissage du contenu de chaque colonne avec innerText (Slide 18)
  col1.innerText = num;
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  // Création de la case à cocher pour la dernière colonne (Slide 15)
  const chkbox = document.createElement("input");
  chkbox.setAttribute("type", "checkbox");
  col5.appendChild(chkbox); // Ajout du checkbox dans le td (Slide 25)

  // Affectation des classes CSS avec setAttribute (Slide 16)
  col1.setAttribute("class", "col_number");
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  // Rajouter les colonnes à la ligne row avec append() (Slide 20)
  row.append(col1, col2, col3, col4, col5);

  // Rajouter la ligne row au tableau table (Slide 20)
  table.appendChild(row);
}

// Fonction pour afficher le contenu du tableau persons dans la console (Slide 29, 30)
function consoleTableau() {
  console.log(persons);
}
