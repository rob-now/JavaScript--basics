var myVar1 = Math.random() * 10 + 1;
var myVar2 = Math.random() * -10 - 1;

var resultMax = Math.max(myVar1, myVar2);
var resultMin = Math.min(myVar1, myVar2);

console.log("myVar1: " + myVar1);
console.log("myVar2: " + myVar2);
console.log("\nWiększa: " + resultMax);
console.log("Mniejsza: " + resultMin);

if (myVar1 > myVar2) {
    console.log("\nmyVar 1 jest większa od myVar2");
} else if (myVar2 > myVar1){
    console.log("\nmyVar2 jest większa od myVar1");
} else {
    console.log("\nLiczby są równe");
}

console.log("\nmyVar1 - zaokrąglij w dół (Math.floor): " + Math.floor(myVar1));
console.log("myVar2 - zaokrąglij w dół (Math.floor): " + Math.floor(myVar2));
console.log("myVar1 - zaokrąglij w górę (Math.ceil): " + Math.ceil(myVar1));
console.log("myVar2 - zaokrąglij w górę (Math.ceil): " + Math.ceil(myVar2));