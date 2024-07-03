let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function (){
      return Math.floor(Math.random()*11);
   }
};

let superChimpTwo  = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function (){
      return Math.floor(Math.random()*11);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function (){
      return Math.floor(Math.random()*11);
   }
};

let smallest = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 4,
   move: function (){
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 5,
   move: function(){
      return Math.floor(Math.random()*11);
   }
};

let crew = [superChimpOne, superChimpTwo, dog, smallest, salamander];
let turnsEach = [];

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

let crewReports = function (arr){
   for (let i = 0; i < arr.length; i++){
      console.log(`${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astronautID}.`)
      }
   };

   // crewReports(crew);

// Start an animal race!

function fitnessTest(arr){
   for (let i = 0; i < arr.length; i++){
      let distance = 0;
      let turns = [];
      for (let d = 0; distance < 20; d++){
         distance += arr[i].move();
         // console.log(distance);
         turns.push(distance);
      }
      turnsEach.push(`${arr[i].name} took ${turns.length} turns to take 20 steps.`);

   }
   return turnsEach
};

fitnessTest(crew);
for (let i = 0; i < turnsEach.length; i++){
   console.log(turnsEach[i])
};



