// creo un oggetto di classe abstract per definire i valori che sono presenti
abstract class LavoratoreAutonomo {
  codredd: number;
  redditoannuolordo: number;
  tasseinps: number;
  tasseirpef: number;

  constructor(
    codredd: number,
    redditoannuolordo: number,
    tasseinps: number,
    tasseirpef: number
  ) {
    this.codredd = codredd;
    this.redditoannuolordo = redditoannuolordo;
    this.tasseinps = tasseinps;
    this.tasseirpef = tasseirpef;
  }

  abstract getUtileTasse(): number;
  // faccio il calcolo per calcolare le tsse dell' inps
  getTasselnps(): number {
    return this.redditoannuolordo * (this.tasseinps / 100);
  }
  // faccio il calcolo per calcolare le tsse dell' irpef
  getTasselrpef(): number {
    return this.redditoannuolordo * (this.tasseirpef / 100);
  }
  // sommo il reddito più le tasse
  getRedditoAnnuoNetto(): number {
    const tasseTotali =
      this.getUtileTasse() + this.getTasselnps() + this.getTasselrpef();
    return this.redditoannuolordo - tasseTotali;
  }
}

class LavoratoreA extends LavoratoreAutonomo {
  constructor(redditoannuolordo: number) {
    super(1, redditoannuolordo, 30, 19);
  }

  getUtileTasse(): number {
    return this.redditoannuolordo * 0.1;
  }
}

class LavoratoreB extends LavoratoreAutonomo {
  constructor(redditoannuolordo: number) {
    super(2, redditoannuolordo, 20, 12);
  }

  getUtileTasse(): number {
    return this.redditoannuolordo * 0.12;
  }
}

// Esempio di utilizzo
const lavoratoreA = new LavoratoreA(50000);
const lavoratoreB = new LavoratoreB(60000);

console.log("Reddito netto lavoratore A:", lavoratoreA.getRedditoAnnuoNetto());
console.log("Reddito netto lavoratore B:", lavoratoreB.getRedditoAnnuoNetto());

abstract class LavoratoreAutonomo2 {
  // Resto del codice della classe come prima
}

// Funzione per calcolare il reddito netto e visualizzarlo nella pagina HTML
function calcolaRedditoNetto() {
  const inputReddito = document.getElementById("reddito") as HTMLInputElement;
  const redditoAnnuloLordo = parseFloat(inputReddito.value);

  const lavoratoreA = new LavoratoreA(redditoAnnuloLordo);
  const lavoratoreB = new LavoratoreB(redditoAnnuloLordo);

  const redditoNettoA = lavoratoreA.getRedditoAnnuoNetto();
  const redditoNettoB = lavoratoreB.getRedditoAnnuoNetto();

  const risultato = document.getElementById("redditoNetto") as HTMLSpanElement;

  risultato.textContent = `Lavoratore A: ${redditoNettoA.toFixed(
    2
  )} €, Lavoratore B: ${redditoNettoB.toFixed(2)} €`;
}
