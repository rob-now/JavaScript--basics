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

var num = 7; //liczba
var str = 'Some simple string'; //prosty łańcuch znaków
var boolT = true; //dozwolone tylko true lub false
var boolF = false; //dozwolone tylko true lub false
var und; //bez przypisania wartości zwróci undefined
var nul = null; //null w JavaScript to objekt; jest to błąd w JS
var obj = {
    wheels: 4,
    seats: 5
}; //objekt
var arr = [1, 2, 3];
var arr2 = [1, 2, 3, {
    wheels: 4,
    seats: 5
}]; //tablica z zagnieżdżonym objektem
var regex = /[A-Z]/; //Regular Expression

console.log('\n---Types of variables---');
console.log('(num) type is: ' + typeof(num));
console.log('(str) type is: ' + typeof(str));
console.log('(bool) type is: ' + typeof(boolT));
console.log('(bool) type is: ' + typeof(boolF));
console.log('(und) type is: ' + typeof(und));
console.log('(nul) type is: ' + typeof(nul));
console.log('(obj) type is: ' + typeof(obj));
console.log('(arr) type is: ' + typeof(arr));
console.log('(arr2) type is: ' + typeof(arr2));
console.log('(regex) type is: ' + typeof(regex));

console.log('\n---(+) operator on different types---');
console.log('---NUMBER + something---');
console.log('num + num =', num + num);
console.log('num + str =', num + str);
console.log('num + boolT =', num + boolT);
console.log('num + boolF =', num + boolF);
console.log('num + und =', num + und);
console.log('num + nul =', num + nul);
console.log('num + obj =', num + obj);
console.log('num + arr =', num + arr);
console.log('num + arr2 =', num + arr2);
console.log('num + regex =', num + regex);
console.log('---STRING + something---');
console.log('str + str =', str + str);
console.log('str + boolT =', str + boolT);
console.log('str + boolF =', str + boolF);
console.log('str + und =', str + und);
console.log('str + nul =', str + nul);
console.log('str + obj =', str + obj);
console.log('str + arr =', str + arr);
console.log('str + arr2 =', str + arr2);
console.log('str + und =', str + und);
console.log('str + regex =', str + regex);
console.log('---BOOLEAN + something---');
console.log('boolT + boolT =', boolT + boolT);
console.log('boolF + boolF =', boolF + boolF);
console.log('boolT + boolF =', boolT + boolF);
console.log('boolT + und =', boolT + und);
console.log('boolF + und =', boolF + und);
console.log('boolT + nul =', boolT + nul);
console.log('boolF + nul =', boolF + nul);
console.log('boolT + obj =', boolT + obj);
console.log('boolF + obj =', boolF + obj);
console.log('boolT + arr =', boolT + arr);
console.log('boolF + arr =', boolF + arr);
console.log('boolT + arr2 =', boolT + arr2);
console.log('boolF + arr2 =', boolF + arr2);
console.log('boolT + regex =', boolT + regex);
console.log('boolF + regex =', boolF + regex);
console.log('---UNDEFINED + something---');
console.log('und + und =', und + und);
console.log('und + nul =', und + nul);
console.log('und + obj =', und + obj);
console.log('und + arr =', und + arr);
console.log('und + arr2 =', und + arr2);
console.log('und + und =', und + und);
console.log('und + regex =', und + regex);
console.log('---NULL + something---');
console.log('nul + nul =', nul + nul);
console.log('nul + obj =', nul + obj);
console.log('nul + arr =', nul + arr);
console.log('nul + arr2 =', nul + arr2);
console.log('nul + regex =', nul + regex);
console.log('---OBJECT + something---');
console.log('obj + obj =', obj + obj);
console.log('obj + arr =', obj + arr);
console.log('obj + arr2 =', obj + arr2);
console.log('obj + regex =', obj + regex);
console.log('---ARRAY + something---');
console.log('arr + arr =', arr + arr);
console.log('arr + arr2 =', arr + arr2);
console.log('arr + regex =', arr + regex);
console.log('---REGULAR EXPRESSION + something---');
console.log('regex + regex =', regex + regex);
console.log('regex + arr =', regex + arr);
console.log('regex + arr2 =', regex + arr2);

