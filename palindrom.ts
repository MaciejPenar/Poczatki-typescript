function palindrom(odwrotnywyraz: string) {
    if (odwrotnywyraz.split('').reverse().join('') === odwrotnywyraz) {
        console.log(`${odwrotnywyraz} to palindrom`);
    } else {
        console.log(`${odwrotnywyraz} to nie palindrom`);
    }
}

const wyrazy: Array<string> = ['test', 'kajak', 'oko', 'wyraz'];

for (let i = 0; i < wyrazy.length; i++) {
    palindrom(wyrazy[i]);
}
// https://bedekodzic.pl/algorytmy-podstawy/  = Palindrom
// reverse - odwraca wszystkie elementy tablicy
// join - laczy odwrocona tablice do stringa