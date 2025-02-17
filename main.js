/**
 * ez lesz a tömb amelyt a header tartalmát eltartalmazza
 */
const header = {
    terulete: "Fizika területe",//megadjuk az terulete tulajdonságot és tartalmát feltöltjük egy string értékel
    idoszak: "Időszak",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékel
    kepviselok: "Képviselők"//megadjuk az kepviselok1 tulajdonságot és tartalmát feltöltjük egy string értékel
}
/**
 * ebben a tömbben lesz a táblázat alap értékei
 */
const fizikusok = [
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
/**
 * ez lesz a tömb amely a form alap értékeit kéri
 */
const formArray = [//létrehozzuk a tömböt amelynek 3 tulajdonsága lesz label, id, input_type
    {
        label : "Terület megnevezese",//
        id: "fizika",
        input_type: "text"
    },
    {
        label : "Időszak:",
        id: "ido",
        input_type: "text"
    },
    {
        label : "Első tudós:",
        id: "tudos1",
        input_type: "text"
    },
    {
        label : "Második tudós:",
        id: "tudos2",
        input_type: "text"
    }
]
const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz
createForm();//meghívjuk a függvényt
renderHeader(header)//meghívjuk a renderheader függvényt
renderTable(fizikusok)//függvényt meghívom

const form = document.querySelector('form');//meghívjuk a form nevű HTML elemet
/**
 * ez a addeventlistener által müködik a form. Hála ennek a függvénynek
 * meglehet adni új adatokat
 * és még megis nézi validációval a helyes-e az inputok
 */
form.addEventListener('submit', function(e){
    e.preventDefault()//megakadalyozom, hogy a bongeszo alapertelmezett mukodese lefusson submit eseten
    const HTMLElementFizika = document.getElementById('fizika')//meghívunk egy elementet ID alapján
    const HTMLElementIdoszak = document.getElementById('ido')//meghívunk egy elementet ID alapján
    const HTMLElementTudos1 = document.getElementById('tudos1')//meghívunk egy elementet ID alapján
    const HTMLElementTudos2 = document.getElementById('tudos2')//meghívunk egy elementet ID alapján
    if(simpleValidation(HTMLElementTudos1,HTMLElementTudos2)){//ha a simpleValidation valid értéke igaz akkor belép
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
            renderHeader(header)
            renderTable(fizikusok)//A táblázatott újrameghívom hogy fríssítsem
            form.reset()
        }
    }
})