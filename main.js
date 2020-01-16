/* 
Lightning Exercise 1: Given two options of data structures
- array or object - which should you use? You need to represent
a red 2015 Ford Mustang in your code.
*/

//OBJECT

const car = {
    color: "red",
    year: "2015",
    make: "Ford",
    model: "Mustang",
};

/*
Lightning Exercise 2: Given two options of data structures
- array or object - which should you use? You need to store list of
animal names in a shelter. The names are "Kippers", "Jack", "Gypsy",
"Angus", "Seymour Bouts", and "Sharky".
*/

//ARRAY

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

/*
Lightning Exercise 3: Define an object for four family members, and
put each object in an array named familyMembers. Each family member
object that you create should have the same keys on them, but the
values will be different.
 */

const landon = {
    name: "Landon",
    age: 38,
    city: "Nashville",
    state: "Tennessee"
};

const don = {
    name: "Don",
    age: 70,
    city: "Edmond",
    state: "Oklahoma"
};

const landelle = {
    name: "Landelle",
    age: 42,
    city: "Bartlesville",
    state: "Oklahoma"
};

const dave = {
    name: "Dave",
    age: 66,
    city: "Claremore",
    state: "Oklahoma"
};

const familyMembers = [landon, don, landelle, dave];

/* Lightning Exercise: Given the object below, output each of
the values to the console using dot notation.
*/

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(`Wardrobe Height: ${wardrobe.height}`);
console.log(`Wardrobe Manufacturer: ${wardrobe.manufacturer}`);
console.log(`Wardrobe Contents: ${wardrobe.contents}`);
console.log(`Wardrobe Depth: ${wardrobe.depth}`);
console.log(`Wardrobe Width: ${wardrobe.width}`);

//LIGHTNING EXERCISES - EMPIRE STATE BUILDING

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

/* 
Lightning Exercises 1: Use dot notation to output all of the dimensions of
the Empire State Building to the console.
*/

console.log(`The Empire State Building is ${empireStateBuilding.eastWestLength} x ${empireStateBuilding.northSouthLength} x ${empireStateBuilding.height}. It is ${empireStateBuilding.stories} stories tall with a total square foot of ${empireStateBuilding.squareFeet}.`);

/*
Lightning Exercises 2: Use square bracket notation to output the remaining
5 properties to the console. Create 5 variables first with the keys as
their values. Use those variables to look up the values.
*/

const empireAddress = empireStateBuilding["address"];
const empireConstDate = empireStateBuilding["constructionDate"];
const empireCost = empireStateBuilding["cost"];
const empireOwner = empireStateBuilding["owner"];
const empireArchitect = empireStateBuilding["architect"];

console.log(`EMPIRE STATE BUILDING`)
console.log(`ADDRESS = ${empireAddress}`);
console.log(`CONSTRUCTION DATE = ${empireConstDate}`);
console.log(`COST = ${empireCost}`);
console.log(`OWNER = ${empireOwner}`);
console.log(`ARCHITECT = ${empireArchitect}`);

// LIGHTNING EXERCISE - Nashville Software School

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

/* 
Lightning Exercise 1: Output the names of the part-time instructors
followed by the names of the full-time instructors in the console.
*/

console.log(`PART TIME INSTRUCTORS: ${nashvilleSoftwareSchool.instructors.partTime.join(", ")}`);
console.log(`FULL TIME INSTRUCTORS: ${nashvilleSoftwareSchool.instructors.fullTime.join(", ")}`);

/* Lightning Exercise 2: Output only Andy and Zoe in the console. */

console.log(`OUTPUT ANDY: ${nashvilleSoftwareSchool.instructors.fullTime[4]}`);
console.log(`OUTPUT ZOE: ${nashvilleSoftwareSchool.instructors.partTime[0]}`);


// Practice: Accessing Property Values

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

/* Output the following value to the console.
Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942.
He contributed heavily to the Magical Myster Tour Album. */

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);
