// Code your orbitCircumference function here:

function orbitCircumference(r) {
  return Math.round(2 * Math.PI * r);
}

// Code your missionDuration function here:

function missionDuration(orbits, radius = 2000, speed = 28000) {
  return (
    (Math.round((orbitCircumference(radius) / speed) * 100) / 100) * orbits
  );
}

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, orbits, radius = 2000, speed = 28000) {
  let o2Used =
    Math.round(
      candidate.o2Used(missionDuration(orbits, radius, speed)) * 1000
    ) / 1000;
  return `${
    candidate.name
  } will perform the spacewalk, which will last ${missionDuration(
    orbits,
    radius,
    speed
  )} hours and require ${o2Used} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];
let crew = [candidateA, candidateC, candidateE];

console.log(oxygenExpended(candidateD, 3));