console.log('\n---(-) operator on different types---');
console.log('---NUMBER - something---');
console.log('num - num =', num - num);
console.log('num - str =', num - str);
console.log('num - boolT =', num - boolT);
console.log('num - boolF =', num - boolF);
console.log('num - und =', num - und);
console.log('num - nul =', num - nul);
console.log('num - obj =', num - obj);
console.log('num - arr =', num - arr);
console.log('num - arr2 =', num - arr2);
console.log('num - regex =', num - regex);
console.log('---STRING - something---');
console.log('str - str =', str - str);
console.log('str - boolT =', str - boolT);
console.log('str - boolF =', str - boolF);
console.log('str - und =', str - und);
console.log('str - nul =', str - nul);
console.log('str - obj =', str - obj);
console.log('str - arr =', str - arr);
console.log('str - arr2 =', str - arr2);
console.log('str - und =', str - und);
console.log('str - regex =', str - regex);
console.log('---BOOLEAN - something---');
console.log('boolT - boolT =', boolT - boolT);
console.log('boolF - boolF =', boolF - boolF);
console.log('boolT - boolF =', boolT - boolF);
console.log('boolT - und =', boolT - und);
console.log('boolF - und =', boolF - und);
console.log('boolT - nul =', boolT - nul);
console.log('boolF - nul =', boolF - nul);
console.log('boolT - obj =', boolT - obj);
console.log('boolF - obj =', boolF - obj);
console.log('boolT - arr =', boolT - arr);
console.log('boolF - arr =', boolF - arr);
console.log('boolT - arr2 =', boolT - arr2);
console.log('boolF - arr2 =', boolF - arr2);
console.log('boolT - regex =', boolT - regex);
console.log('boolF - regex =', boolF - regex);
console.log('---UNDEFINED - something---');
console.log('und - und =', und - und);
console.log('und - nul =', und - nul);
console.log('und - obj =', und - obj);
console.log('und - arr =', und - arr);
console.log('und - arr2 =', und - arr2);
console.log('und - und =', und - und);
console.log('und - regex =', und - regex);
console.log('---NULL - something---');
console.log('nul - nul =', nul - nul);
console.log('nul - obj =', nul - obj);
console.log('nul - arr =', nul - arr);
console.log('nul - arr2 =', nul - arr2);
console.log('nul - regex =', nul - regex);
console.log('---OBJECT - something---');
console.log('obj - obj =', obj - obj);
console.log('obj - arr =', obj - arr);
console.log('obj - arr2 =', obj - arr2);
console.log('obj - regex =', obj - regex);
console.log('---ARRAY - something---');
console.log('arr - arr =', arr - arr);
console.log('arr - arr2 =', arr - arr2);
console.log('arr - regex =', arr - regex);
console.log('---REGULAR EXPRESSION - something---');
console.log('regex - regex =', regex - regex);
console.log('regex - arr =', regex - arr);
console.log('regex - arr2 =', regex - arr2);

