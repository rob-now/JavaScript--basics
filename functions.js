/*
Dla dociekliwych. Może pokusisz się o napisanie własnych alternatyw dla Math.abs(), Math.pow() i Math.max()? Funkcje te przykładowo mogły by się nazywać myAbs, myPow i myMax. Wykorzystać tutaj by trzeba pewnie jakieś if, pętlę i proste wyliczenia. Dodatkowo przy myMax przydało by się obsłużenie obiektu arguments, tak by można było podać więcej argumentów.
 */

const first = undefined;
const second = undefined;

function myPow(podstawa, wykladnik) {

    if (!isNaN(podstawa) && !isNaN(wykladnik)){
        var result = 1;

        if (wykladnik >= 0) {
            for (var a = 1; a <= wykladnik; a++) {
                result *= podstawa;
            }
        }
        else if (wykladnik < 0) {
            wykladnik *= -1;
            for (var b = 1; b <= wykladnik; b++) {
                result /= podstawa;
            }
        }
        else if (podstawa === 0 && wykladnik < 0) {
            result = "infinity";
        }
    }
    else {
        result = NaN;
    }
    console.log("\n---myPow()---\n" + result);
    console.log(typeof(result));
}

myPow(first, second);

console.log("\n---Math.pow---");
var result2 = Math.pow(first, second);
console.log(result2);
console.log(typeof(result2));

