//Funkcja potęgująca, przyjmująca dwa argumenty - podstawa i wykladnik.
//Działa tylko z liczbami całkowitymi; jeśli jako wykladnik przekażę ułamek
//dostaję niepoprawne wyniki - do poprawki

//W konsoli podaję też wynik za pomocą Math.pow() dla porównania


const arg1 = 3; //podstawa (ang. base)
const arg2 = 2; //wykladnik (ang. power or exponent or index)

function myPow(podstawa, wykladnik) {

    //Warunek i podwarunki w przypadku, gdy podstawa i wykladnik są liczbami
    if (!isNaN(podstawa) && !isNaN(wykladnik)){
        var result = 1;

        if (wykladnik >= 0) {
            for (var a = 1; a <= wykladnik; a++) {
                result *= podstawa;
            }
        }
        else if (wykladnik < 0) {
            //konwertuję ujemną wartość wykladnika na dodatnią, żeby skorzystać ze wzoru
            //np. 5 do potęgi -2 = 1 / 5 / 5
            wykladnik *= -1;
            for (var b = 1; b <= wykladnik; b++) {
                //rezult startuje od wartości 1 więc dzielę przez
                //podstawę tyle razy ile uruchomi się pętla
                result /= podstawa;
            }
        }
        //Warunek, gdy podstawa wynosi 0 a wykladnik mniejszy od 0,
        //wtedy mamy nieskończoność
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

myPow(arg1, arg2);

console.log("\n---Math.pow---");
var result2 = Math.pow(arg1, arg2);
console.log(result2);
console.log(typeof(result2));