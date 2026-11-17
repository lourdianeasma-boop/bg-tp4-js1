"use strict"; // Mode strict - Cours Slide 141

// Déclaration des variables globales
let lignes = 0; // Déclaration de la variable lignes (Slide 26)
let total_points = 0; // Déclaration de la variable total_points initialisée à 0 (Slide 36)

// Tableau d'objets persons initial (Slide 20)
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
  lignes++; // Incrémentation du nombre de lignes (Slide 26)
  total_points += points; // Addition des points à total_points (Slide 38)

  doInsertRowTable(lignes, nom, prenom, points);
  update_summary(); // Mise à jour de l'espace résumé (Slide 40)
}

function doInsertRowTable(num, nom, prenom, points) {
  const table = document.querySelector("table tbody");
  const row = document.createElement("tr"); // Création d'un élément de type tr (Slide 15)

  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  col1.innerText = num; // Remplissage du contenu avec innerText (Slide 18)
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  const chkbox = document.createElement("input");
  chkbox.setAttribute("type", "checkbox"); // (Slide 15)
  col5.appendChild(chkbox); // Ajout du checkbox dans le td (Slide 25)

  col1.setAttribute("class", "col_number"); // Affectation des classes CSS avec setAttribute (Slide 16)
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  row.append(col1, col2, col3, col4, col5); // Ajout des colonnes à la ligne avec append() (Slide 20)
  table.appendChild(row); // Ajout de la ligne au tableau (Slide 20)
}

// Fonction pour mettre à jour l'espace résumé (Slide 42)
function update_summary() {
  const element_lignes = document.getElementById("p1"); // Récupération de l'élément p1 (Slide 42)
  const element_points = document.getElementById("p3"); // Récupération de l'élément p3 (Slide 42)

  element_lignes.innerText = lignes + " ligne(s)"; // Mise à jour du texte des lignes (Slide 42)
  element_points.innerText = "Total point(s)= " + total_points; // Mise à jour du texte des points (Slide 42)
}

// Fonction de gestion du formulaire d'insertion (Étape 5 / Slides 50, 53, 55)
function doNewData() {
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");

  const nom = elt_nom.value;
  const prenom = elt_prenom.value;
  const points = parseInt(elt_points.value);

  // Saisie contrôlée : vérification des champs vides ou NaN (Slide 55)
  if (nom === "" || prenom === "" || Number.isNaN(points)) {
    window.alert("Formulaire incomplet !"); // Alerte en cas d'erreur (Slide 55)
  } else {
    doInsert(nom, prenom, points);
    persons.push({ nom: nom, prenom: prenom, points: points }); // Insertion de la nouvelle personne dans le tableau persons (Slide 53)

    // Réinitialisation des champs du formulaire (Slide 53)
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }
}

// Fonction pour afficher le tableau persons dans la console (Slide 29, 30)
function consoleTableau() {
  console.log(persons);
}

// Fonction de suppression des lignes sélectionnées (Étape 6 / Slide 61)
function deleteRow() {
  // Étape 1 : Vérifier si le tableau est vide
  if (lignes === 0) {
    window.alert("Le tableau est vide !");
    return;
  }

  // Étape 2 : Récupérer la liste des checkbox cochées à l'intérieur de .col_chkbox
  const checkboxes = document.querySelectorAll(
    "table tbody .col_chkbox input[type='checkbox']",
  );

  // Étape 3 : Vérifier si aucune checkbox n'est cochée
  let checkedCount = 0;
  checkboxes.forEach((chk) => {
    // Utilisation d'une boucle/méthode pour parcourir les éléments (Slide 45)
    if (chk.checked) {
      checkedCount++;
    }
  });

  if (checkedCount === 0) {
    window.alert("Sélectionnez au moins une ligne !");
    return;
  }

  // Étape 4 : Demander une confirmation à l'utilisateur avant suppression
  if (
    !window.confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")
  ) {
    return;
  }

  // Étape 5 & 6 : Récupérer toutes les lignes du tableau et les parcourir
  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row, index) => {
    const chk = row.querySelector(".col_chkbox input[type='checkbox']");
    if (chk && chk.checked) {
      // Récupérer la valeur des points dans la 4e cellule (index 3)
      const ptsCell = row.cells[3];
      const pts = parseInt(ptsCell.innerText);

      // Soustraire les points et décrémenter le nombre de lignes
      total_points -= pts;
      lignes--;

      // Supprimer la ligne du DOM
      row.remove();

      // Supprimer la même entrée dans le tableau d'objets persons (Slide 53)
      persons.splice(index, 1);
    }
  });

  // Réajuster la numérotation (N°) des lignes restantes dans le tableau
  const remainingRows = document.querySelectorAll("table tbody tr");
  remainingRows.forEach((row, newIndex) => {
    row.cells[0].innerText = newIndex + 1;
  });

  // Étape 7 : Mettre à jour l'espace résumé (Slide 42)
  update_summary();
}
