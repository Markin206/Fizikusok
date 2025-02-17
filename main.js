const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz
//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz
const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const terulete = document.createElement('th'); // Létrehozzuk az "terulete" oszlopot
terulete.innerHTML = "Fizika területe"; // Beállítjuk a "terulete" szöveget
tablaheaderRow.appendChild(terulete); // Hozzáadjuk a tablaheaderRow sorhoz

const idoszak = document.createElement('th'); // Létrehozzuk az "időszak" oszlopot
idoszak.innerHTML = "Időszak"; // Beállítjuk az "időszak" szöveget
tablaheaderRow.appendChild(terulete); // Hozzáadjuk a tablaheaderRow sorhoz

const Kepviselok = document.createElement('th'); // Létrehozzuk az "Kepviselok" oszlopot
Kepviselok.innerHTML = "Képviselők"; // Beállítjuk az "Kepviselok" szöveget

tablaheaderRow.appendChild(Kepviselok); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz
const terulete1 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete1.colSpan = 2; // Beállítjuk a colspan értéket 2-re
terulete1.innerHTML = "Optika"; // Beállítjuk a tartalmat
row1.appendChild(terulete1); // Hozzáadjuk a sorhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak1.innerHTML = "XI. század"; // Beállítjuk a tartalmat
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const Kepviselok0_1ok = document.createElement('td'); // Létrehozzuk az "Kepviselok" cellát
Kepviselok0_1ok.innerHTML = "Alhazen"; // Beállítjuk a tartalmat
Kepviselok0_1ok.colSpan = 2;
row1.appendChild(Kepviselok0_1ok); // Hozzáadjuk a sorhoz


const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz
const terulete2 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete2.innerHTML = "Asztronómia"; // Beállítjuk a tartalmat
row2.appendChild(terulete2); // Hozzáadjuk a sorhoz

const idoszak2 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak2.innerHTML = "reneszánsz"; // Beállítjuk a tartalmat
row2.appendChild(idoszak2); // Hozzáadjuk a sorhoz

const Kepviselok1_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok1_1.innerHTML = "Kepler"; // Beállítjuk a tartalmat
row2.appendChild(Kepviselok1_1); // Hozzáadjuk a sorhoz

const Kepviselok1_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok1_2.innerHTML = "Galilei"; // Beállítjuk a tartalmat
row2.appendChild(Kepviselok1_2); // Hozzáadjuk a sorhoz


const row3 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz
const terulete3 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete3.innerHTML = "Kvantumfizika"; // Beállítjuk a tartalmat
row3.appendChild(terulete3); // Hozzáadjuk a sorhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak3.innerHTML = "XIX-XX. század"; // Beállítjuk a tartalmat
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const Kepviselok2_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok2_1.innerHTML = "Max Planck"; // Beállítjuk a tartalmat
row3.appendChild(Kepviselok2_1); // Hozzáadjuk a sorhoz

const Kepviselok2_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok2_2.innerHTML = "Albert Einstein"; // Beállítjuk a tartalmat
row3.appendChild(Kepviselok2_2); // Hozzáadjuk a sorhoz


const row4 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz
const terulete4 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete4.innerHTML = "Modern fizika"; // Beállítjuk a tartalmat
row4.appendChild(terulete4); // Hozzáadjuk a sorhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak4.innerHTML = "XX-XXI. század"; // Beállítjuk a tartalmat
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const Kepviselok3_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok3_1.innerHTML = "Richard Feynman"; // Beállítjuk a tartalmat
row4.appendChild(Kepviselok3_1); // Hozzáadjuk a sorhoz

const Kepviselok3_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok3_2.innerHTML = "Stephen Hawking"; // Beállítjuk a tartalmat
row4.appendChild(Kepviselok3_2); // Hozzáadjuk a sorhoz