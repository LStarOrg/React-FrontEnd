import firebase from "../api/firebase";

function OpslagsAPI() {

    //BrødDiverse 1
    const BrødDiverse3 = firebase.database().ref('Brød (diverse)/3');
    const BrødDiverse4 = firebase.database().ref('Brød (diverse)/4');
    const BrødDiverse5 = firebase.database().ref('Brød (diverse)/5');
    const BrødDiverse6 = firebase.database().ref('Brød (diverse)/6');
    const BrødDiverse7 = firebase.database().ref('Brød (diverse)/7');
    const BrødDiverse8 = firebase.database().ref('Brød (diverse)/8');

    //Kartofler og pasta (kogt) 2 
    const KartoflerOgPastaKogt3 = firebase.database().ref('Kartofler og pasta (kogt)/3');
    const KartoflerOgPastaKogt4 = firebase.database().ref('Kartofler og pasta (kogt)/4');
    const KartoflerOgPastaKogt5 = firebase.database().ref('Kartofler og pasta (kogt)/5');
    const KartoflerOgPastaKogt6 = firebase.database().ref('Kartofler og pasta (kogt)/6');
    const KartoflerOgPastaKogt7 = firebase.database().ref('Kartofler og pasta (kogt)/7');
    const KartoflerOgPastaKogt8 = firebase.database().ref('Kartofler og pasta (kogt)/8');

    //Smør, mayonnaise, flødeost mm. 3
    const SmørMayonnaiseFlødeostmm3 = firebase.database().ref('Smør, mayonnaise, flødeost mm./3');
    const SmørMayonnaiseFlødeostmm4 = firebase.database().ref('Smør, mayonnaise, flødeost mm./4');
    const SmørMayonnaiseFlødeostmm5 = firebase.database().ref('Smør, mayonnaise, flødeost mm./5');
    const SmørMayonnaiseFlødeostmm6 = firebase.database().ref('Smør, mayonnaise, flødeost mm./6');
    const SmørMayonnaiseFlødeostmm7 = firebase.database().ref('Smør, mayonnaise, flødeost mm./7');
    const SmørMayonnaiseFlødeostmm8 = firebase.database().ref('Smør, mayonnaise, flødeost mm./8');

    //Grønne salater, spinat og krydderurter 4
    const GrønneSalaterSpinatOgKrydderurter3 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/3');
    const GrønneSalaterSpinatOgKrydderurter4 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/4');
    const GrønneSalaterSpinatOgKrydderurter5 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/5');
    const GrønneSalaterSpinatOgKrydderurter6 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/6');
    const GrønneSalaterSpinatOgKrydderurter7 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/7');
    const GrønneSalaterSpinatOgKrydderurter8 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/8');

    //LøgPorreOgKål 5
    const LøgPorreOgKål3 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/3');
    const LøgPorreOgKål4 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/4');
    const LøgPorreOgKål5 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/5');
    const LøgPorreOgKål6 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/6');
    const LøgPorreOgKål7 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/7');
    const LøgPorreOgKål8 = firebase.database().ref('GrønneSalaterSpinatOgKrydderurter/8');

    //Grønne salater, spinat og krydderurter 6
    const AgurkCourgettePeberfrugtGrønneBønner3 = firebase.database().ref('Agurk, courgette, peberfrugt, grønne bønner/3');
    const AgurkCourgettePeberfrugtGrønneBønner4 = firebase.database().ref('Agurk, courgette, peberfrugt, grønne bønner/4');
    const AgurkCourgettePeberfrugtGrønneBønner5 = firebase.database().ref('Agurk, courgette, peberfrugt, grønne bønner/5');
    const AgurkCourgettePeberfrugtGrønneBønner6 = firebase.database().ref('Agurk, courgette, peberfrugt, grønne bønner/6');
    const AgurkCourgettePeberfrugtGrønneBønner7 = firebase.database().ref('Agurk, courgette, peberfrugt, grønne bønner/7');
    const AgurkCourgettePeberfrugtGrønneBønner8 = firebase.database().ref('Agurk, courgette, peberfrugt, grønne bønner/8');

    //Tomater 7
    const Tomater3 = firebase.database().ref('Tomater/3');
    const Tomater4 = firebase.database().ref('Tomater/4');
    const Tomater5 = firebase.database().ref('Tomater/5');
    const Tomater6 = firebase.database().ref('Tomater/6');
    const Tomater7 = firebase.database().ref('Tomater/7');
    const Tomater8 = firebase.database().ref('Tomater/8');

    //Gulerod Og Rødbede 8
    const GulerodOgRødbede3 = firebase.database().ref('Gulerod og rødbede/3');
    const GulerodOgRødbede4 = firebase.database().ref('Gulerod og rødbede/4');
    const GulerodOgRødbede5 = firebase.database().ref('Gulerod og rødbede/5');
    const GulerodOgRødbede6 = firebase.database().ref('Gulerod og rødbede/6');
    const GulerodOgRødbede7 = firebase.database().ref('Gulerod og rødbede/7');
    const GulerodOgRødbede8 = firebase.database().ref('Gulerod og rødbede/8');

    //Advocado 9
    const Avocado3 = firebase.database().ref('Avocado/3');
    const Avocado4 = firebase.database().ref('Avocado/4');
    const Avocado5 = firebase.database().ref('Avocado/5');
    const Avocado6 = firebase.database().ref('Avocado/6');
    const Avocado7 = firebase.database().ref('Avocado/7');
    const Avocado8 = firebase.database().ref('Avocado/8');

    //Champignon 10
    const Champignon3 = firebase.database().ref('Champignon/3');
    const Champignon4 = firebase.database().ref('Champignon/4');
    const Champignon5 = firebase.database().ref('Champignon/5');
    const Champignon6 = firebase.database().ref('Champignon/6');
    const Champignon7 = firebase.database().ref('Champignon/7');
    const Champignon8 = firebase.database().ref('Champignon/8');

    //Ærter, majs og asparges 11
    const ÆrterMajsOgAsparges3 = firebase.database().ref('Ærter, majs og asparges/3');
    const ÆrterMajsOgAsparges4 = firebase.database().ref('Ærter, majs og asparges/4');
    const ÆrterMajsOgAsparges5 = firebase.database().ref('Ærter, majs og asparges/5');
    const ÆrterMajsOgAsparges6 = firebase.database().ref('Ærter, majs og asparges/6');
    const ÆrterMajsOgAsparges7 = firebase.database().ref('Ærter, majs og asparges/7');
    const ÆrterMajsOgAsparges8 = firebase.database().ref('Ærter, majs og asparges/8');

    //Syltede grøntsager 12
    const SyltedeGrøntsager3 = firebase.database().ref('Syltede grøntsager/3');
    const SyltedeGrøntsager4 = firebase.database().ref('Syltede grøntsager/4');
    const SyltedeGrøntsager5 = firebase.database().ref('Syltede grøntsager/5');
    const SyltedeGrøntsager6 = firebase.database().ref('Syltede grøntsager/6');
    const SyltedeGrøntsager7 = firebase.database().ref('Syltede grøntsager/7');
    const SyltedeGrøntsager8 = firebase.database().ref('Syltede grøntsager/8');

    //Syltede grøntsager 13
    const VarmebehandledeGrøntsager3 = firebase.database().ref('Varmebehandlede grøntsager/3');
    const VarmebehandledeGrøntsager4 = firebase.database().ref('Varmebehandlede grøntsager/4');
    const VarmebehandledeGrøntsager5 = firebase.database().ref('Varmebehandlede grøntsager/5');
    const VarmebehandledeGrøntsager6 = firebase.database().ref('Varmebehandlede grøntsager/6');
    const VarmebehandledeGrøntsager7 = firebase.database().ref('Varmebehandlede grøntsager/7');
    const VarmebehandledeGrøntsager8 = firebase.database().ref('Varmebehandlede grøntsager/8');

    //Citrusfrugter 14
    const Citrusfrugter3 = firebase.database().ref('Citrusfrugter/3');
    const Citrusfrugter4 = firebase.database().ref('Citrusfrugter/4');
    const Citrusfrugter5 = firebase.database().ref('Citrusfrugter/5');
    const Citrusfrugter6 = firebase.database().ref('Citrusfrugter/6');
    const Citrusfrugter7 = firebase.database().ref('Citrusfrugter/7');
    const Citrusfrugter8 = firebase.database().ref('Citrusfrugter/8');

    //Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand 15
    const Kødpålæg153 = firebase.database().ref('Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand/3');
    const Kødpålæg154 = firebase.database().ref('Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand/4');
    const Kødpålæg155 = firebase.database().ref('Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand/5');
    const Kødpålæg156 = firebase.database().ref('Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand/6');
    const Kødpålæg157 = firebase.database().ref('Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand/7');
    const Kødpålæg158 = firebase.database().ref('Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand/8');

    //Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand 16
    const Kødpålæg163 = firebase.database().ref('Kødpålæg, pH >6,2 og >2,5 % salt-i-vand/3');
    const Kødpålæg164 = firebase.database().ref('Kødpålæg, pH >6,2 og >2,5 % salt-i-vand/4');
    const Kødpålæg165 = firebase.database().ref('Kødpålæg, pH >6,2 og >2,5 % salt-i-vand/5');
    const Kødpålæg166 = firebase.database().ref('Kødpålæg, pH >6,2 og >2,5 % salt-i-vand/6');
    const Kødpålæg167 = firebase.database().ref('Kødpålæg, pH >6,2 og >2,5 % salt-i-vand/7');
    const Kødpålæg168 = firebase.database().ref('Kødpålæg, pH >6,2 og >2,5 % salt-i-vand/8');

    //Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand 17
    const Kødpålæg173 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand/3');
    const Kødpålæg174 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand/4');
    const Kødpålæg175 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand/5');
    const Kødpålæg176 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand/6');
    const Kødpålæg177 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand/7');
    const Kødpålæg178 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand/8');

    //Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand 18
    const Kødpålæg183 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand/3');
    const Kødpålæg184 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand/4');
    const Kødpålæg185 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand/5');
    const Kødpålæg186 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand/6');
    const Kødpålæg187 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand/7');
    const Kødpålæg188 = firebase.database().ref('Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand/8');

    //Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand 19
    const Kødpålæg193 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand/3');
    const Kødpålæg194 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand/4');
    const Kødpålæg195 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand/5');
    const Kødpålæg196 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand/6');
    const Kødpålæg197 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand/7');
    const Kødpålæg198 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand/8');

    //Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand 20
    const Kødpålæg203 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand/3');
    const Kødpålæg204 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand/4');
    const Kødpålæg205 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand/5');
    const Kødpålæg206 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand/6');
    const Kødpålæg207 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand/7');
    const Kødpålæg208 = firebase.database().ref('Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand/8');

    //Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand 21
    const Kødpålæg213 = firebase.database().ref('Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand/3');
    const Kødpålæg214 = firebase.database().ref('Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand/4');
    const Kødpålæg215 = firebase.database().ref('Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand/5');
    const Kødpålæg216 = firebase.database().ref('Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand/6');
    const Kødpålæg217 = firebase.database().ref('Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand/7');
    const Kødpålæg218 = firebase.database().ref('Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand/8');

    //Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand 22
    const Kødpålæg223 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand/3');
    const Kødpålæg224 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand/4');
    const Kødpålæg225 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand/5');
    const Kødpålæg226 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand/6');
    const Kødpålæg227 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand/7');
    const Kødpålæg228 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >2,0-4,0 % salt-i-vand/8');

    //Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand 23
    const Kødpålæg233 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand/3');
    const Kødpålæg234 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand/4');
    const Kødpålæg235 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand/5');
    const Kødpålæg236 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand/6');
    const Kødpålæg237 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand/7');
    const Kødpålæg238 = firebase.database().ref('Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand/8');

    //Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand 24
    const FiskePålæg243 = firebase.database().ref('Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand/3');
    const FiskePålæg244 = firebase.database().ref('Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand/4');
    const FiskePålæg245 = firebase.database().ref('Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand/5');
    const FiskePålæg246 = firebase.database().ref('Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand/6');
    const FiskePålæg247 = firebase.database().ref('Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand/7');
    const FiskePålæg248 = firebase.database().ref('Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand/8');

    //Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand 25
    const FiskePålæg253 = firebase.database().ref('Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand/3');
    const FiskePålæg254 = firebase.database().ref('Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand/4');
    const FiskePålæg255 = firebase.database().ref('Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand/5');
    const FiskePålæg256 = firebase.database().ref('Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand/6');
    const FiskePålæg257 = firebase.database().ref('Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand/7');
    const FiskePålæg258 = firebase.database().ref('Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand/8');

    //Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand 26
    const FiskePålæg263 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand/3');
    const FiskePålæg264 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand/4');
    const FiskePålæg265 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand/5');
    const FiskePålæg266 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand/6');
    const FiskePålæg267 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand/7');
    const FiskePålæg268 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand/8');

    //Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand 27
    const FiskePålæg273 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand/3');
    const FiskePålæg274 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand/4');
    const FiskePålæg275 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand/5');
    const FiskePålæg276 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand/6');
    const FiskePålæg277 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand/7');
    const FiskePålæg278 = firebase.database().ref('Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand/8');

    //Spegepølse 28
    const Spegepølse283 = firebase.database().ref('Spegepølse/3');
    const Spegepølse284 = firebase.database().ref('Spegepølse/4');
    const Spegepølse285 = firebase.database().ref('Spegepølse/5');
    const Spegepølse286 = firebase.database().ref('Spegepølse/6');
    const Spegepølse287 = firebase.database().ref('Spegepølse/7');
    const Spegepølse288 = firebase.database().ref('Spegepølse/8');

    //Leverpostej 29
    const Leverpostej293 = firebase.database().ref('Leverpostej/3');
    const Leverpostej294 = firebase.database().ref('Leverpostej/4');
    const Leverpostej295 = firebase.database().ref('Leverpostej/5');
    const Leverpostej296 = firebase.database().ref('Leverpostej/6');
    const Leverpostej297 = firebase.database().ref('Leverpostej/7');
    const Leverpostej298 = firebase.database().ref('Leverpostej/8');

    //æg 30
    const æg303 = firebase.database().ref('æg/3');
    const æg304 = firebase.database().ref('æg/4');
    const æg305 = firebase.database().ref('æg/5');
    const æg306 = firebase.database().ref('æg/6');
    const æg307 = firebase.database().ref('æg/7');
    const æg308 = firebase.database().ref('æg/8');

    //æg 31
    const mayonnaisesalater303 = firebase.database().ref('mayonnaisesalater/3');
    const mayonnaisesalater304 = firebase.database().ref('mayonnaisesalater/4');
    const mayonnaisesalater305 = firebase.database().ref('mayonnaisesalater/5');
    const mayonnaisesalater306 = firebase.database().ref('mayonnaisesalater/6');
    const mayonnaisesalater307 = firebase.database().ref('mayonnaisesalater/7');
    const mayonnaisesalater308 = firebase.database().ref('mayonnaisesalater/8');

    //Ost (faste) 32
    const OstFaste323 = firebase.database().ref('Ost (faste)/3');
    const OstFaste324 = firebase.database().ref('Ost (faste)/4');
    const OstFaste325 = firebase.database().ref('Ost (faste)/5');
    const OstFaste326 = firebase.database().ref('Ost (faste)/6');
    const OstFaste327 = firebase.database().ref('Ost (faste)/7');
    const OstFaste328 = firebase.database().ref('Ost (faste)/8');

    //Ost (bløde) 33
    const OstBløde333 = firebase.database().ref('Ost (bløde)/3');
    const OstBløde334 = firebase.database().ref('Ost (bløde)/4');
    const OstBløde335 = firebase.database().ref('Ost (bløde)/5');
    const OstBløde336 = firebase.database().ref('Ost (bløde)/6');
    const OstBløde337 = firebase.database().ref('Ost (bløde)/7');
    const OstBløde338 = firebase.database().ref('Ost (bløde)/8');

    // Test
    Avocado3.on("value", (abc) => {
        console.log(abc.val());
    });
    Avocado4.on("value", (abc) => {
        console.log(abc.val());
    });
    Avocado5.on("value", (abc) => {
        console.log(abc.val());
    });
    Avocado6.on("value", (abc) => {
        console.log(abc.val());
    });
    Avocado7.on("value", (abc) => {
        console.log(abc.val());
    });
    Avocado8.on("value", (abc) => {
        console.log(abc.val());
    });

}


export default OpslagsAPI;