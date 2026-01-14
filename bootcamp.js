// //SWITCH CASES & TERNARY OPERATORS
// let clearanceLevel = "Red";

// switch(clearanceLevel) {
//     case "green":
//         console.log("All clear");
//         break;
//     case "Yellow":
//         console.log("Stay at alert");
//         break;
//     case "Red":
//         console.log("Take cover");
//         break;
//     case "Default":
//         console.log("Stand by");
//         break;
// }

// let enemiesSpotted = true;
// let response = enemiesSpotted? "Attack":"Hold";

// let levelThreat = 5;

// switch(levelThreat) {
//     case 1:
//         console.log("Routine check - all clear");
//         break;
//     case 2:
//         console.log("Sweep the perimeter");
//         break;
//     case 3:
//         console.log("All soldiers on alert");
//         break;
//     case 4:
//         console.log("Check every floor for threats");
//         break;
//     case 5:
//         console.log("Base breached - total lockdown");
//         break;
//     default:
//         console.log("Threat level unrecognized");
// }

// let readiness = true;
// let readinessStatus = readiness? "Sir yes sir, we're moving out": "No Sir, we're gearing up now!";
// console.log(`Are you ready soldier? ${readinessStatus}`);

// let threatLevel = 3;
// let defconstatus = threatLevel>3 ? "High alert":"At ease";
// console.log(`Status level is ${threatLevel}, ${defconstatus} Soldiers!`);

// //LOOPS
// //FOR LOOPS
// console.log("You have ten seconds till the bomb explodes.");
// for (let i = 10; i > 0; i--) {
//     console.log("Bomb will explode in " + i);
// }console.log("BOOM!");

// //WHILE LOOPS
// let downloadProgress = 90;
// console.log("Download in progress");
// while (downloadProgress < 100) {
//     console.log(downloadProgress + "% done, few seconds to go...");
//     downloadProgress++;
// }
// console.log("Download complete!");

// for (let i = 0; i <= 10; i++) {
//     console.log("No: " + i);
// }

// let count = 0;

// while (count < 10) {
//     console.log(count);
//     count++;    
// }
// console.log("You have " + count + " new messages");

// let num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num <11);



// for (let i = 1; i <= 50; i++) {
//     if (i % 4 === 0) continue;

//     if (i % 13 === 0) break;

//     console.log(i);
// }


// let fizz = 0;
// let buzz = 0;
// let fizzBuzzCounter = 0;

// for (let i = 1; i <= 150; i++) {
//     if (i % 10 === 7) continue;

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//         fizzBuzzCounter++;
//         if (fizzBuzzCounter === 11) break;
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//         fizz++;
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//         buzz++;
//     } else {
//         console.log(i);
//     }

//     if (i % 20 === 0) {
//       console.log(`Progress report → Fizz: ${fizz}, Buzz: ${buzz}, FizzBuzz: ${fizzBuzzCounter}`);
//     }
// }


// // let counter = 1;

// // for (let i = 1; i <= 3; i++) {
// //     let rowOutput = "";

// //     for (let j = 1; j <= 3; i++) {
// //         rowOutput += counter + " ";
// //         counter++;
// //     }
// //     console.log(rowOutput);
// // }


// for (let row = 1; row <= 4; row++) {
//     let rowOutput = "";

//     for (let col = 1; col <= 4; col++) {
//         rowOutput += `(${row}, ${col}) ` + "";
//     }
//     console.log(rowOutput.trim());
// }


// let counter = 1;
// for (let i = 1; i <= 5; i++) {
//     let rowSpace = "";

//     for (let j = 1; j <= 5; j++) {
//         rowSpace += counter.toString().padStart(2, '0') + " ";
//         counter++;
//     }

//     console.log(rowSpace);
// }


// let cout = 1;

// for (let i = 1; i <= 6; i++) {
//     let space = "";

//     for (let j = 1; j <= 6; j++) {
//         space += (i * j).toString().padStart(2, '0') + " ";
//         cout++;
//     }
//     console.log(space);
// }

// for (let i = 5; i <= 15; i++) {
//   console.log(i);
// } console.log(" ");

