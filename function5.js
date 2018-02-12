console.log("\n---Zadanie 5---");
/*
Napisz funkcję, która przyjmuje 2 parametry:
1) imię - np: Ala
2) miesiąc - np: styczeń

Funkcja ma zwracać:
- jeżeli miesiąc to -> grudzień, styczeń, luty
"Ala jeździ na sankach"

- jeżeli miesiąc to -> marzec, kwiecień, maj
"Ala chodzi po kałużach"

- jeżeli miesiąc to -> czerwiec, lipiec, sierpień
"Ala się opala"

- jeżeli miesiąc to -> wrzesień, październik, listopad
"Ala zbiera liście"
 */

function ifMonth (name, month) {
    if (month === "grudzień" || month === "styczeń" || month === "luty") {
        return name + " jeździ na sankach.";
    } else if (month === "marzec" || month === "kwiecień" || month === "maj") {
        return name + " chodzi po kałużach.";
    } else if (month === "czerwiec" || month === "lipiec" || month === "sierpień") {
        return name + " się opala.";
    } else if (month === "wrzesień" || month === "październik" || month === "listopad") {
        return name + " zbiera liście.";
    }
}

console.log(ifMonth("Ala", "październik"));