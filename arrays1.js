console.log("\n---Zadanie 1---");

/*
Stwórz tablicę 10 losowych absolutnych liczb z przedziału 1-10.

Po utworzeniu tablicy wypisz w konsoli jej największy i najmniejszy element.
Uwaga! Nie stosuj do tego pętli for a metodę sort()
 */

const min = 1;
const max = 10;
var arr = [];

for (var i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    //console.log(arr);
}
console.log("arr:", arr);

arr.sort(function(a, b){
    return a - b;
});
console.log("arr sorted:", arr);
console.log("min:", arr[0]);
console.log("max:", arr[arr.length-1]);