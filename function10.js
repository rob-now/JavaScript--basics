console.log("\n---Zadanie 10---");

/*
Napisz funkcję która przyjmie 2 argumenty:
- tekst
- liczbę n

Funkcja niech zwraca napis będący zduplikowany n razy:
input : tekst: "ala", n: 4
output: "alaalaalaala"

Funkcja niech sprawdza czy oba argumenty są podane.
Jeżeli parametr tekst nie jest podany lub nie jest tekstem, funkcja powinna go ustawić na pusty string "".
Jeżeli parametr n nie jest podany, funkcja powinna ustawić go na 2.

Przykłady użycia:

input : tekst: "kot", n: 2
output: "kotkot"

input : tekst: "x", n: nie podany
output: "xx"

input : tekst: nie podany, n: 2
output: ""
 */

function repeatStr(str, times) {
    if (typeof(str) !== "string") {
        str = "";
    }

    if (typeof(times) !== "number") {
        times = 2;
    }

    return str.repeat(times);
}

console.log(repeatStr("abc_", 4));