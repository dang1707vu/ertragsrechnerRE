let angle = document.querySelector('.angleDir');
let rotate = getComputedStyle(angle).getPropertyValue('rotate');

let rangeX = document.querySelector('#customRange2');
let value = getComputedStyle(rangeX).getPropertyValue('min');


//Photovoltaikleistung
 var modul = 1;
function Modul1() {
    modul = 1;
}
function Modul2() {
    modul = 2;
}

function Modul4() {
    modul = 4;
}

//Jahresstromverbrauch
var person = 1;
function Person1() {
    person = 1;
    document.getElementById('personenAnzahl').innerHTML =  person + " PERSON";
    document.getElementById('verbraucht').innerHTML = "2300 kWh";
}
function Person2() {
    person = 2;
    document.getElementById('personenAnzahl').innerHTML =  person + " PERSONEN";
    document.getElementById('verbraucht').innerHTML = "2750 kWh";
}
function Person3() {
    person = 3;
    document.getElementById('personenAnzahl').innerHTML =  person + " PERSONEN";
    document.getElementById('verbraucht').innerHTML = "3500 kWh";
}
function Person4() {
    person = 4;
    document.getElementById('personenAnzahl').innerHTML =  person + " PERSONEN";
    document.getElementById('verbraucht').innerHTML = "3800 kWh";
}
function Person5() {
    person = 5;
    document.getElementById('personenAnzahl').innerHTML =  person + " PERSONEN";
    document.getElementById('verbraucht').innerHTML = "4550 kWh";
}