console.log('\n---(*) operator on different types---');
console.log('---NUMBER * something---');
console.log('num * num =', num * num);
console.log('num * str =', num * str);
console.log('num * boolT =', num * boolT);
console.log('num * boolF =', num * boolF);
console.log('num * und =', num * und);
console.log('num * nul =', num * nul);
console.log('num * obj =', num * obj);
console.log('num * arr =', num * arr);
console.log('num * arr2 =', num * arr2);
console.log('num * regex =', num * regex);
console.log('---STRING * something---');
console.log('str * str =', str * str);
console.log('str * boolT =', str * boolT);
console.log('str * boolF =', str * boolF);
console.log('str * und =', str * und);
console.log('str * nul =', str * nul);
console.log('str * obj =', str * obj);
console.log('str * arr =', str * arr);
console.log('str * arr2 =', str * arr2);
console.log('str * und =', str * und);
console.log('str * regex =', str * regex);
console.log('---BOOLEAN * something---');
console.log('boolT * boolT =', boolT * boolT);
console.log('boolF * boolF =', boolF * boolF);
console.log('boolT * boolF =', boolT * boolF);
console.log('boolT * und =', boolT * und);
console.log('boolF * und =', boolF * und);
console.log('boolT * nul =', boolT * nul);
console.log('boolF * nul =', boolF * nul);
console.log('boolT * obj =', boolT * obj);
console.log('boolF * obj =', boolF * obj);
console.log('boolT * arr =', boolT * arr);
console.log('boolF * arr =', boolF * arr);
console.log('boolT * arr2 =', boolT * arr2);
console.log('boolF * arr2 =', boolF * arr2);
console.log('boolT * regex =', boolT * regex);
console.log('boolF * regex =', boolF * regex);
console.log('---UNDEFINED * something---');
console.log('und * und =', und * und);
console.log('und * nul =', und * nul);
console.log('und * obj =', und * obj);
console.log('und * arr =', und * arr);
console.log('und * arr2 =', und * arr2);
console.log('und * und =', und * und);
console.log('und * regex =', und * regex);
console.log('---NULL * something---');
console.log('nul * nul =', nul * nul);
console.log('nul * obj =', nul * obj);
console.log('nul * arr =', nul * arr);
console.log('nul * arr2 =', nul * arr2);
console.log('nul * regex =', nul * regex);
console.log('---OBJECT * something---');
console.log('obj * obj =', obj * obj);
console.log('obj * arr =', obj * arr);
console.log('obj * arr2 =', obj * arr2);
console.log('obj * regex =', obj * regex);
console.log('---ARRAY * something---');
console.log('arr * arr =', arr * arr);
console.log('arr * arr2 =', arr * arr2);
console.log('arr * regex =', arr * regex);
console.log('---REGULAR EXPRESSION * something---');
console.log('regex * regex =', regex * regex);
console.log('regex * arr =', regex * arr);
console.log('regex * arr2 =', regex * arr2);

console.log('\n---(/) operator on different types---');
console.log('---NUMBER / something---');
console.log('num / num =', num / num);
console.log('num / str =', num / str);
console.log('num / boolT =', num / boolT);
console.log('num / boolF =', num / boolF);
console.log('num / und =', num / und);
console.log('num / nul =', num / nul);
console.log('num / obj =', num / obj);
console.log('num / arr =', num / arr);
console.log('num / arr2 =', num / arr2);
console.log('num / regex =', num / regex);
console.log('---STRING / something---');
console.log('str / str =', str / str);
console.log('str / boolT =', str / boolT);
console.log('str / boolF =', str / boolF);
console.log('str / und =', str / und);
console.log('str / nul =', str / nul);
console.log('str / obj =', str / obj);
console.log('str / arr =', str / arr);
console.log('str / arr2 =', str / arr2);
console.log('str / und =', str / und);
console.log('str / regex =', str / regex);
console.log('---BOOLEAN / something---');
console.log('boolT / boolT =', boolT / boolT);
console.log('boolF / boolF =', boolF / boolF);
console.log('boolT / boolF =', boolT / boolF);
console.log('boolT / und =', boolT / und);
console.log('boolF / und =', boolF / und);
console.log('boolT / nul =', boolT / nul);
console.log('boolF / nul =', boolF / nul);
console.log('boolT / obj =', boolT / obj);
console.log('boolF / obj =', boolF / obj);
console.log('boolT / arr =', boolT / arr);
console.log('boolF / arr =', boolF / arr);
console.log('boolT / arr2 =', boolT / arr2);
console.log('boolF / arr2 =', boolF / arr2);
console.log('boolT / regex =', boolT / regex);
console.log('boolF / regex =', boolF / regex);
console.log('---UNDEFINED / something---');
console.log('und / und =', und / und);
console.log('und / nul =', und / nul);
console.log('und / obj =', und / obj);
console.log('und / arr =', und / arr);
console.log('und / arr2 =', und / arr2);
console.log('und / und =', und / und);
console.log('und / regex =', und / regex);
console.log('---NULL / something---');
console.log('nul / nul =', nul / nul);
console.log('nul / obj =', nul / obj);
console.log('nul / arr =', nul / arr);
console.log('nul / arr2 =', nul / arr2);
console.log('nul / regex =', nul / regex);
console.log('---OBJECT / something---');
console.log('obj / obj =', obj / obj);
console.log('obj / arr =', obj / arr);
console.log('obj / arr2 =', obj / arr2);
console.log('obj / regex =', obj / regex);
console.log('---ARRAY / something---');
console.log('arr / arr =', arr / arr);
console.log('arr / arr2 =', arr / arr2);
console.log('arr / regex =', arr / regex);
console.log('---REGULAR EXPRESSION / something---');
console.log('regex / regex =', regex / regex);
console.log('regex / arr =', regex / arr);
console.log('regex / arr2 =', regex / arr2);

