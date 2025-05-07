let myCondition = true; // Bedingung

myCondition = !myCondition; // Negation der Bedingung

myCondition = false || false || true; // Oder-Bedingung

myCondition = true && false && true; // Und-Bedingung

myCondition = 45 == "45"; // Vergleich (gleich)

myCondition = 45 === "45"; // Vergleich (identisch) --> True

myCondition = 45 === "45"; // Vergleich (identisch) --> False

myCondition = 45 > 123; // Vergleich (größer als)

myCondition = 45 < 123; // Vergleich (kleiner als)

myCondition = 45 >= 123; // Vergleich (größer oder gleich)

myCondition = 45 <= 123; // Vergleich (kleiner oder gleich)


console.log(myCondition); // Ausgabe: true/false

if (true){ // Wenn die Bedingung wahr ist führe den Code aus
    console.log("Die Bedingung ist wahr.");
} else if (!false) { // Wenn die Bedingung falsch ist führe den Code aus
    console.log("Die Bedingung ist falsch.");
}