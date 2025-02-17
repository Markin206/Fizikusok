const headerterulet = "Fizika területe"
const headeridoszak = "Időszak"
const headerKepviselo = "Képviselők"

const rowterulete1 = "Optika";
const rowterulete2 = "Asztronómia";
const rowterulete3 = "Kvantumfizika";
const rowterulete4 = "Modern Fizika";

const rowidoszak1 = "XI. Század"
const rowidoszak2 = "reneszánsz"
const rowidoszak3 = "XIX-XX. Század"
const rowidoszak4 = "XX-XXI. Század"

const rowkepvisel1_1 = "Alhazen"
const rowkepvisel2_1 = "Kepler"
const rowkepvisel3_1 = "Max Planck"
const rowkepvisel4_1 = "Richard Feynman"

const rowkepvisel2_2 = "Galilei"
const rowkepvisel3_2 = "Albert Einstein"
const rowkepvisel4_2 = "Stephen Hawking"


const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz
//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz
const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const terulete = document.createElement('th'); // Létrehozzuk az "terulete" oszlopot
terulete.innerHTML = headerterulet; // Beállítjuk a "terulete" szöveget
tablaheaderRow.appendChild(terulete); // Hozzáadjuk a tablaheaderRow sorhoz

const idoszak = document.createElement('th'); // Létrehozzuk az "időszak" oszlopot
idoszak.innerHTML = headeridoszak; // Beállítjuk az "időszak" szöveget
tablaheaderRow.appendChild(terulete); // Hozzáadjuk a tablaheaderRow sorhoz

const Kepviselok = document.createElement('th'); // Létrehozzuk az "Kepviselok" oszlopot
Kepviselok.innerHTML = headerKepviselo; // Beállítjuk az "Kepviselok" szöveget

tablaheaderRow.appendChild(Kepviselok); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz
const terulete1 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete1.colSpan = 2; // Beállítjuk a colspan értéket 2-re
terulete1.innerHTML = rowterulete1; // Beállítjuk a tartalmat a változók értékeire
row1.appendChild(terulete1); // Hozzáadjuk a sorhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak1.innerHTML = rowidoszak1; // Beállítjuk a tartalmat a változók értékeire
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const Kepviselok0_1ok = document.createElement('td'); // Létrehozzuk az "Kepviselok" cellát
Kepviselok0_1ok.innerHTML = rowkepvisel1_1; // Beállítjuk a tartalmat a változók értékeire
Kepviselok0_1ok.colSpan = 2;
row1.appendChild(Kepviselok0_1ok); // Hozzáadjuk a sorhoz


const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz
const terulete2 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete2.innerHTML = rowterulete2; // Beállítjuk a tartalmat a változók értékeire
row2.appendChild(terulete2); // Hozzáadjuk a sorhoz

const idoszak2 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak2.innerHTML = rowidoszak2; // Beállítjuk a tartalmat a változók értékeire
row2.appendChild(idoszak2); // Hozzáadjuk a sorhoz

const Kepviselok1_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok1_1.innerHTML = rowkepvisel2_1; // Beállítjuk a tartalmat a változók értékeire
row2.appendChild(Kepviselok1_1); // Hozzáadjuk a sorhoz

const Kepviselok1_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok1_2.innerHTML = rowkepvisel2_2; // Beállítjuk a tartalmat a változók értékeire
row2.appendChild(Kepviselok1_2); // Hozzáadjuk a sorhoz


const row3 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz
const terulete3 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete3.innerHTML = rowterulete3; // Beállítjuk a tartalmat a változók értékeire változók értékeire
row3.appendChild(terulete3); // Hozzáadjuk a sorhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak3.innerHTML = rowidoszak3; // Beállítjuk a tartalmat a változók értékeire
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const Kepviselok2_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok2_1.innerHTML = rowkepvisel3_1; // Beállítjuk a tartalmat a változók értékeire
row3.appendChild(Kepviselok2_1); // Hozzáadjuk a sorhoz

const Kepviselok2_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok2_2.innerHTML = rowkepvisel3_2; // Beállítjuk a tartalmat a változók értékeire
row3.appendChild(Kepviselok2_2); // Hozzáadjuk a sorhoz


const row4 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz
const terulete4 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete4.innerHTML = rowterulete4; // Beállítjuk a tartalmat a változók értékeire
row4.appendChild(terulete4); // Hozzáadjuk a sorhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak4.innerHTML = rowidoszak4; // Beállítjuk a tartalmat a változók értékeire
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const Kepviselok3_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok3_1.innerHTML = rowkepvisel4_1; // Beállítjuk a tartalmat a változók értékeire
row4.appendChild(Kepviselok3_1); // Hozzáadjuk a sorhoz

const Kepviselok3_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok3_2.innerHTML = rowkepvisel4_2; // Beállítjuk a tartalmat a változók értékeire
row4.appendChild(Kepviselok3_2); // Hozzáadjuk a sorhoz