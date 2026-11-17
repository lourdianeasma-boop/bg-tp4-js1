"use strict";

function doInsertRowTable(num, nom, prenom, points) {
  const table = document.querySelector("table tbody");
  const row = document.createElement("tr");

  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  col1.innerText = num;
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  const chkbox = document.createElement("input");
  chkbox.setAttribute("type", "checkbox");
  col5.appendChild(chkbox);

  col1.setAttribute("class", "col_number");
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  row.append(col1, col2, col3, col4, col5);
  table.appendChild(row);
}
