console.log("\n---Zadanie 7---");

/*
Mamy przykładowy tekst:

    const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdziału (np. "|")

Skorzystaj z odpowiedniej metody String (poszukaj w necie), tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę.

Funkcja niech posegreguje tą tablicę alfabetycznie.

Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

input -> "Ania|Marcin|Bartek"
output -> "Ania|Bartek|Marcin"

Wywolaj tą funkcję przekazując do niej str z początku zadania.
 */


function sortNames(str, sign) {
    return str.split(sign).sort().join(sign);
}

const str = "Robert|Zbyszek|Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
console.log(sortNames(str, "|"));