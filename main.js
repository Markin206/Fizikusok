
const header = {
    terulete: "Fizika területe",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
    idoszak: "Időszak",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
    kepviselok: "Képviselők"//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
}

const fizikusok = [//létrehozzuk a tömböt
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
terulete.innerHTML = header.terulete; // Beállítjuk a "terulete" szöveget
tablaheaderRow.appendChild(terulete); // Hozzáadjuk a tablaheaderRow sorhoz

const idoszak = document.createElement('th'); // Létrehozzuk az "időszak" oszlopot
idoszak.innerHTML = header.idoszak; // Beállítjuk az "időszak" szöveget
tablaheaderRow.appendChild(idoszak); // Hozzáadjuk a tablaheaderRow sorhoz

const Kepviselok = document.createElement('th'); // Létrehozzuk az "Kepviselok" oszlopot
Kepviselok.innerHTML = header.kepviselok; // Beállítjuk az "Kepviselok" szöveget
Kepviselok.colSpan = 2;
tablaheaderRow.appendChild(Kepviselok); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

function renderTable(){//függvényt létrehozzuk
// 1. sor (XVI. század)
    for(const currentElement of fizikusok){//végigiterálunk a cikluson a ciklusváltozó az aktuális elem
        const row = document.createElement('tr')//létrehozom a row elemet
        tabla.appendChild(row);//hozzáadom a row elemet a táblához

        const terulete = document.createElement('td')//létrehozunk egy terulete nevű elemet
        terulete.innerHTML = currentElement.terulete//A cella tartalmához hozzá adjuk a block szinten definiált változót
        row.appendChild(terulete)//hozzáadom a row elemhez a szerző cellát

        const idoszak = document.createElement('td')//létrehozunk egy idoszak nevű elemet
        idoszak.innerHTML = currentElement.idoszak//A cella tartalmához hozzá adjuk a block szinten definiált változót
        row.appendChild(idoszak)//hozzáadom a row elemhez a csapat cellát

        const kepviselok1 = document.createElement('td')//létrehozunk egy kepviselok1 nevű elemet
        kepviselok1.innerHTML = currentElement.kepviselok1//A cella tartalmához hozzá adjuk a block szinten definiált változót
        row.appendChild(kepviselok1)//hozzáadom a row elemhez a kepviselok1 cellát

        if(currentElement.kepviselok2 !== undefined){//ha a kepviselok2 tartalmaz értéket akkor létrehozzuk a kepviselok2 cellát
        console.log(currentElement.kepviselok2)
        const kepviselok2 = document.createElement('td');//létrehozunk egy kepviselok2 nevű elemet
        kepviselok2.innerHTML = currentElement.kepviselok2;//A cella tartalmához hozzá adjuk a block szinten definiált változót
        row.appendChild(kepviselok2)//hozzáadom a row elemhez a kepviselok2 cellát
        }
        else{
            kepviselok1.colSpan = 2;//ha nem akkor a kepviselok1 colspanje 2 lesz
        }
    }
}
renderTable()//függvényt meghívom


const form = document.getElementById('form')//meghívunk egy elementet ID alapján

form.addEventListener('submit', function(e){
    e.preventDefault()//megakadalyozom, hogy a bongeszo alapertelmezett mukodese lefusson submit eseten
    const HTMLElementFizika = document.getElementById('fizika')//meghívunk egy elementet ID alapján
    const HTMLElementIdoszak = document.getElementById('ido')//meghívunk egy elementet ID alapján
    const HTMLElementTudos1 = document.getElementById('tudos1')//meghívunk egy elementet ID alapján
    const HTMLElementTudos2 = document.getElementById('tudos2')//meghívunk egy elementet ID alapján

    const fizikaValue = HTMLElementFizika.value//az IDval meghívott értéket berakom egy lokális változóba
    const idoszakValue = HTMLElementIdoszak.value//a IDval meghívott értéket berakom egy lokális változóba
    const tudos1Value = HTMLElementTudos1.value//a IDval meghívott értéket berakom egy lokális változóba
    const tudos2Value = HTMLElementTudos2.value//a IDval meghívott értéket berakom egy lokális változóba


    const thisForm = e.currentTarget; // Az event currentTarget tulajdonsaga a formunkat tartalmazza, ezt eltaroljuk egy lokalis valtozoba 
    const errorHtmlElements = thisForm.querySelectorAll('.error'); // A formon beluli osszes error classal rendelkezo html elementet elkerjuk
    for(const errorElement of errorHtmlElements){ // Vegigiteralunk a visszakapott errorhtmlelementeken
        errorElement.innerHTML = ''; // toroljuk az aktualis elem tartalmat
        }
        const newElement = {
            terulete: fizikaValue,// az uj objektum terulete erteke a fizikaValue lesz
            idoszak: idoszakValue,// az uj objektum idoszak erteke a idoszakValue lesz
            kepviselok1: tudos1Value,// az uj objektum kepviselok1 erteke a tudos1Value lesz
            kepviselok2: tudos2Value// az uj objektum kepviselok2 erteke a tudos2Value lesz
        }
    if(validatefield(HTMLElementFizika, HTMLElementIdoszak)){//ha a validáció sikeres akkor hozzá adjuk az elemet a táblázathoz ha nem akkor nem
        fizikusok.push(newElement)//hozzáadom az arrayhez az új objektumot
        tabla.innerHTML = "";//kiürítem a táblázatott
        renderTable()//A táblázatott újrameghívom hogy fríssítsem
    }
})


function validatefield(HTMLElementFizika,HTMLElementIdoszak){//létrehozzuk a validációs functiont
    let valid = true;//létrehozzunk egy booleant változót és megadjuk az értéket truera
    /**
     * kiüríti a error innerhtml-t
     */
    const error = form.querySelectorAll('.error');
    for(const errors of error)
    {
    errors.innerHTML = "";
    }
    /**
     * ha a doboz ki van pipálva de nem adtuk meg a 2. mű címét akkor egy errort ír ki
     */
    if (HTMLElementFizika.value == "") {//megnézi hogy az értéke üres ha igen akkor belép
        const parentElement = HTMLElementFizika.parentElement;//lekérjük az inputnak parent elementjét
        const error = parentElement.querySelector('.error');//kiválasztjuk azt az elementet amely tartalmazza az error osztályt
        if (error !== null) {//egnézzük hogy az error üres-e
            error.innerHTML = "Kötelező megadni a fizikai területét az embernek!";//eroor innerhtml-jébe belerakunk egy string értéket
        }
        valid = false;//a valid értékét falsera csináljuk
    }
    /**
     * ha a doboz nincs ki pipálva de meg adtuk a 2. mű címét akkor egy errort ír ki
     */
    if (HTMLElementIdoszak.value == "") {//megnézi hogy az értéke üres ha igen akkor belép
        const parentElement = HTMLElementIdoszak.parentElement;//lekérjük az inputnak parent elementjét
        const error = parentElement.querySelector('.error');//kiválasztjuk azt az elementet amely tartalmazza az error osztályt
        if (error !== null) {//egnézzük hogy az error üres-e
            error.innerHTML = "Az időszakot kötelező megadni!";//eroor innerhtml-jébe belerakunk egy string értéket
        }
        valid = false;//a valid értékét falsera csináljuk
    }
    return valid//vissza adjuk a valid értékét
}