//Progressbar
var X = 180;
    function Nord() {
        X = 180;
        document.getElementById('customRange').value = '0';
        document.getElementById('triangle-down').style.rotate = "0deg";
        calcWirkungsgradDir();
    }
    function NordO() {
        X = 145;
        document.getElementById('customRange').value = '1';
        document.getElementById('triangle-down').style.rotate = "45deg";
        calcWirkungsgradDir();
    
    }
    function Osten() {
        X = 90;
        document.getElementById('customRange').value = '2';
        document.getElementById('triangle-down').style.rotate = "90deg";
        calcWirkungsgradDir();
    }
    function SüdO() {
        X = 45;
        document.getElementById('customRange').value = '3';
        document.getElementById('triangle-down').style.rotate = "135deg";
        calcWirkungsgradDir();
    }
    function Süd() {
        X = 0;
        wirkungsgrad;
        document.getElementById('customRange').value = '4';
        document.getElementById('triangle-down').style.rotate = "180deg";
        calcWirkungsgradDir();
    }
    function SüdW() {
        X = 45;
        document.getElementById('customRange').value = '5';
        document.getElementById('triangle-down').style.rotate = "225deg";
        calcWirkungsgradDir();
    }
    function W() {
        X = 90;
        document.getElementById('customRange').value = '6';
        document.getElementById('triangle-down').style.rotate = "270deg";
        calcWirkungsgradDir();
    }
    function NordW() {
        X = 145;
        document.getElementById('customRange').value = '7';
        document.getElementById('triangle-down').style.rotate = "315deg";
        calcWirkungsgradDir();
    }

    function deg0() {
        document.getElementById('customRange2').value = '0';
        // document.getElementById('angle-dir').style.rotate = "90deg";
        document.getElementById('angle-dir-fade').style.rotate = "90deg";
        angle.style.setProperty('rotate', '90deg');
        calcWirkungsgrad0deg();
    }
    function deg15() {
        document.getElementById('customRange2').value = '1';
        // document.getElementById('angle-dir').style.rotate = "75deg";
        document.getElementById('angle-dir-fade').style.rotate = "75deg";
        angle.style.setProperty('rotate', '75deg');
        calcWirkungsgrad15deg();
    }
    function deg30() {
        document.getElementById('customRange2').value = '2';
        // document.getElementById('angle-dir').style.rotate = "60deg";
        document.getElementById('angle-dir-fade').style.rotate = "60deg";
        angle.style.setProperty('rotate', '60deg');
        calcWirkungsgrad30deg();
    }
    function deg45() {
        document.getElementById('customRange2').value = '3';
        // document.getElementById('angle-dir').style.rotate = "45deg";
        document.getElementById('angle-dir-fade').style.rotate = "45deg";
        angle.style.setProperty('rotate', '45deg');
        calcWirkungsgrad45deg();
    }
    function deg60() {
        document.getElementById('customRange2').value = '4';
        // document.getElementById('angle-dir').style.rotate = "30deg";
        document.getElementById('angle-dir-fade').style.rotate = "30deg";
        angle.style.setProperty('rotate', '30deg');
        calcWirkungsgrad60deg();
    }
    function deg75() {
        document.getElementById('customRange2').value = '5';
        // document.getElementById('angle-dir').style.rotate = "15deg";
        document.getElementById('angle-dir-fade').style.rotate = "15deg";
        angle.style.setProperty('rotate', '15deg');
        calcWirkungsgrad75deg();
    }
    function deg90() {
        r = 6;
        document.getElementById('customRange2').value = '6';
        // document.getElementsByClassName('angleDir').style.rotate = "0deg";
        document.getElementById('angle-dir-fade').style.rotate = "0deg";
        angle.style.setProperty('rotate', '0deg');
        calcWirkungsgrad90deg();
    }


    function calcWirkungsgradDir() {
        do {
            if (i == 0) {
                wirkungsgrad = 0.87;
                break;
            }
            if (i == 1) {
                wirkungsgrad = -0.000109289*X**2-0.105513*X+95.8462;
                wirkungsgrad = wirkungsgrad / 100;
                break;
            }
            if (i == 2) {
                wirkungsgrad = -0.000220155*X**2-0.196302*X+101.458;
                wirkungsgrad = wirkungsgrad / 100;
                break;
            }
            if (i == 3) {
                wirkungsgrad = -0.000466985*X**2-0.22575*X+100.704;
                wirkungsgrad = wirkungsgrad / 100;
                break;
            }
            if (i == 4) {
                wirkungsgrad = -0.000648324*X**2-0.234068*X+95.5744;
                wirkungsgrad = wirkungsgrad / 100;
                break;
            }
            if (i == 5) {
                wirkungsgrad = -0.000881435*X**2-0.189817*X+85.3662;
                wirkungsgrad = wirkungsgrad / 100
                break;
            }
            if (i == 6) {
                wirkungsgrad = -0.000603142*X**2-0.197452*X+70.7315;
                wirkungsgrad = wirkungsgrad / 100;
                break;
            }
        } while (i < 6)
    }
    

    var i = 0;
    var wirkungsgrad = 0.87;
    function calcWirkungsgrad0deg() {
        i=0;
        wirkungsgrad;
        wirkungsgrad = 0.87;
    }
    function calcWirkungsgrad15deg() {
        i=1;
        wirkungsgrad;
        wirkungsgrad = -0.000109289*X**2-0.105513*X+95.8462;
        wirkungsgrad = wirkungsgrad / 100;
    }

    function calcWirkungsgrad30deg() {
        i=2;
        wirkungsgrad;
        wirkungsgrad = -0.000220155*X**2-0.196302*X+101.458;
        wirkungsgrad = wirkungsgrad / 100;
    }

    function calcWirkungsgrad45deg() {
        i=3;
        wirkungsgrad;
        wirkungsgrad = -0.000466985*X**2-0.22575*X+100.704;
        wirkungsgrad = wirkungsgrad / 100;
    }

    function calcWirkungsgrad60deg() {
        i=4;
        wirkungsgrad;
        wirkungsgrad = -0.000648324*X**2-0.234068*X+95.5744;
        wirkungsgrad = wirkungsgrad / 100;
    }

    function calcWirkungsgrad75deg() {
        i=5;
        wirkungsgrad;
        wirkungsgrad = -0.000881435*X**2-0.189817*X+85.3662;
        wirkungsgrad = wirkungsgrad / 100;
    }

    function calcWirkungsgrad90deg() {
        i=6;
        wirkungsgrad;
        wirkungsgrad = -0.000603142*X**2-0.197452*X+70.7315;
        wirkungsgrad = wirkungsgrad / 100;
    }

