console.log("\n---Zadanie 6---");

/*
Wywołaj funkcje z zadania 5 przekazując do niej zmienne:
- Twoje imię
- dowolny miesiąc

Dopisz w tej funkcji zabezpieczenie, które pozwoli wpisać miesiąc małymi lub dużymi literami.
Jeżeli miesiąc jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"
 */

function ifMonth(name, month) {
    //console.log(typeof(month));
    if (typeof(month) === "string") {
        
        month = month.toLowerCase();
        
        if (month === "grudzień" || month === "styczeń" || month === "luty") {
            return name + " jeździ na sankach.";
        } else if (month === "marzec" || month === "kwiecień" || month === "maj") {
            return name + " chodzi po kałużach.";
        } else if (month === "czerwiec" || month === "lipiec" || month === "sierpień") {
            return name + " się opala.";
        } else if (month === "wrzesień" || month === "październik" || month === "listopad") {
            return name + " zbiera liście.";
        } else {
            return name + " uczy się JS. (month doesn't match)";
        }
    } else {
        return name + " uczy się JS. (month is not a string)";
    }
}

console.log(ifMonth("Tymek", "luTY"));