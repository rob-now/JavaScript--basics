console.log("\n---Zadanie 4---");
/*
Napisz funkcję, która będzie wymagać 2 atrybutów.
Funkcja niech sprawdza, czy oba atrybuty są numerami.
Funkcja ma zwracać iloczyn (*) obu liczb.
Jeżeli któryś z atrybutów nie jest liczbą, funkcja niech zwraca false.
NIE Wywołuj na razie tej funkcji
 */

function multiply(val1, val2) {
    if (typeof(val1) !== "number" || typeof(val2) !== "number") {
        return false;
    } else {
        return val1 * val2;
    }
}

console.log(multiply(4,3));