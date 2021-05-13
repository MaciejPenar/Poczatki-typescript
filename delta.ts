const liczba: number[] = [7,2,-4];
const delta = (liczba[1]*liczba[1])-(4*liczba[0]*liczba[2]);
console.log("Delta wynosi: "  + delta);

if (delta == 0) {
    const x0 = -liczba[1]/2*liczba[0];
    console.log("Delta ma jedno miejsce zerowe: " + x0)
}

if (delta > 0) {
    const x1 = (-liczba[1]-Math.sqrt(delta))/(2*liczba[0])
    const x2 = (-liczba[1]+Math.sqrt(delta))/(2*liczba[0])
    console.log("x1 = " + x1 )
    console.log("x2 = " + x2 )
}

if (delta < 0 ) {
    console.log("brak miejsc zerowych");
}