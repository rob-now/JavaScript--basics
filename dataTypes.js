/*
Primitive types
number
string
boolean
undefined
null
symbol

Relative types
object
    array
    regexp
 */

var num = 44; //liczba
var str = 'Some simple string'; //prosty łańcuch znaków
var bool = true; //dozwolone tylko true lub false
var und; //bez przypisania wartości zwróci undefined
var nul = null; //null w JavaScript to objekt; jest to błąd w JS
var obj1 = {
    wheels: 4,
    seats: 5
}; //objekt
var arr = [1,2,3];
var arr2 = [1,2,3, {
    wheels: 4,
    seats: 5
}]; //tablica z zagnieżdżonym objektem
var regex = /[A-Z]/; //Regular Expression


console.log('(num) type is: ' + typeof(num));
console.log('(str) type is: ' + typeof(str));
console.log('(bool) type is: ' + typeof(bool));
console.log('(und) type is: ' + typeof(und));
console.log('(nul) type is: ' + typeof(nul));
console.log('(obj1) type is: ' + typeof(obj1));
console.log('(arr) type is: ' + typeof(arr));
console.log('(arr2) type is: ' + typeof(arr2));
console.log('(regex) type is: ' + typeof(regex));