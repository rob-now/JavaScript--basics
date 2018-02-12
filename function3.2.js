console.log("\n---Zadanie 3---");
/*
Napisz funkcję, która przyjmie dowolny tekst.
Funkcja niech zwraca tekst, który ma zmiksowaną wielkość liter np:
input -> Ala ma kota
output -> AlA Ma kOtA
 */

function mixedUpperCase (str) {
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        // Sprawdzam czy index jest parzysty
        if (i % 2 === 0) {
            // Parzyste zmieniam na wielkie litery i dodaję do nowego stringa newStr
            newStr += str.charAt(i).toUpperCase();
        } else {
            // Nieparzyste zmieniam na małe litery i dodaję do nowego stringa newStr
            newStr += str.charAt(i).toLowerCase();
        }
    }
    return newStr;
}

console.log(mixedUpperCase("DruGI SPOSÓb ROZWIązania zadania (0123 !@#$#)"));