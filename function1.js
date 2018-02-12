console.log("\n---Zadanie 1---");
/*
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst
Funkcja niech ZWRACA tekst "Liczba liter: ...." gdzie .... to liczba liter tekstu.
*/

function checkLength (str) {
    return "Liczba liter: " + str.length;
}
console.log(checkLength("Function that checks the length of a given string"));
