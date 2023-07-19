"use strict";
// creo un oggetto di classe abstract per definire i valori che sono presenti
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    // faccio il calcolo per calcolare le tsse dell' inps
    getTasselnps() {
        return this.redditoannuolordo * (this.tasseinps / 100);
    }
    // faccio il calcolo per calcolare le tsse dell' irpef
    getTasselrpef() {
        return this.redditoannuolordo * (this.tasseirpef / 100);
    }
    // sommo il reddito più le tasse
    getRedditoAnnuoNetto() {
        const tasseTotali = this.getUtileTasse() + this.getTasselnps() + this.getTasselrpef();
        return this.redditoannuolordo - tasseTotali;
    }
}
class LavoratoreA extends LavoratoreAutonomo {
    constructor(redditoannuolordo) {
        super(1, redditoannuolordo, 30, 19);
    }
    getUtileTasse() {
        return this.redditoannuolordo * 0.1;
    }
}
class LavoratoreB extends LavoratoreAutonomo {
    constructor(redditoannuolordo) {
        super(2, redditoannuolordo, 20, 12);
    }
    getUtileTasse() {
        return this.redditoannuolordo * 0.12;
    }
}
// Esempio di utilizzo
const lavoratoreA = new LavoratoreA(50000);
const lavoratoreB = new LavoratoreB(60000);
console.log("Reddito netto lavoratore A:", lavoratoreA.getRedditoAnnuoNetto());
console.log("Reddito netto lavoratore B:", lavoratoreB.getRedditoAnnuoNetto());
class LavoratoreAutonomo2 {
}
// Funzione per calcolare il reddito netto e visualizzarlo nella pagina HTML
function calcolaRedditoNetto() {
    const inputReddito = document.getElementById("reddito");
    const redditoAnnuloLordo = parseFloat(inputReddito.value);
    const lavoratoreA = new LavoratoreA(redditoAnnuloLordo);
    const lavoratoreB = new LavoratoreB(redditoAnnuloLordo);
    const redditoNettoA = lavoratoreA.getRedditoAnnuoNetto();
    const redditoNettoB = lavoratoreB.getRedditoAnnuoNetto();
    const risultato = document.getElementById("redditoNetto");
    risultato.textContent = `Lavoratore A: ${redditoNettoA.toFixed(2)} €, Lavoratore B: ${redditoNettoB.toFixed(2)} €`;
}
