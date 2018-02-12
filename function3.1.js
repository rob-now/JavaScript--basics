console.log("\n---Zadanie 3---");
/*
Napisz funkcję, która przyjmie dowolny tekst.
Funkcja niech zwraca tekst, który ma zmiksowaną wielkość liter np:
input -> Ala ma kota
output -> AlA Ma kOtA
 */

function mixedUpperCase (str) {
    var arrIn = str.split(""); // Tworzę tablicę z str
    var arrOut = [];
    var newStr;

    for (var i = 0; i < arrIn.length; i++) {
        // Sprawdzam czy index jest parzysty
        if (i % 2 === 0) {
            // Parzyste zmieniam na wielkie litery i dodaję do tablicy arrOut
            arrOut.push(arrIn[i].toUpperCase());
        } else {
            // Nieparzyste zmieniam na małe litery i dodaję do tablicy arrOut
            arrOut.push(arrIn[i].toLowerCase());
        }
    }
    newStr = arrOut.join(""); // Tworzę nowy string po zmianach
    return newStr;
}

console.log(mixedUpperCase("PROGRAMOWANIE jest przyJEMNE (0123 !@#$%^)"));