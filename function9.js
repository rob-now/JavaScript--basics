console.log("\n---Zadanie 9---");

/*
Napisz 2 funkcje. Kazda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane duzymi literami.

Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkośc liter.
W przypadku drugiej funkcji do zamiany imion skorzystaj z funkcji z zadania 3.

input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
 */

const tab = ["ania", "marcin", "bartek", "piotr", "janek"];

// Funkcja 1
function capitalize(tab) {
    var arrOut = tab.slice();
    for (var k = 0; k < arrOut.length; k++) {
        arrOut[k] = arrOut[k].charAt(0).toUpperCase() + arrOut[k].slice(1);
    }
    return arrOut;
}

console.log("Funkcja 1:", capitalize(tab));


// Funkcja 2a
function mixedUpperCase2a(tab) {
    var arrOut = [];
    var newStr = "";

    // Pierwsza pętla do iteracji przez wartości tablicy
    for (var i = 0; i < tab.length; i++) {

        // Druga pętla do iteracji wewnątrz poszczególnych wartości tablicy
        for (var j = 0; j < tab[i].length; j++) {
            // Sprawdzam czy index jest parzysty
            if (j % 2 === 0) {
                // Parzyste zmieniam na wielkie litery i dodaję do stringa newStr
                newStr += tab[i][j].toUpperCase();
            } else {
                // Nieparzyste zmieniam na małe litery i dodaję do stringa newStr
                newStr += tab[i][j].toLowerCase();
            }
        }

        // Wrzucam newStr na koniec arrOut zaraz po wyjściu z wewnętrznej pętli
        arrOut.push(newStr);
        // Na końcu zewnętrznej pętli ustawiam newStr na pustą zawartość
        newStr = "";
    }
    return arrOut;
}

console.log("Funkcja 2a:", mixedUpperCase2a(tab));


// Funkcja 2b

// Funkcja z zadania 3.1
function mixedUpperCase(str) {
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

// Funkcja miksująca wielkość liter w tablicy wykorzystująca funkcję z zadania 3.1
function mixedNames(tab) {
    var arrOut = tab.slice();
    for (var j = 0; j < arrOut.length; j++) {
        arrOut[j] = mixedUpperCase(arrOut[j]);
    }
    return arrOut;
}

console.log("Funkcja 2b:", mixedNames(tab));