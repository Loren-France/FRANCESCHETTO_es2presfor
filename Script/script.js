function CreaTurni() {
let titolo = "<h2>Tabella dei turni di accesso al laboratorio</h2>";

    let turni = new Map([
        ["Turno 08:00-09:00:", "S01, S02, S03"],
        ["Turno 09:00-10:00:", "S04, S05, S06"],
        ["Turno 10:00-11:00:", "S07, S08, S09"]
    ]);

    document.getElementById("tabellaTurni").innerHTML = titolo + "<br>";

    for (let [chiave, valore] of turni) {
        document.getElementById("tabellaTurni").innerHTML += chiave + " " + valore + "<br><br>";
    }

    let quantTurni = turni.size;

    let quantStudenti = 0;
    for (let n of turni.values()) {
        quantStudenti += n.split(",").length;
    }

    if(quantTurni<=0 || quantStudenti<=0){
        document.getElementById("output").innerHTML = "Non sono presenti ne turni ne studenti!";
    } else if (quantTurni<=0) {
        document.getElementById("output").innerHTML = "Non sono presenti turni!";
    } else if (quantStudenti<=0) {
        document.getElementById("output").innerHTML = "Non sono presenti studenti!";
    } else {
        document.getElementById("output").innerHTML = "Numero totale di turni: "+ quantTurni;
        document.getElementById("output").innerHTML += "<br><br>";
        document.getElementById("output").innerHTML += "Numero totale di studenti: "+ quantStudenti;
    }

    let operazioni = "<h3>Operazioni sui turni:</h3>";

    let appendi = document.getElementById("operazioni");

    let etichetta = document.createElement("label");
    etichetta.innerHTML = "Inserisci il nome di uno studente per cercarlo fra i turni: ";
    appendi.appendChild(etichetta);

    let ricerca = document.createElement("input");
    ricerca.type = "text";
    ricerca.id = "cerca";
    appendi.appendChild(ricerca);
    ricerca = document.createElement("button");
    ricerca.innerHTML = "Cerca studente";
    ricerca.onclick = function() { () => cercaStudente(turni) };
    appendi.appendChild(ricerca);

}

function cercaStudente(turni) {
    let studente = document.getElementById("cerca").value;
    let trovato = false;

    for (let [chiave, valore] of turni) {
        if (turni.includes(studente)) {
            trovato = true;
            document.getElementById("output").innerHTML = "Lo studente " + studente + " è stato trovato nel " + chiave;;
            break;
        }
    }

    if (trovato == false) {
        document.getElementById("output").innerHTML = "Lo studente " + studente + " non è stato trovato in nessun turno.";
    }
    
    return;
}