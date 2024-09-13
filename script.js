// Logical Operators

// && --- and
// || --- or
//  ! --- not
// ?? --- returns the boolean

let myName = "";

if (myName && (myName.length >= 3)) {
    console.log(`${myName} is long enough.`);
} else if (myName.length === 1) {
    console.log(`${myName} is an initial. Full first name required.`);
} else if (myName) {
    console.log(`${myName} looks like a nickname. Full first name required.`)
} else {
    console.log("No name found.");
}

let childAge = 6;

if (childAge > 7 && childAge < 9) {
    //first grade
} else if (childAge > 5) {
    //Kindergarten
} else {
    // too young for school
}

let guesses;

if (guess was wrong ) {

    window.alert
    guesses++;
}

//If a user guesses three times and does not guess your number, display a window.prompt that they have lost.

// ELSE display a window.prompt that the user has won.