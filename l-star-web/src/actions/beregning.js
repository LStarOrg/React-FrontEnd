import OpslagsAPI from "../api/OpslagAPI";
import OpslagAPI from "../api/OpslagAPI";

// UI Fiks
var userinputType;

var userInputKG;

//Bruger var
var erProduktetGaspakket;

var opbevaringsTemperaturProduktionssted;

var opbevaringsTidProduktionsted;

var opbevaringsTemperaturModtagersted;

//Udregnet var
var opbevaringstidModtagestedUdregnet;

var holdbarhedsdatoOgKlokkeslæt;

// Ingredienser

let ingredienseBrugerListe;

// ingrediens
let ingrediens = {
    type = userinputType,
    kg = userInputKg
    };


// ingrediense liste
var ingredienser = ["Brød (diverse)", "Kartofler og pasta (kogt)", "Smør, mayonnaise, flødeost mm.", "Grønne salater, spinat og krydderurter"
    , "Løg, porre og kål", "Agurk, courgette, peberfrugt, grønne bønner", "Tomater", "Gulerod og rødbede", "Avocado", "Champignon", "Ærter, majs og asparges", "Syltede grøntsager",
    "Varmebehandlede grøntsager", "Citrusfrugter", "Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand", "Kødpålæg, pH >6,2 og >2,5 % salt-i-vand", "Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand ", "Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand", "Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand", "Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand", "Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand", "Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand", "Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand", "Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand", "Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand", "Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand", "Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand", "Spegepølse", "Leverpostej", "æg", "mayonnaisesalater", "Ost (faste)", "Ost (bløde)"
]

//Not done
function mængdeFriskeGrønsager() {

}

/*
//Total Mængde - not done
var totalMængde = totalMængde();
function totalMængde() {
    return array.forEach(element => {

    });;   // Foreach kg in mængde i kg ++
}
*/


