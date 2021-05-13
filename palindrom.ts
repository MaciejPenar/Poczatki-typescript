const wyrazy: Array<string> = ['test', 'kajak', 'oko', 'wyraz'];

for (let i=0; i<wyrazy.length; i++) 
{
    const wyraz: string=wyrazy[i]
    palindrom(wyrazy[i]);

function palindrom(odwrotnywyraz: string) 
{
    if (odwrotnywyraz.split('').reverse().join('') === wyrazy[i])
    {
        console.log(' ', odwrotnywyraz)
    }
}

}
// https://bedekodzic.pl/algorytmy-podstawy/  = Palindrom
// reverse - odwraca wszystkie elementy tablicy
// join - laczy odwrocona tablice do stringa