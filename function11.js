console.log("\n---Zadanie 11---");

/*
Napisz funkcję counter, która przy kolejnych wywołaniach będzie zwracać coraz większą wartość. Przy pierwszym wywołaniu powinna zwrócić 0, przy drugim 1, przy trzecim 2...
Nie używaj tutaj zmiennej globalnej.
 */

function counter () {
    var count = 0;
    return function () {
        console.log(count);
        count++;
    }
}

var c = counter();
c();
c();
c();
c();
c();