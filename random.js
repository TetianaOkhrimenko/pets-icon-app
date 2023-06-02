export function randomPet(array) {
  for (let i = 0; i < array.length - 1; i++) {
    return array[Math.floor(Math.random() * (1 + array.length - 1 - 0)) + 0];
  }
}
