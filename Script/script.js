function CreaTurni() {
document.getElementById("tabellaTurni").innerHTML = "";
document.getElementById("output").innerHTML = "";
document.getElementById("operazioni").innerHTML = "";

    let turni = new Map([
        ["Turno 08:00-09:00", ["S01", "S02", "S03"]],
        ["Turno 09:00-10:00", ["S04", "S05", "S06"]],
        ["Turno 10:00-11:00", ["S07", "S08", "S09"]]
    ]);

    stampaTurni(turni);

    let quantTurni = turni.size;

    let quantStudenti = 0;
    for (let [chiave,valore] of turni) {
        quantStudenti += valore.length;
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

    //Creazione sezione operazioni sugli orari del laboratorio

    let operazioni = document.createElement("h3");
    operazioni.innerHTML = "Operazioni sugli orari del laboratorio:";

    let appendi = document.getElementById("operazioni");

    appendi.appendChild(operazioni);

  

    //Creazione input, output e bottone per la RICERCA dello studente

    let etichetta = document.createElement("label");
    etichetta.innerHTML = "Inserisci il nome di uno studente per cercarlo fra i turni: ";
    appendi.appendChild(etichetta);

    let ricerca = document.createElement("input");
    ricerca.type = "text";
    ricerca.id = "cerca";
    appendi.appendChild(ricerca);

    ricerca = document.createElement("button");
    ricerca.innerHTML = "Cerca studente";
    ricerca.onclick = function () { cercaStudente(turni); };
    appendi.appendChild(ricerca);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }
    
    ricerca = document.createElement("div");
    ricerca.id = "outputRicerca";
    appendi.appendChild(ricerca);

    //Creazione input, output e bottone per l'AGGIUNTA di uno studente

    etichetta = document.createElement("label");
    etichetta.innerHTML = "Inserisci il nome di un turno dove AGGIUNGERE uno studente: ";
    appendi.appendChild(etichetta);

    let turno1 = document.createElement("input");
    turno1.type = "text";
    turno1.id = "turnoAggiunta";
    appendi.appendChild(turno1);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }

    etichetta = document.createElement("label");
    etichetta.innerHTML = "Inserisci il nome dello studente da AGGIUNGERE: ";
    appendi.appendChild(etichetta);

    let aggiunta = document.createElement("input");
    aggiunta.type = "text";
    aggiunta.id = "studenteAggiunta";
    appendi.appendChild(aggiunta);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }

    aggiunta = document.createElement("button");
    aggiunta.innerHTML = "Aggiungi studente";
    aggiunta.onclick = function () { aggiuntaStudente(turni); };
    appendi.appendChild(aggiunta);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }

    aggiunta = document.createElement("div");
    aggiunta.id = "outputAggiunta";
    appendi.appendChild(aggiunta);

    //Creazione input, output e bottone per la RIMOZIONE di uno studente

    etichetta = document.createElement("label");
    etichetta.innerHTML = "Inserisci il nome di un turno dove RIMUOVERE uno studente: ";
    appendi.appendChild(etichetta);

    let turno2 = document.createElement("input");
    turno2.type = "text";
    turno2.id = "turnoRimozione";
    appendi.appendChild(turno2);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }

    etichetta = document.createElement("label");
    etichetta.innerHTML = "Inserisci il nome dello studente da RIMUOVERE: ";
    appendi.appendChild(etichetta);

    let rimozione = document.createElement("input");
    rimozione.type = "text";
    rimozione.id = "studenteRimozione";
    appendi.appendChild(rimozione);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }

    rimozione = document.createElement("button");
    rimozione.innerHTML = "Rimouovi studente";
    rimozione.onclick = function () { rimozioneStudente(turni); };
    appendi.appendChild(rimozione);

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }

    rimozione = document.createElement("div");
    rimozione.id = "outputRimozione";
    appendi.appendChild(rimozione);9 

    for (let i = 0; i < 2; i++) {
        appendi.appendChild(document.createElement("br"));
    }    
}

function stampaTurni(turni) {
    let tabella = document.getElementById("tabellaTurni");
    tabella.innerHTML = "<h2>Tabella dei turni di accesso al laboratorio</h2><br>";

    for (let [chiave, valore] of turni) {
        tabella.innerHTML += chiave + " : " + valore.join(", ") + "<br><br>";
    }
}


function cercaStudente(turni) {
    let cercato = document.getElementById("cerca").value;
    let trovato = false;

    for (let [chiave, valore] of turni) {
        let array = valore;
        if (array.includes(cercato)) {
            trovato = true;
            document.getElementById("outputRicerca").innerHTML = "Lo studente " + cercato + " è stato trovato nel " + chiave;
            break;
        }
    }

    if (trovato == false) {
        document.getElementById("outputRicerca").innerHTML = "Lo studente " + cercato + " non è presente negli orari del laboratorio";
    }

    document.getElementById("outputRicerca").innerHTML += "<br><br>";

    return;
}

function aggiuntaStudente(turni) {
    let aggiunto = document.getElementById("studenteAggiunta").value;
    let turno = document.getElementById("turnoAggiunta").value;

    if (turni.has(turno)) {

        let array = turni.get(turno);

        for (let i = 0; i < array.length; i++) {
            if (array[i] == aggiunto) {
                document.getElementById("outputAggiunta").innerHTML = "Lo studente " + aggiunto + " è già presente nel " + turno + "!";
                return;
            }
        }
        array.push(aggiunto);

        turni.set(turno, array);

        document.getElementById("outputAggiunta").innerHTML = "Studente aggiunto correttamente!";
    } 
    else {
        document.getElementById("outputAggiunta").innerHTML = "Il turno " + turno + " non esiste!";
    }

    stampaTurni(turni);

    return;
}


function rimozioneStudente(turni) {
    let rimosso = document.getElementById("studenteRimozione").value;
    let turno = document.getElementById("turnoRimozione").value;

    if (turni.has(turno)) {

        let array = turni.get(turno);

        let nuovalista = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] != rimosso) {
                nuovalista.push(array[i]);
            }
        }

        turni.set(turno, nuovalista);

        document.getElementById("outputRimozione").innerHTML = "Studente rimosso correttamente!";
    } 
    else {
        document.getElementById("outputRimozione").innerHTML = "Il turno " + turno + " non esiste!";
    }

    stampaTurni(turni);

    return;
}