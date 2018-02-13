console.log("\n---Zadanie 0---");

/*
Podlicz wszystkie litery w tablicy words
 */

const words = ["kot", "świnka", "pies", "chomik", "wróbelek", "szczupakko"];

var count = 0;
for (var i = 0; i < words.length; i++) {
    count += words[i].length;
}

console.log("\nNumber of letters:", count);