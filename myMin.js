//Funkcja sprawdzająca, która liczba z podanego zakresu jest najmniejsza.

//W konsoli podaję też wynik za pomocą Math.min() dla porównania

function myMin() {
    var arr = Array.from(arguments);
    var result = arr[0];
    console.log("Input: " + arr + "\n\n---myMin---");

    for (var i = 0; i < arr.length; i++) {
        //Warunek w przypadku, gdy wartość w tablicy to NaN;
        //przerywam wykonywanie funkcji
        if (isNaN(arr[i])) {
            console.log("\nFinal result: " + NaN);
            return NaN;

        }
        else {
            result = (result < arr[i]) ? result : arr[i];
        }

        console.log("Loop " + (i+1) + "; result: " + result);
    }
    console.log("\nFinal result: " + result);

}

myMin(5,-0,-2,10,-6,8,"-11",80,99,-0.5,9);

console.log("\n---Math.min:---\n" + Math.min(5,-0,-2,10,-6,8,"-11",80,99,-0.5,9));


//2,"a",8,-1,2,0.5,"b",-9,3,"c",10,9,4.58765,6,"5a"
//-0,-2,10,-6,8,"-11",80,99,-0.5,9
//-100,-10,0,8,-8,-2,5,10,-5,"15",11,23,7,-65,0
