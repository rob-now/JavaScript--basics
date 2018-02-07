console.log("---CHANGING CONST NOT POSSIBLE---");
const CVAR1 = 4;
const CVAR2 = 7;

//CVAR1 = 2; //Błąd, ponieważ do stałej nie można przydzielić innej watości

console.log("\n---CALLING VARIABLE BEFORE ITS DECLARATION (HOISTING)---");

console.log(text);
var text = "Przykładowy tekst";

/*
---Kod---
console.log(text);
var text = "Przykładowy tekst";

---Zostaje zmieniony przez JS na:---
var text; //JS dodaje deklarację zmiennej przed jej wywołaniem automatycznie (hoisting),
            aby uniknąć błędu, ale nie nadaje wartości zmiennej, więc otrzymujemy "undefined"
            Hoisting działa tylko przy "var", nie działa dla "let" i "const"
console.log(text);
var text = "Przykładowy tekst";
*/

console.log("\n---OPERATORS AND VARIABLES---");
var var1 = 20;
var var2 = 33;
var var3 = "21";

var1 ++;
var2 ++;

console.log("var1 = " + var1, "var2 = " + var2);
console.log("sum of var1 and var2 is:", var1 + " + " + var2 + " = " + (var1 + var2));

console.log("\n---OPERATORS AND VARIABLES - EQUALITY AND STRICT-EQUALITY---");
console.log("---STRICT-EQUALITY (===):---");
if (var1 === var3){
    console.log("Zmienne var1 i var3 są takie same.");
} else {
    console.log("Zmienne var1 i var3 nie są takie same.")
}
console.log("---EQUALITY (LOOSE-EQUALITY) (==):---");
if (var1 == var3){
    console.log("Zmienne var1 i var3 są takie same.");
} else {
    console.log("Zmienne var1 i var3 nie są takie same.")
}

console.log("\n---OPERATORS AND VARIABLES - ADDING NEW LINES OF TEXT TO VARIABLE---");

var text2 = "Przykładowy tekst";

text2 += ". Długi tekst, który dodałem do zmiennej.";
text2 += " Kolejna linijka tekstu dodana do zmiennej."

console.log(text2);