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