//Berechnung für erzeugter Strom
    var pvLeistung = 380;
    var leistungX = 331;
function calcErzeugt(modul, wirkungsgrad) {
    var pvLeistung = 380; //Photovoltaikanlage Leistung in Watt 
    leistungX = modul * (pvLeistung * wirkungsgrad);
    leistungX = Math.round(leistungX);
    if (leistungX > 380 && modul == 1) {
        leistungX = 380;
    }
    if (leistungX > 760 && modul == 2) {
        leistungX = 760;
    }
    if (leistungX > 1520 && modul == 4) {
        leistungX = 1520;
    }
    document.getElementById('erzeugt').innerHTML
    = leistungX + " kWh";
}

//Berechnung für Kosteneinsparung
var ersparnisX = 109;
function ersparnis4(modul, leistungX) {
    var y;
    y = leistungX / 4;
    ersparnisX = (y * 0.33);
    ersparnisX = ersparnisX * modul;
    ersparnisX = Math.round(ersparnisX);
    document.getElementById('kostenJahr').innerHTML
    = ersparnisX + "€"
}

function ersparnis2(modul, leistungX) {
    var y;
    y = leistungX / 2;
    ersparnisX = (y * 0.33);
    ersparnisX = ersparnisX * modul;
    ersparnisX = Math.round(ersparnisX);
    document.getElementById('kostenJahr').innerHTML
    = ersparnisX + "€"
}
function ersparnis1(modul, leistungX) {
    ersparnisX = (leistungX * 0.33);
    ersparnisX = ersparnisX * modul;
    ersparnisX = Math.round(ersparnisX);
    document.getElementById('kostenJahr').innerHTML
    = ersparnisX + "€"
}
function ersparnis(modul, leistungX) {
    if (modul == 1) {
        ersparnis1(modul, leistungX);
    }
    if (modul == 2) {
        ersparnis2(modul, leistungX);
    }
    if (modul == 4) {
        ersparnis4(modul, leistungX);
    }
}

function getVal1(newVal1) {
    if (newVal1 == 0) {
        Nord(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 1) {
        NordO(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 2) {
        Osten(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 3) {
        SüdO(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 4) {
        Süd(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 5) {
        SüdW(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 6) {
        W(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if (newVal1 == 7) {
        NordW(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
}

function getVal2(newVal2) {
    if (newVal2 == 0) {
        deg0(), calcErzeugt(modul, wirkungsgrad);
    }
    if(newVal2 == 1) {
        deg15(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if(newVal2 == 2) {
        deg30(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if(newVal2 == 3) {
        deg45(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if(newVal2 == 4) {
        deg60(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if(newVal2 == 5) {
        deg75(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
    if(newVal2 == 6) {
        deg90(), calcErzeugt(modul, wirkungsgrad), ersparnis(modul, leistungX);
    }
}

// funktion bei neigung 15 = 
// -0.000109289*X**2-0.105513*X+95.8462

// funktion bei neigung 30 = 
// -0.000220155*X**2-0.196302*X+101.458

// funktion bei neigung 45 = 
// -0.000466985*X**2-0.22575*X+100.704

// funktion bei neigung 60 = 
// -0.000648324*X**2-0.234068*X+95.5744

// funktion bei neigung 75 = 
// -0.000881435*X**2-0.189817*X+85.3662

// funktion bei neigung 90 = 
// -0.000603142*X**2-0.197452*X+70.7315











