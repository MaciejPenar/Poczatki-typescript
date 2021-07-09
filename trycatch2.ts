function silnia2(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * silnia2(n - 1);
    }
}

let n = 5; // n = liczba

try {
    if (n < 0) {
    throw "liczba < 0, wpisz wieksza liczbe"
    }
    if (n >= 0) {
    console.log(silnia2(n))
    }
}
catch(e) {
    console.log(e);
}