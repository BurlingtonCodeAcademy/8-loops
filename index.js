let count = 5;

while (count <= 10) {
    console.log(count);
    count++;
}

// while (true) {
//     console.log("LET ME OUT OF HERE!");
// }

for (let i = 0; i < 10; i++) {
    // some code
    console.log(i);
}

// starry night example
let stars = "";
const totalStars = 5;

for (let i = 0; i < totalStars; i++) {
    stars += "  * ";
    console.log(stars);
}

// roleplaying adventure game
let playerHealth = 100;

while (playerHealth > 0) {
    console.log("You are exploring a dungeon. Watch out for traps!");
    playerHealth = playerHealth - 10;
    console.log(`Ouch! You hit a trap! Your health is now ${playerHealth}`);
}
console.log("You have died. Game over.");

// The Cookie Jar
let cookiesInJar = 10;

do {
    console.log("I add a cookie to the jar. Cool!");
    cookiesInJar++;
    console.log(`There are ${cookiesInJar} cookies in the jar.`);
} while (cookiesInJar < 100);
console.log("The jar is now full!");

// // Magical Inventory
let magicalInventory = {
    wand: "Elder Wand",
    cloak: "Invisibility Cloak",
    ring: "Ring of Protection",
    sword: "Long Sword",
    shield: "Shield of Durability",
    armor: "Leather Armor",
    potion: "Healing Potion",
}

for (let item in magicalInventory) {
    console.log(`Your ${item} is ${magicalInventory[item]}`);;
}

// Plant Growth
let plantHeight = 1;
let days = 0;

while (plantHeight < 10) {
    plantHeight++;
    days++;
}
console.log(`It takes ${days} days for the plant to grow 10 inches.`)

// Saving for a $200 Bicycle at $15 per week
let savings = 0;
let weeks = 0;

while (savings <= 200) {
    savings += 15;
    weeks++;
}
console.log(`It took ${weeks} weeks to save $200 dollars for a bicycle.`);

// Building a pyramid with a for loop that is 5 levels high
let pyramid = "";
for (let level = 1; level <= 40; level++) {
    pyramid =
        " ".repeat(40 - level) +
        "#".repeat(level * 2 - 1) +
        " ".repeat(40 - level);
    console.log(pyramid)
}

// Countdown to liftoff
for(let countdown = 10; countdown >= 0; countdown--) {
    console.log(countdown);
}

console.log("Blast off!");

// Guess the number!
let correctNumber = 7;
let guess = 7; 

do{
    console.log(`Guess a number between 1 and 10`);
    console.log(`You guessed ${guess}`);
} while (guess != correctNumber);
console.log("Congratulations! You guessed the number!");

// Fantasy game characters
let team = {
    knight: "King Arthur",
    wizard: "Gandalf",
    archer: "Robin Hood",
}

for (let role in team) {
    console.log(`The ${role} of the team is ${team[role]}`);
}

// Classroom Attendance
let attendance = {
    Alice: "present",
    Jimmy: "absent",
    Bob: "present",
    Charlie: "present",
    Daniel: "present",
    Elizabeth: "absent",
    Frank: "present",
    Greg: "present",
    Harry: "present",
    Ian: "present",
    Jane: "present",
    Charlemanger: "absent",
}

for(let student in attendance) {
    console.log(`${student} is ${attendance[student]}.`);
}