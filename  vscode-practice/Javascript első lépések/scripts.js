let nevem = "Gábor";
let korom = 17;
console.log('A javascript is betöltött');
console.log(nevem);
console.log('Ez már a fájlból tölt be.');

if (korom >= 18) {
    console.log(`Elég idő ahhoz, h igyon egy sört`);
} else {
    console.log (`Még nem ihatsz alkoholt`);
}

console.log(`Ez itt a vége`);

// jQuerry

let szovegh1  = $(`h1`).text();
console.log(szovegh1);
console.log($(`p`).text());
$(`h1`).text(`Ezt a szöveget jQuerryvel változtattunk meg`);

let names = [`Rozi`, `Virág`, `Gábor`, `Erzsi`]
let namesLenght = 5 === names[2].length
$(`p`).text(`A names tömb 3. neve hosszab, mint 5? ${namesLenght}`)
names.push(`Júlia`, `Géza`)
names[0]=`Gábor01`
let namesfull = 4 === names.length
$(`h2`).text(`A names tömb 4 elemet tartamaz? ${namesfull} `)

let szin = {
    colors: [`orange,`, `blue`, `green`],

};
 let checkColors = szin.colors.length < 3
szin.hasManyColors = checkColors

//Ciklusok

//Hozz létre egy ciklust, ami kiírja a számokat 0-tól 9-ig
let szo = [];

/*for (let index = 1; index < 11 ; index++) {
    szo.push(" "+index);
}*/
for (let index = 0; index < 10 ; index++) {
    szo.push(" "+index);
}
$(`h3`).text(szo)

// 0-20 páros számok

let szamok = []
for (let index = 0; index < 21; index++) {
    if (index%2===0) {
        szamok.push(index)
        
    }
}
$(`h4`).text(szamok)

