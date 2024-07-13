function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px"; /* Changed from marginLeft to marginRight */
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0"; /* Changed from marginLeft to marginRight */
}

let numbercounter = 0; //Zählt die Anzahl an vorhandenen Maschen
let reihencounter = 0; //Zählt die Anzahl an vorhandenen Reihen
function simple_counter() {

    document.body.onkeyup = function (e) {
        if (e.key == " " ||
            e.code == "Space"
        ) {
            numbercounter++;
        }
        text_update();
        document.querySelector('#reihenincrease').onclick = () => {
            reihencounter++;
            numbercounter = 0;
            text_update();
            document.querySelector('#reihenincrease').blur();
        };

    }
}

let reihen_gesamt;
let maschen_zunahmen;
let aktuelle_maschen;

let maschen_zyklus = 2;
let maschen_in_dieser_reihe;

function zunahmen_counter() {
    reihen_gesamt = +document.getElementById('reihen').value;
    maschen_zunahmen = +document.getElementById('maschen').value;
    aktuelle_maschen = +document.getElementById('aktuelle').value;
    maschen_in_dieser_reihe = maschen_zunahmen + aktuelle_maschen;
    document.querySelector('#start-button').blur();
    document.querySelector('#start-button').disabled = true;
    console.log(`Die Werte sind ${reihen_gesamt}, ${maschen_zunahmen}, ${aktuelle_maschen}.`);


    document.body.onkeyup = function (e) {
        if (e.key == " " ||
            e.code == "Space"
        ) {
            console.log(`Stuff is happening`);
            update();
        }
    }
}

function update() {
    document.getElementById('verdoppeln').style.display = 'none';
    document.getElementById('beendet').style.display = 'none';
    numbercounter++;
    if (numbercounter > maschen_in_dieser_reihe) {
        if (reihencounter <= reihen_gesamt - 2) {
            maschen_in_dieser_reihe += maschen_zunahmen;
        }
        reihencounter++;
        numbercounter = 1;
    }
    text_update();
    if (reihencounter < reihen_gesamt) {
        if (maschen_zyklus >= maschen_in_dieser_reihe / maschen_zunahmen) {
            maschen_zyklus = 0;
            document.getElementById('verdoppeln').style.display = 'block';
        }
        maschen_zyklus++;
    }
    if (numbercounter == maschen_in_dieser_reihe) {
        document.getElementById('beendet').style.display = 'block';
    }

}
function text_update() {
    document.getElementById('reihennumber').innerHTML = `${reihencounter} Reihe(n) gehäkelt`;
    document.getElementById('maschennumber').innerHTML = `${numbercounter} Masche(n) gehäkelt`;
}
