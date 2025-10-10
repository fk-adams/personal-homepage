//SWITCH CASES & TERNARY OPERATORS
let clearanceLevel = "Red";

switch(clearanceLevel) {
    case "green":
        console.log("All clear");
        break;
    case "Yellow":
        console.log("Stay at alert");
        break;
    case "Red":
        console.log("Take cover");
        break;
    case "Default":
        console.log("Stand by");
        break;
}

let enemiesSpotted = true;
let response = enemiesSpotted? "Attack":"Hold";

let levelThreat = 5;

switch(levelThreat) {
    case 1:
        console.log("Routine check - all clear");
        break;
    case 2:
        console.log("Sweep the perimeter");
        break;
    case 3:
        console.log("All soldiers on alert");
        break;
    case 4:
        console.log("Check every floor for threats");
        break;
    case 5:
        console.log("Base breached - total lockdown");
        break;
    default:
        console.log("Threat level unrecognized");
}

let readiness = true;
let readinessStatus = readiness? "Sir yes sir, we're moving out": "No Sir, we're gearing up now!";
console.log(`Are you ready soldier? ${readinessStatus}`);

let threatLevel = 3;
let defconstatus = threatLevel>3 ? "High alert":"At ease";
console.log(`Status level is ${threatLevel}, ${defconstatus} Soldiers!`);

//LOOPS
//FOR LOOPS
console.log("You have ten seconds till the bomb explodes.");
for (let i = 10; i > 0; i--) {
    console.log("Bomb will explode in " + i);
}console.log("BOOM!");

//WHILE LOOPS
let downloadProgress = 90;
console.log("Download in progress");
while (downloadProgress < 100) {
    console.log(downloadProgress + "% done, few seconds to go...");
    downloadProgress++;
}
console.log("Download complete!");

for (let i = 0; i <= 10; i++) {
    console.log("No: " + i);
}

let count = 0;

while (count < 10) {
    console.log(count);
    count++;    
}
console.log("You have " + count + " new messages");

let num = 1;
do{
    console.log(num);
    num++;
}while(num <11);



for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0) continue;

    if (i % 13 === 0) break;

    console.log(i);
}


let fizz = 0;
let buzz = 0;
let fizzBuzzCounter = 0;

for (let i = 1; i <= 150; i++) {
    if (i % 10 === 7) continue;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        fizzBuzzCounter++;
        if (fizzBuzzCounter === 11) break;
    } else if (i % 3 === 0) {
        console.log("Fizz");
        fizz++;
    } else if (i % 5 === 0) {
        console.log("Buzz");
        buzz++;
    } else {
        console.log(i);
    }

    if (i % 20 === 0) {
      console.log(`Progress report → Fizz: ${fizz}, Buzz: ${buzz}, FizzBuzz: ${fizzBuzzCounter}`);
    }
}


// let counter = 1;

// for (let i = 1; i <= 3; i++) {
//     let rowOutput = "";

//     for (let j = 1; j <= 3; i++) {
//         rowOutput += counter + " ";
//         counter++;
//     }
//     console.log(rowOutput);
// }


for (let row = 1; row <= 4; row++) {
    let rowOutput = "";

    for (let col = 1; col <= 4; col++) {
        rowOutput += `(${row}, ${col}) ` + "";
    }
    console.log(rowOutput.trim());
}


let counter = 1;
for (let i = 1; i <= 5; i++) {
    let rowSpace = "";

    for (let j = 1; j <= 5; j++) {
        rowSpace += counter.toString().padStart(2, '0') + " ";
        counter++;
    }

    console.log(rowSpace);
}


let cout = 1;

for (let i = 1; i <= 6; i++) {
    let space = "";

    for (let j = 1; j <= 6; j++) {
        space += (i * j).toString().padStart(2, '0') + " ";
        cout++;
    }
    console.log(space);
}
