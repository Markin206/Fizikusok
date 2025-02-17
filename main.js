

const fizikusok = [//létrehozzuk a tömböt
    {
        terulete: "Fizika területe",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
        idoszak: "Időszak",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok: "Képviselők"//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        terulete: "Optika",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
        idoszak: "XI. Század",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok1: "Alhazen"//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    
    {
        terulete: "Asztronómia",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
        idoszak: "reneszánsz",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok1: "Kepler",//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok2: "Galilei"//megadjuk az kepviselok2 tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    
    {
        terulete: "Kvantumfizika",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
        idoszak: "XIX-XX. Század",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok1: "Max Planck",//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok2: "Albert Einstein"//megadjuk az kepviselok2 tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    
    
    {
        terulete: "Modern Fizika",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
        idoszak: "XX-XXI. Század",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok1: "Richard Feynman",//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
        kepviselok2: "Stephen Hawking"//megadjuk az kepviselok2 tulajdonságot és tartalmát feltöltjük egy string értékel
    }
]




const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz
//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz
const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const terulete = document.createElement('th'); // Létrehozzuk az "terulete" oszlopot
terulete.innerHTML = fizikusok[0].terulete; // Beállítjuk a "terulete" szöveget
tablaheaderRow.appendChild(terulete); // Hozzáadjuk a tablaheaderRow sorhoz

const idoszak = document.createElement('th'); // Létrehozzuk az "időszak" oszlopot
idoszak.innerHTML = fizikusok[0].idoszak; // Beállítjuk az "időszak" szöveget
tablaheaderRow.appendChild(idoszak); // Hozzáadjuk a tablaheaderRow sorhoz

const Kepviselok = document.createElement('th'); // Létrehozzuk az "Kepviselok" oszlopot
Kepviselok.innerHTML = fizikusok[0].kepviselok; // Beállítjuk az "Kepviselok" szöveget
Kepviselok.colSpan = 2;
tablaheaderRow.appendChild(Kepviselok); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz
const terulete1 = document.createElement('td'); // Létrehozzuk az "terulete" cellát

terulete1.innerHTML = fizikusok[1].terulete; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row1.appendChild(terulete1); // Hozzáadjuk a sorhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak1.innerHTML = fizikusok[1].idoszak; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const Kepviselok0_1ok = document.createElement('td'); // Létrehozzuk az "Kepviselok" cellát
Kepviselok0_1ok.innerHTML = fizikusok[1].kepviselok1; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
Kepviselok0_1ok.colSpan = 2; // Beállítjuk a colspan értéket 2-re
row1.appendChild(Kepviselok0_1ok); // Hozzáadjuk a sorhoz


const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz
const terulete2 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete2.innerHTML = fizikusok[2].terulete; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(terulete2); // Hozzáadjuk a sorhoz

const idoszak2 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak2.innerHTML = fizikusok[2].idoszak; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(idoszak2); // Hozzáadjuk a sorhoz

const Kepviselok1_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok1_1.innerHTML = fizikusok[2].kepviselok1; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(Kepviselok1_1); // Hozzáadjuk a sorhoz

const Kepviselok1_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok1_2.innerHTML = fizikusok[2].kepviselok2; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(Kepviselok1_2); // Hozzáadjuk a sorhoz


const row3 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz
const terulete3 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete3.innerHTML = fizikusok[3].terulete; //beállítjuk a tartalmat a megadott array objektum tulajdonságára változók értékeire
row3.appendChild(terulete3); // Hozzáadjuk a sorhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak3.innerHTML = fizikusok[3].idoszak; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const Kepviselok2_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok2_1.innerHTML = fizikusok[3].kepviselok1; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(Kepviselok2_1); // Hozzáadjuk a sorhoz

const Kepviselok2_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok2_2.innerHTML = fizikusok[3].kepviselok2; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(Kepviselok2_2); // Hozzáadjuk a sorhoz


const row4 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz
const terulete4 = document.createElement('td'); // Létrehozzuk az "terulete" cellát
terulete4.innerHTML = fizikusok[4].terulete; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(terulete4); // Hozzáadjuk a sorhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "időszak" cellát
idoszak4.innerHTML = fizikusok[4].idoszak; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const Kepviselok3_1 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok3_1.innerHTML = fizikusok[4].kepviselok1; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(Kepviselok3_1); // Hozzáadjuk a sorhoz

const Kepviselok3_2 = document.createElement('td'); // Létrehozzuk a "Képviselő" cellát
Kepviselok3_2.innerHTML = fizikusok[4].kepviselok2; //beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(Kepviselok3_2); // Hozzáadjuk a sorhoz