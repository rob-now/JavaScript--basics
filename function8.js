console.log("\n---Zadanie 8---");

/*
Wygeneruj pod zmienną "tab" 10-elementową tablicę z randomowymi liczbami.

Napisz funkcję getMinFromTab, do której przekażesz powyższą tablicę.

Funkcja powinna zwrócić najmniejszą liczbę z tablicy.

Za pomocą console.log wypisz wartość zwróconą przez funkcję.
 */

var tab = [];
const minVal = 5; // Minimalna waetość w tablicy
const maxVal = 100; // Maksymalna wartość w tablicy
for (var i = 0; i < 10; i++) {
    // Generuję losową tablicę z wartościami liczbowymi
    // z przedziału od minVal do maxVal (włącznie)
    tab.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
}
console.log("Wygenerowana tablica:", tab);

function getMinFromTab (tab) {
    // Sortuję tablicę od najmniejszej do największej liczby
    tab.sort(function (a, b) {
        return a - b;
    });
    console.log("Posortowana tablica: ", tab);
    // Wycinam pierwszą wartość z tablicy i zwracam ją
    return tab.shift();
}

console.log("Minimalna wartość to:", getMinFromTab(tab));