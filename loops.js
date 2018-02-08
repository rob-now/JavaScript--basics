console.log("---ZADANIE 1---");
/*
Za pomocą pętli wypisz w konsoli tekst
******
Gwiazdki powinny być w jednej linii.
 */

var str = "";

for (var x = 0; x < 6; x++) {
    str += "*";
}

console.log(str);


console.log("\n---ZADANIE 2---");
/*
Za pomocą pętli wypisz w konsoli tekst
12345678910
 */

var str2 = "";

for (var y = 1; y <= 10; y++) {
    str2 += y;
}
console.log(str2);


console.log("\n---ZADANIE 3---");
/*
Za pomocą pętli w pętli wypisz w konsoli tekst:
******
******
******
******
 */

var str3 = "";
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 6; j++) {
        str3 += "*";
    }
    str3 += "\n";
}
console.log(str3);


console.log("\n---ZADANIE 4---");

/*
Za pomocą pętli (nie musi być pojedyncza) wypisz w konsoli tekst:
╔═══════════════════════╗
║  To jest jakiś tekst  ║
╚═══════════════════════╝
 */

var text = "Jakiś tekst";
//Do długości tekstu dodaję 6, czyli 4 spacje i 2 boczne ramki okalające tekst
var textLength = text.length + 6;
var str4 = "";

//Pierwsza pętla - wiersze
for (var k = 0; k < 3; k++) {
    //Druga pętla - kolumny (znaki w wierszu)
    for (var l = 0; l < textLength; l++) {

        //Warunek dla pierwszego wiersza
        if (k === 0) {
            switch (l) {
                case 0:
                    str4 += "╔";
                    break;
                //-1, ponieważ pętla jest indeksowana od 0
                case textLength - 1:
                    str4 += "╗";
                    break;
                default:
                    str4 += "═";
            }
        }

        //Warunek dla drugiego wiersza
        if (k === 1) {
            switch (l) {
                case 0:
                case textLength - 1:
                    str4 += "║";
                    break;
                case 1:
                case 2:
                case textLength - 2:
                case textLength - 3:
                    str4 += " ";
                    break;
                case 3:
                    str4 += text;
                    break;
            }
        }

        //Warunek dla trzeciego wiersza
        if (k === 2) {
            switch (l) {
                case 0:
                    str4 += "╚";
                    break;
                case textLength - 1:
                    str4 += "╝";
                    break;
                default:
                    str4 += "═";
            }
        }


    }
    str4 += "\n";
}
console.log(str4);


console.log("\n---ZADANIE 4 (alt)---");

var text2 = "Inny tekst";
//do długości tekstu dodajemy 4 spacje oddzielające go od bocznych krawędzi
var text2Length = text2.length + 4;
var str5 = "";

//górny wiersz
str5 += "╔";

for (var m = 0; m < text2Length; m++) {
    str5 += "═";
}
str5 += "╗\n";

//środek
str5 += "║  " + text2 + "  ║\n";

//dół
str5 += "╚";

for (var n = 0; n < text2Length; n++) {
    str5 += "═";
}
str5 += "╝\n";

console.log(str5);


