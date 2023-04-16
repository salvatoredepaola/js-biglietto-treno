let anniOK = false
let distanzaOK = false

let anni = prompt("Quanti anni hai?")

if (anni == null || anni == "") {
    alert("Non hai inserito l'età");
} else {
    console.log("L'utente ha inserito un'età valida");
    anniOK = true; 
}

let distanza = prompt("Quanti kilomenti devi percorrere?")

if (distanza == null || distanza == "") {
    alert("Non hai inserito i kilometri");
} else {
    console.log("L'utente ha inserito dei kilometri validi");
    distanzaOK = true; 
}

if (anniOK && distanzaOK) {

    let prezzo = distanza * 0.21;

    document.getElementById("prezzo").innerText = prezzo;

    console.log("Il nuovo prezzo è:", prezzo);

} else {

    document.getElementById("prezzo").innerText = "Nessuna prezzo per te, ricarica la pagina e inserisci i dati.";

    console.error("Impossibile generare il prezzo: dati mancanti.");

    if (!anniOk) {
        console.error("Età mancante!");
    }

    if (!distanzaOk) {
        console.error("Kilometri mancante!");
    }

}