//  for (let i = 20; i >= 10; i--) {
//   console.log(i);
// } console.log("");

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0)continue
//   console.log(i);
// }console.log(" ");


// multiplication = 0;

// for (let i = 1; i <= 12; i++) {
//   multiplication = i * 7;
//   console.log(`${i} * 7 = ${multiplication}`);
// }


// for (let i = 1; i <= 30; i++) {
   
//      if (i === 26) break;
//       if (i % 10 === 4) continue;
    
//       if (i % 2 === 0) {
//         if (i === 20) {
//           console.log("Halfway there!");
//         }else {
//           console.log(i);
//         }
//       }
// }

// let userInput = prompt("Enter a number:");
// let limit = prompt("Enter a limit (Numbers only!)");

   
//   if (isNaN(userInput) || isNaN(limit)) {
//    alert("Invalid input. Please enter numbers only.");
// } 
//    else {
//        userInput = Number(userInput);
//        limit = Number(limit);

//        for (let i = 1; i <= limit; i++){
//             if (i % 10 === 7) continue;
    
//             if (i % userInput === 0) break; 
            
//             console.log(i);
//        }
//    }

// logCounter = 0;

// for (let i = 100; i >= 1; i--) {
//   if (i % 9 === 0) continue;
//   console.log(i);
//   logCounter++;
//   if (logCounter === 10) break;
  
// }

// let eightCounter = 0;
// let skippedCounter = 0;
// let printedCounter = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 10 === 3 || i % 4 === 0) {
//     skippedCounter++;
//     continue;
//   }

//   console.log(i);
//   printedCounter++;

//   if (i % 10 === 8) {
//     eightCounter++;
//     if (eightCounter === 5) {
//       console.log("🛑 Fifth number ending with 8 found. Stopping loop...");
//       break;
//     }
//   }
// }

// console.log(`\n📊 Final Report:
// Skipped: ${skippedCounter}
// Printed: ${printedCounter}
// Total '8'-enders: ${eightCounter}`);


// let skipped = 0;
// let printed = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     skipped++;
//     continue;
//   }

//   console.log(i);
//   printed++;

//   if (i === 37) break;
// }
// console.log(`Skipped: ${skipped}, Printed: ${printed}`);
// console.log(" ");

// let evenCount = 0;
// let nineDivisible = 0;

// for (let i = 1; i <= 60; i++) {
//   if (i % 2 === 0) {
//     evenCount++;
//   }

//   if (i % 9 === 0) {
//     nineDivisible++;
//   }
//   console.log(i);
// }
// console.log(`Even: ${evenCount}, Divisible by 9: ${nineDivisible}`);

// console.log(" ");

// let quadHexCount = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 10 === 8) {
//     continue;
//   }
//   if (i % 4 === 0 && i % 6 === 0) {
//     console.log("QuadHex");
//     quadHexCount++;
//     if (quadHexCount === 8) break;
//   } else if (i % 4 === 0) {
//     console.log("Quad");
//   } else if (i % 6 === 0) {
//     console.log("Hex");
//   } else {
//     console.log(i);
//   }
// }
// console.log(`QuadHex count: ${quadHexCount}`);

// // let skipped  = 0;
// // let printed = 0;

// // for (let i = 1; i <= 30; i++) {
// //   if (i % 4 === 0) {
// //     skipped++;
// //     continue;
// //   }
  
// //   console.log(i);
// //   printed++;

// //   if (i === 25) break;
// // }  console.log(`Skipped: ${skipped}, Printed: ${printed}`);



// // let fizz = 0;
// // let buzz = 0;
// // let fizzBuzz = 0;
// // let fizzBuzzCounter = 0;

// // for (let i = 1; i <= 150; i++) {
// //   // Skip numbers ending in 7
// //   if (i % 10 === 7) continue;

// //   if (i % 3 === 0 && i % 5 === 0) {
// //     console.log("FizzBuzz");
// //     fizzBuzz++;
// //     fizzBuzzCounter++;
// //   } else if (i % 3 === 0) {
// //     console.log("Fizz");
// //     fizz++;
// //   } else if (i % 5 === 0) {
// //     console.log("Buzz");
// //     buzz++;
// //   } else {
// //     console.log(i);
// //   }

