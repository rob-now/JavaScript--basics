console.log("\n---Zadanie 3---");
/*
Napisz funkcję, która przyjmie dowolny tekst.
Funkcja niech zwraca tekst, który ma zmiksowaną wielkość liter np:
input -> Ala ma kota
output -> AlA Ma kOtA
 */

function mixedUpperCase (str2) {
    for (var b = 0; b < str2.length; b += 2) {
        console.log(str2.charAt(b-1));
        console.log(str2.charAt(b));

    }

}
mixedUpperCase("kotek ab");

/*
function mixedUpperCase (str2) {
    var arrInput = str2.split("");
    var arrOutput = [];
    console.log(arrInput);

    for (var b = 0; b < arrInput.length; b += 2) {
        arrOutput.push(arrInput[b-1]);
        arrOutput.push(arrInput[b].toUpperCase());

    }
    console.log(arrOutput);
    return arrOutput.join("");
}
console.log(mixedUpperCase("Kotek ab"));
//mixedUpperCase("Kotek biega po łące i łapie myszy");
 */