/* 
const order = {
    id: 37214,
    product: 'pěnová matrace',
    delivery: '21.8.2021',
  };
  
  document.body.innerHTML =`
  <h2> nazev </h2>
  <p>ID objednavky: ${order.id},</p> 
  <p>Nazev produktu: ${order.product}</p>
  <p>Delka jmena produktu: ${order.product.lenght}</p>
  <p> math: ${333*6-12}</p>
  `


  
  const film =  "hledá se Nemo";

  
  document.body.innerHTML += film.length;
  document.body.innerHTML += film.toUpperCase();
  document.body.innerHTML += film.slice(0,5);
  document.body.innerHTML += title.slice(title.length - 5, title.length)



*/

/*
const email = prompt("Váš e-mail:");
const atIndex = email.indexOf("@");
const parsedEmail = {
  userName: email.slice(0, atIndex),
  domain: email.slice(atIndex + 1),
};
document.body.innerHTML =
  "<p>Uživatelské jméno: " + parsedEmail.userName + "</p>";
document.body.innerHTML += "<p>Doména:" + parsedEmail.domain + "</p>";


*/

/*
const ulice = prompt("ulice: ");
const cislo = prompt("číslo domu: ");
const mesto = prompt("město: ");
const psc = prompt("psč: ").length(5);

document.body.innerHTML +=`"
ulice: ${ulice}, číslo domu: ${cislo},město: ${mesto}, PSČ: ${psc}"
`
*/
/*
const vek = 18
const preference = "cervene"
const naSklade = false
const dostupne = false

// < <= > >= 
// == ===
// != !==

// String   Number
if(naSklade === false) { 
    document.body.innerHTML = `<p>produkt je na sklade</p>`
} else { 
    document.body.innerHTML = `<p>produkt neni na sklade</p>`
}
*/

/*
if(vek >= 18) {
    document.body.innerHTML = `Je ti vic nez 18, muzes nakupovat`
    
    if(preference === "cervene") {
        document.body.innerHTML = `Je ti vic nez 18, muzes nakupovat, tady je vyber cerveneho vina`
    }
} else {
    document.body.innerHTML = `Je ti vic mene 18, nemuzes nakupovat`
}
*/
/*const znamka = 1

if(znamka === 1) {
    document.body.innerHTML += `vyborny`
} else if(znamka === 2) {
    document.body.innerHTML = `chvalitebny`
} else if(znamka === 3) {
    document.body.innerHTML = `dobry`
} else if(znamka === 4) {
    document.body.innerHTML = `dostatecny`
} else {
    document.body.innerHTML = `nedostatecny`
}

switch(znamka) {
    case 1:
        document.body.innerHTML += `vyborny`
        break

    case 2:
        document.body.innerHTML += `chvalitebny`
        break

    default:
        document.body.innerHTML += `spatne zadana znamka`
        break
}
*/

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
/*
const jmeno = prompt("Zadej své křestní jméno bez diakritiky:");
const prijmeni = prompt("Zadej své příjmení bez diakritiky:");

const upraveneJmeno = jmeno.trim();
const upravenePrijmeni = prijmeni.trim();

const znakyJmeno = upraveneJmeno.slice(0, 3);
const znakyPrijmeni = upravenePrijmeni.slice(0, 5);

const email = `${znakyPrijmeni}${znakyJmeno}@fit.com`;

document.body.innerHTML = `<h2>Vaše e-mailová adresa: ${email}</h2>`;
*/
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



