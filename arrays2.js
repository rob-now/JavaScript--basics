console.log("\n---Zadanie 2---");

/*
Masz tablicę użytkowników:
const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]
Włącz/wyłącz kolorowanie składni
Wypisz w konsoli użytkowników, którzy są pełnoletni.
 */

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
];

var tabUsersAdult = tabUsers.filter(function(e){
    return e.age >= 18;
});
console.log("filter method:\n", tabUsersAdult);


var tabUsersAdult2 = tabUsers.map(function(e){
    if (e.age >= 18) {
        return e;
    }
}).filter(Boolean);
console.log("\nmap+filter method:\n", tabUsersAdult2);
