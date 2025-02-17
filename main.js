

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
for(let i = 0;i < fizikusok.length;i++){//végig iterálunk/megyünk az array tömb elemein
    const currentElement = fizikusok[i];//block szinten definiálok egy változót, amibe beleteszem az array aktuális ciklusváltozó számú elemet
    const row = document.createElement('tr')//létrehozom a row elemet
    tabla.appendChild(row);//hozzáadom a row elemet a táblához

    const terulete = document.createElement('td')//létrehozunk egy szerzo nevű elemet
    terulete.innerHTML = currentElement.terulete//A cella tartalmához hozzá adjuk a block szinten definiált változót
    row.appendChild(terulete)//hozzáadom a row elemhez a szerző cellát

    const idoszak = document.createElement('td')//létrehozunk egy csapat nevű elemet
    idoszak.innerHTML = currentElement.idoszak//A cella tartalmához hozzá adjuk a block szinten definiált változót
    row.appendChild(idoszak)//hozzáadom a row elemhez a csapat cellát

    const kepviselok1 = document.createElement('td')//létrehozunk egy kepviselok1 nevű elemet
    kepviselok1.innerHTML = currentElement.kepviselok1//A cella tartalmához hozzá adjuk a block szinten definiált változót
    row.appendChild(kepviselok1)//hozzáadom a row elemhez a kepviselok1 cellát

    if(currentElement.kepviselok2 === undefined){//ha a kepviselok2 tartalma üres akkor a mu1-es cella colspanje 2 lesz
        kepviselok1.colSpan = 2;
    }
    else{//ha a mu2 tartalmaz értéket akkor létrehozzuk a kepviselok2 cellát
        const kepviselok2 = document.createElement('td');//létrehozunk egy kepviselok2 nevű elemet
        kepviselok2.innerHTML = currentElement.kepviselok2;//A cella tartalmához hozzá adjuk a block szinten definiált változót
        row.appendChild(kepviselok2)//hozzáadom a row elemhez a kepviselok2 cellát
    }
}