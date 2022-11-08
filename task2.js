let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
// let bListAnimals = animals.filter(checkB)

// function checkB(string) {
//   return string.startsWith("b")
// }

//let bListAnimals = animals.filter(function(animal) { return animal.startsWith("b") })

let bListAnimals = animals.filter((animal) => { return animal.startsWith("b")})

console.log(bListAnimals)
