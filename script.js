/*

const jmeno = prompt ("zadej jméno:");
const vek = prompt ("zadej věk:");
const heslo = prompt ("zadej heslo:");



if (vek >= 65) { 
    if (heslo.length < 8) { 
        document.body.innerHTML += `<p>věk v pořádku, ale heslo je slabé</p>`;
    } else {
        document.body.innerHTML += `<p>věk v pořádku</p>`;
    }
} else { 
    document.body.innerHTML += `<p>nízký věk</p>`;
}

*/
/*

const vek = prompt("Zadej věk:");

let cena;
const plnaCena = 12;

if (vek <= 6) {
    cena = 0;
} else if (vek > 6 && vek <= 26) {
    cena = plnaCena * 0.65;
} else if (vek >= 27 && vek <= 64) {
    cena = plnaCena;
} else {
    cena = plnaCena * 0.5;
}

cena = Math.round(cena);
document.body.innerHTML = `<h2>Cena vstupenky: ${cena} €</h2>`;
*/

const jmeno = prompt("Zadej své křestní jméno bez diakritiky:");
const prijmeni = prompt("Zadej své příjmení bez diakritiky:");

const upraveneJmeno = jmeno.trim();
const upravenePrijmeni = prijmeni.trim();

const znakyJmeno = upraveneJmeno.slice(0, 3);
const znakyPrijmeni = upravenePrijmeni.slice(0, 5);

const email = `${znakyPrijmeni}${znakyJmeno}@fit.com`;

document.body.innerHTML = `<h2>Vaše e-mailová adresa: ${email}</h2>`;

/*
const pocetTricek = prompt("Zadejte požadovaný počet trik:");
    let cenaTrika;

    if (pocetTricek < 50) {
        cenaTrika = 300;
    } else if (pocetTricek >= 50 && pocetTricek < 200) {
        cenaTrika = 250;
    } else if (pocetTricek >= 200 && pocetTricek < 500) {
        cenaTrika = 200;
    } else if (pocetTricek >= 500 && pocetTricek <= 1000) {
        cenaTrika = 150;
    } else if (pocetTricek > 1000) {
        cenaTrika = 120;
    }

    const celkovaCena = cenaTrika * pocetTricek;

document.body.innerHTML += `<h2>Cena vaší objednávky je: ${celkovaCena} Kč.
 Počet objednaných triček je: ${pocetTricek}</h2>`;


*/