// //   if (fizzBuzzCounter === 10) break;
// // }

// // let oddCount = 0;

// // for(let i = 10; i >= 1; i--) {
// //   if(i % 2 === 0) continue;

// //   console.log(i);
// //   oddCount++;

// //   if(oddCount === 5) {
// //     console.log("HALT AT 5!");
// //     break;
// //   }
// // }

// // console.log(`Total odd numbers printed: ${oddCount}`);


Write a for loop from 1 to 100. Print every number, but:

Skip numbers divisible by 8.

Stop the loop completely when you encounter the first number that is divisible by both 7 and 5.

What gets printed before the loop stops?

for (let i = 1; i <= 100; i++) {
  if(i % 8 === 0) continue;

  console.log(i);

  if (i % 7 === 0 && i % 5 === 0) break;
}

Puzzle 2 — Counter Clash

Loop i from 1 to 50. Maintain two counters:

a increments when i is divisible by 3.

b increments when i is divisible by 4.

But if i is divisible by both 3 and 4, increment neither counter (skip it).
After the loop, print a and b.

Write the code and the final values of a and b.

let threeCounter = 0;
let fourCounter = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 4 === 0) continue;
  
    else if (i % 3 === 0) {
      threeCounter++;
    }else if(i % 4 === 0) {
      fourCounter++
    }

    else{
      console.log(i);
    }

} console.log(`Sum of three counter: ${threeCounter}. Sum of four counter: ${fourCounter}.`);

Puzzle 3 — The Alternator

Write code that prints the numbers 1 to 20, but replaces:

every 3rd printed value (not every number) with the word "THIRD".

every 5th printed value with the word "FIFTH".

when a printed position is both 3rd and 5th (i.e., 15th printed value), print "BOTH".

Important: positions count only the values you actually print (so if you continue somewhere, that skipped value does not advance the printed-position count). Provide code and the resulting printed sequence.

let counter = 0;

for (let i = 1; i <= 20; i++) {
    counter++;
    if (counter % 15 === 0) {
      console.log("Both");
    }else if(counter % 3) {
      console.log("Third");
    }else if (counter % 5) {
      console.log("Fifth");
    }else{
      console.log(i);
    }
}

Puzzle 4 — Mod Mixup

Loop n from 1 to 200. Track x = 0.

If n % 2 === 0, add 2 to x.

If n % 3 === 0, add 3 to x.

If n % 5 === 0, add 5 to x.
If none apply, subtract 1 from x.
Stop when x becomes >= 50 and print the n where it happened and the final x value.

Provide the code and the n and x.

let x = 0;
let stopN = 0;

for(n = 1; n <= 200; n++) {
  let added = false;
  if (n % 2 === 0) {
      x+= 2;
      added = true;
  }if (n % 3 === 0) {
      x+= 3;
      added = true;
  }if (n % 5 === 0) {
      x+= 5;
      added = true;
  }

  if(!added) {
    x-=1;
  }

  if(x >= 50) {
    stopN = n;
    break;
  }
}


Puzzle 5 — The Skip Race

For i from 1 to 100, do:

If i ends with 1 or 4 (last digit), skip it.

Print numbers that are prime only (you may write a helper function to test primality).

Stop when you have printed 10 primes; report how many numbers were skipped in total.

Return code and the skip count.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let skippo = 0;
let primeCounter = 0;

for (let i = 1; i <= 100; i++) {
    // Check if number ends with 1 or 4
    if (i % 10 === 1 || i % 10 === 4) {
        skippo++;
        continue;
    }
    
    // Check if number is prime
    if (isPrime(i)) {
        console.log(i);
        primeCounter++;
        
        // Stop when we have 10 primes
        if (primeCounter === 10) break;
    }
}

console.log(`Prime counter: ${primeCounter}, Skipped: ${skippo}`);


Puzzle 6 — Tiny Logic Stress-test (one-liner logic + explanation)

Without loops, using only arithmetic and boolean logic, 
can you determine whether a positive integer m is divisible 
by 6 but not by 9? Write the shortest expression (in JS) that 
yields true/false for that condition and explain it in one sentence.

m % 6 === 0 && m % 9 !== 0


