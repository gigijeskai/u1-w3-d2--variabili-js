let Name = "Luigi";
let LastName = "Indaco";
let middleName = "Null";
console.log(middleName);

let fullName = (Name + " " + LastName);
document.write(fullName);
console.log("Hello, my name is [Luigi Indaco ]Make sure to use variables");

let age = 26;
let currentYear = 2022;
let birthYear = currentYear - age;
console.log(birthYear);

// secondo esercizio

let spaghetti = 400;
let guanciale = 250;
let uova = 6;
let pecorino = 50;
let pepe = 4;

let rosolareGuanciale = guanciale / 4;
console.log(rosolareGuanciale);
let aggiungereUova = uova / 4; 
console.log(aggiungereUova);
let pecorinoNelleUova = pecorino / 4;
console.log(pecorinoNelleUova);
let pepeInPadella = pepe / 4;
console.log(pepeInPadella);
let cuocerePasta = spaghetti / 4;
console.log(cuocerePasta);

console.log("ricetta carbonare per 1 persona è guanciale:" + rosolareGuanciale + " uova " + aggiungereUova + " pecorino " + 
pecorinoNelleUova + " pepe " + pepeInPadella + " spaghetti " + cuocerePasta);