import React from "react";

class Forklaring extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">Forklaring</h1>
        <div className="ui green segment">
          <h2 className="ui header">Baggrund</h2>
          <p>
            Dette værktøj beregner tilladt vækst af Listeria monocytogenes (i
            dette værktøj betegnet Listeria) i kolde måltider. Du kan derfor
            fastsætte holdbarhed af kolde måltider som smørrebrød og sandwich
            (salater) i forhold til Listeria – og kun Listeria. Hvis I anvender
            færdigpakkede fødevarer mærket med holdbarhed efter åbning, skal
            denne dato overholdes uanset hvad modellen beregner af holdbarhed.
          </p>
          <p>
            Listeria er vidt udbredt i naturen og kan derfor findes i frisk
            frugt og grønt. Den kan overføres til smørrebrød / sandwich hvis der
            anvendes frisk frugt og grønt, og efterfølgende vokse under
            holdbarhedsperioden på køl.
          </p>
          <p>
            Det forudsættes i dette værktøj at der til produktionen anvendes
            friske råvarer, at produktionsmiljøet er Listeria-frit og at gode
            arbejdsgange følges i forhold til hygiejne og kølekæde. Dermed kan
            Listeria kun tilføres til måltidet fra frisk frugt og grønt.
          </p>
          <p>
            Når Listeria overføres til nyt miljø som sker ved produktion af
            smørrebrød vil den have en lagfase/nølefase først, hvor den ikke
            formere sig men tilpasser sig nye omgivelser. Nølefasen bruges i
            dette værktøj på tiden til produktion samt transport. Efter
            nølefasen begynder Listeria at formere sig og er hermed i
            vækstfasen. Det er denne vækstfase værktøjet beregner på.
          </p>
          <p>
            Beregningen tager udgangspunkt i fundne niveauer af Listeria i
            frugt, grønt og kolde måltider i Nordeuropa. Fra litteraturen er
            fundet data for vækst af Listeria i relevante ingredienser til kolde
            måltider. Ud fra kendte niveauer og viden om vækst beregnes hvor
            hurtigt Listeria kan vokse i de anvendte ingredienser i måltidet. F.
            eks. kan Listeria overføres fra salatblad til æg og under
            holdbarheden vokse på salatblad og æg. Værktøjet beregner vækst på
            den ingrediens hvor Listeria vokser hurtigst.
          </p>
          <p>
            Tilladt vækst i dette værktøj er mellem 0,5 log og 3,4 log. Hvis der
            ikke er frisk grønt i opskriften, beregnes tilladt vækst ud fra den
            antagelse, at der fra start er under 1 Listeria i 25 g prøve og at
            der ved holdbarheds udløb må være under 100 Listeria pr g prøve
            (svarende til kriterie for spiseklare fødevarer i
            Mikrobiologiforordning 2073). Dette svarer til at Listeria kan vokse
            3,4 log i holdbarhedsperioden. Jo større mængde frisk frugt og grønt
            opskriften indeholder jo mindre vækst tillades. Ved høje
            grøntsagsprocenter betyder det at der tillades meget lidt vækst og
            holdbarheden bliver således meget kort.
          </p>
        </div>
        <div className="ui green segment">
            <h2 className="ui header">Sådan gør du</h2>
            <p>
                forklaring på elementer i beregneren.
            </p>

        </div>
      </div>
    );
  }
}

export default Forklaring;
