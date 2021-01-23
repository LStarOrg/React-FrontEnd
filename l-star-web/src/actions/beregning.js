import OpslagAPI from "../api/OpslagAPI";

var totalAmount;
var totalFriskeGrøntsager;
var procentFG;

//Grænseværdi for vækst af Listeria monocytogenes under holdbarhed

//procentFriskeGrønsagerIProdukt Done
function procentFriskeGrønsagerIProdukt() {
  procentFG = 0;
  procentFG = (totalFriskeGrøntsager / totalAmount) * 100;
  return procentFG;
}

// Done
function mængdeFriskeGrøntsager(ingredienser) {
  totalFriskeGrøntsager = 0.0;
  Object.values(ingredienser).forEach((ingrediens) => {
    if (ingrediens.amount != "") {
      if (ingrediens.id >= 4 && ingrediens.id <= 11) {
        totalFriskeGrøntsager =
          totalFriskeGrøntsager + parseFloat(ingrediens.amount);
      }
    }
  });

  console.log("totalFriskeGrøntsager =" + totalFriskeGrøntsager);
}

//Done
function totalMængde(ingredienser) {
  totalAmount = 0.0;
  Object.values(ingredienser).forEach((ingrediens) => {
    if (ingrediens.amount != "") {
      totalAmount = totalAmount + parseFloat(ingrediens.amount);
    }
  });
}

//Not Done
//muligLogStigningAfListeriaMonocytogenesNedreGrænse
/* function muligLogStigningAfListeriaMonocytogenesNedreGrænse() {
    if (totalmængde() < 0, 2){
        return 3,4}
    else return -0, 434 * LN(procentFriskeGrønsagerIProdukt()) + 2, 5006

} */

//Not Done
//antalMuligeGenerationerAfListeriaMonocytogenesNedreGrænse
/* function antalMuligeGenerationerAfListeriaMonocytogenesNedreGrænse() {
return (muligLogStigningAfListeriaMonocytogenesNedreGrænse()/Math.log2)
}
 */
//  --  Beregning af holdbarhed

//Not Done
//Gaspakket
//function gaspakket() {
//return brugerinput
//}

//Not Done
//ProduktionsdatoOgKlokkeslæt
/* function produktionsdatoOgKlokkeslæt() {
//return brugerinput 
}
 */
//Not Done
//Opbevaringstemperatur, produktionssted
/* function opbevaringstemperaturProduktionssted() {
//return brugerinput 
} */

//Not Done
//Opbevaringstid, produktionssted
/* function opbevaringstidProduktionssted() {
//return brugerinput 
} */

//Not Done
/* function opbevaringstemperaturModtagested() {
//return brugerinput 
} */

//Not Done  --  -- Big Problem
/*
function generationstidProduktionssted() {
    If (opbevaringstidProduktionssted = 3)
        { Opbevaring temperatur =+ (foreach (generationstid3)in opslag) }
        
    If (Opbevaringstemperatur, produktionssted = 4)
    { Opbevaring temperatur =+ (foreach (generationstid4)in opslag) }
        
    If (Opbevaringstemperatur, produktionssted = 5)
    { Opbevaring temperatur =+ (foreach (generationstid5)in opslag) }
        
    If (Opbevaringstemperatur, produktionssted = 6)
        { Opbevaring temperatur =+ (foreach (generationstid6)in opslag) }
        
    If (Opbevaringstemperatur, produktionssted = 7)
        { Opbevaring temperatur =+ (foreach (generationstid7)in opslag) }
        
    If (Opbevaringstemperatur, produktionssted = 8)
        { Opbevaring temperatur =+ (foreach (generationstid8)in opslag) }
        
        /*
        else catch error (Temp mangler)
        ) *  if (F8 == JA)
        {
        1,5
        }
        if else {F8 == NEJ)
        {
        1
        }
        else catch error (Gas pakket mangler)
        */
//}

//Not Done
/* function forbrugteGenerationerProduktionssted() {
    return opbevaringstidProduktionssted()/generationstidProduktionssted()
} */

//Not Done
/* function tilbageværendeGenerationerModtagested() {
    return antalMuligeGenerationerAfListeriaMonocytogenesNedreGrænse()-forbrugteGenerationerProduktionssted();
} */

//Not Done --------------------------------------- Opslag Fix
/* function generationstidModtagested() {

} */

//Not Done
/* function maksOpbevaringstidModtagestedTimer() {
     
    if (tilbageværendeGenerationerModtagested()*generationstidModtagested() == (0 || null )) 
        return "listeria afgøre ikke holdbarhed"
        else 
        return tilbageværendeGenerationerModtagested*generationstidModtagested;
} */

//Not Done
/* function generationstidProduktionsstedDage() {
    return maksOpbevaringstidModtagestedTimer()/24
} */

//Not Done
/* function holdbarhedsdatoOgKlokkeslæt() {
    if (((userinputPlaceholder)+(opbevaringstidProduktionssted() + opbevaringstemperaturModtagested)/24) == (Null || 0))
    {return "Listeria afgør ikke holbarhed"}
    else
    {return (userinputPlaceholder+(opbevaringstidProduktionssted()+maksOpbevaringstidModtagestedtIMER()))/24 }
} */

function allBeregn(ingredienser) {
  totalMængde(ingredienser);
  mængdeFriskeGrøntsager(ingredienser);
  const reProcentFG = procentFriskeGrønsagerIProdukt();

  return reProcentFG;
}

export default allBeregn;
