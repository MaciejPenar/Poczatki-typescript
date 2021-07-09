let dzielnia = 1;
let dzielnik = 1;

try {
    if (dzielnik === 0 ) {
        throw "nie dziel przez zero"
    }
    if (dzielnik != 0){
    let wynik = dzielnia / dzielnik;
    console.log(wynik);
    }
}
catch(e) {
    console.log(e);
}