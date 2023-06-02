const petsArray = ["🐯", "🐼", "🐨", "🐵", "🐷", "🐸", "🐹", "🐰", "🦔"];
const form = document.querySelector(".hero_form");
const input = document.querySelector(".hero_input");
const heroArray = document.querySelector(".hero_array");
const heroSet = document.querySelector(".hero_set");
let arrayArr = [];
//let arraySet = [];
let set = new Set();

import { randomPet } from "./random.js";

import { addPetstoArray } from "./array.js";

import { addPetstoSet } from "./set.js";

input.value = randomPet(petsArray);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  heroArray.textContent = `[${addPetstoArray(arrayArr, input.value)}]`;
  //console.log(arrayArr);
  set = new Set(arrayArr);
  //arraySet = [...set];
  //console.log(arraySet);
  heroSet.textContent = `[${addPetstoSet(set)}]`;
  // heroSet.textContent = `[${arraySet}]`;
  input.value = randomPet(petsArray);
});
