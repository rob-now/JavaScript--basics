function myMax() {
    var arr = Array.from(arguments);
    var notNumbers = [];
    var result = 0;
    console.log("Input: " + arr);

    for (var i = 0; i < arr.length; i++) {
        //Warunek sprawdzający czy wartość jest liczbą
        if (typeof(arr[i]) !== "number") {
            //Trzymam wartości nie będące liczbami w osobnej zmiennej
            notNumbers.push(arr[i]);
            //Usuwam z arr wartości nie będące liczbami
            arr.splice(i, 1);
            //Cofam się w pętli o 1, gdy 1 element z tablicy zostanie usunięty
            i--;
        }

        else {
            result = (result > arr[i]) ? result : arr[i];
        }

    }
    console.log("\nNot numbers, correct them, please: " + notNumbers);
    console.log("\nMaximum number is: " + result);
}

myMax (2,"a",8,1,2,0.5,"b",9,3,"c",10,9,4.58765,6,"5a");