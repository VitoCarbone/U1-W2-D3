const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
let Characters= new Array ()
  let Characters =[];


/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà
 "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: 
["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (i = 0; i < starWarsCharacters.length; i++) {
  //  const nomepersonaggio = starWarsCharacters[i].name;
  // characters.push(nomepersonaggio)
  characters.push(starWarsCharacters[i].name);
}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" 
  e inserisci solo oggetti di personaggi femminili 
  con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/const femaleCharacters = [];
for (i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà:
   blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};
console.log(eyeColor);

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array
   corrispondente al colore dei loro occhi nell'oggetto "eyeColor" 
   precedentemente creato.
  Utilizza uno switch statement per determinare in quale proprietà 
  inserire il personaggio
*/
for (i = 0; i < starWarsCharacters.length; i++) {
  switch (true) {
    case starWarsCharacters[i].eye_color === "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case starWarsCharacters[i].eye_color === "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case starWarsCharacters[i].eye_color === "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case starWarsCharacters[i].eye_color === "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case starWarsCharacters[i].eye_color === "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;
  }
}
console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
let contatore = 0;
let massatotale = 0;
while (contatore < starWarsCharacters.length) {
  massatotale = massatotale + Number(starWarsCharacters[contatore].mass);
  // console.log(massatotale);
  contatore++;
}
console.log("massa totale del equipaggio: ", massatotale);

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
switch (true) {
  case massatotale < 500:
    console.log("Ship is under loaded");
    break;
  case massatotale >= 500 && massatotale < 700:
    console.log("Ship is half loaded");
    break;
  case massatotale >= 700 && massatotale < 900:
    console.log("Warning: Load is over 700");
    break;
  case massatotale >= 900 && massatotale < 1000:
    console.log("Critical Load: Over 900");
    break;
  case massatotale >= 1000:
    console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
    break;
}
/* ESERCIZIO 8

Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
);
const modified = [];
for (i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
    modified.push(starWarsCharacters[i]);
  }

  // switch (true) {
  //   case starWarsCharacters[i].gender === "n/a":
  //     starWarsCharacters[i].gender = "robot";
  //     break;
  // }
}
console.log(modified); //per non richimare tutti gli oggetti

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto, crea un console.log() per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
console.log(characters);
for (i = 0; i < characters.length; i++) {
  for (j = 0; j < femaleCharacters.length; j++) {
    if (characters[i] === femaleCharacters[j].name) {
      characters.splice(i, 1);
    }
  }
}
console.log(characters);
/* EXTRA ESERCIZIO 10

Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/const random = Math.floor(Math.random() * starWarsCharacters.length);
if (starWarsCharacters[random].gender === "male") {
  console.log(
    "Our randomly choosen character is:",
    starWarsCharacters[random].name,
    "--",
    "His height is:",
    starWarsCharacters[random].height,
    "--",
    "His mass is:",
    starWarsCharacters[random].mass,
    "--",
    "His hair are:",
    starWarsCharacters[random].hair_color,
    "--",
    "His skin is:",
    starWarsCharacters[random].skin_color,
    "--",
    "His eyes are:",
    starWarsCharacters[random].eye_color,
    "--",
    "He was born in the year:",
    starWarsCharacters[random].birth_year,
    "--",
    "and He is a:",
    starWarsCharacters[random].gender
  );
} else if (starWarsCharacters[random].gender === "female") {
  console.log(
    "Our randomly choosen character is:",
    starWarsCharacters[random].name,
    "--",
    "Her height is:",
    starWarsCharacters[random].height,
    "--",
    "Her mass is:",
    starWarsCharacters[random].mass,
    "--",
    "Her hair are:",
    starWarsCharacters[random].hair_color,
    "--",
    "Her skin is:",
    starWarsCharacters[random].skin_color,
    "--",
    "Her eyes are:",
    starWarsCharacters[random].eye_color,
    "--",
    "She was born in the year:",
    starWarsCharacters[random].birth_year,
    "--",
    "and She is a:",
    starWarsCharacters[random].gender
  );
} else {
  console.log(
    "Our randomly choosen character is:",
    starWarsCharacters[random].name,
    "--",
    "Its height is:",
    starWarsCharacters[random].height,
    "--",
    "Its mass is:",
    starWarsCharacters[random].mass,
    "--",
    "Its hair are:",
    starWarsCharacters[random].hair_color,
    "--",
    "Its skin is:",
    starWarsCharacters[random].skin_color,
    "--",
    "Its eyes are:",
    starWarsCharacters[random].eye_color,
    "--",
    "It was born in the year:",
    starWarsCharacters[random].birth_year,
    "--",
    "and it is a:",
    starWarsCharacters[random].gender
  );
}
