console.log("\n---Zadanie 2---");
/*
Napisz funkcję, która zsumuje przekazaną do niej tablicę i zwróci wynik (sumę)
 */

const array = [1,2,3,10,20,-1,0];
function sum (arr) {
    var result = 0;
    for (var a = 0; a < arr.length; a++) {
        result += arr[a];
    }
    return result;
}
console.log("Suma: " + sum(array));