console.log('\n---(%) operator on different types---');
console.log('---NUMBER % something---');
console.log('num % num =', num % num);
console.log('num % str =', num % str);
console.log('num % boolT =', num % boolT);
console.log('num % boolF =', num % boolF);
console.log('num % und =', num % und);
console.log('num % nul =', num % nul);
console.log('num % obj =', num % obj);
console.log('num % arr =', num % arr);
console.log('num % arr2 =', num % arr2);
console.log('num % regex =', num % regex);
console.log('---STRING % something---');
console.log('str % str =', str % str);
console.log('str % boolT =', str % boolT);
console.log('str % boolF =', str % boolF);
console.log('str % und =', str % und);
console.log('str % nul =', str % nul);
console.log('str % obj =', str % obj);
console.log('str % arr =', str % arr);
console.log('str % arr2 =', str % arr2);
console.log('str % und =', str % und);
console.log('str % regex =', str % regex);
console.log('---BOOLEAN % something---');
console.log('boolT % boolT =', boolT % boolT);
console.log('boolF % boolF =', boolF % boolF);
console.log('boolT % boolF =', boolT % boolF);
console.log('boolT % und =', boolT % und);
console.log('boolF % und =', boolF % und);
console.log('boolT % nul =', boolT % nul);
console.log('boolF % nul =', boolF % nul);
console.log('boolT % obj =', boolT % obj);
console.log('boolF % obj =', boolF % obj);
console.log('boolT % arr =', boolT % arr);
console.log('boolF % arr =', boolF % arr);
console.log('boolT % arr2 =', boolT % arr2);
console.log('boolF % arr2 =', boolF % arr2);
console.log('boolT % regex =', boolT % regex);
console.log('boolF % regex =', boolF % regex);
console.log('---UNDEFINED % something---');
console.log('und % und =', und % und);
console.log('und % nul =', und % nul);
console.log('und % obj =', und % obj);
console.log('und % arr =', und % arr);
console.log('und % arr2 =', und % arr2);
console.log('und % und =', und % und);
console.log('und % regex =', und % regex);
console.log('---NULL % something---');
console.log('nul % nul =', nul % nul);
console.log('nul % obj =', nul % obj);
console.log('nul % arr =', nul % arr);
console.log('nul % arr2 =', nul % arr2);
console.log('nul % regex =', nul % regex);
console.log('---OBJECT % something---');
console.log('obj % obj =', obj % obj);
console.log('obj % arr =', obj % arr);
console.log('obj % arr2 =', obj % arr2);
console.log('obj % regex =', obj % regex);
console.log('---ARRAY % something---');
console.log('arr % arr =', arr % arr);
console.log('arr % arr2 =', arr % arr2);
console.log('arr % regex =', arr % regex);
console.log('---REGULAR EXPRESSION % something---');
console.log('regex % regex =', regex % regex);
console.log('regex % arr =', regex % arr);
console.log('regex % arr2 =', regex % arr2);

console.log('\n---ADDITION BY 30px---');
const width = "20px";
var incrementBy = 30;
var newWidth = parseInt(width, 10) + incrementBy + "px";
console.log(width);
console.log(newWidth);

console.log('\n---CONDITION IF VARIABLE DOESN\'T EXIST---');
if (typeof age === 'undefined') {
    var age = 18;
    console.log(age);
}

