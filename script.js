// function reverseArray(arr) {
//     return arr.reverse();
// }
// const originalArray = [1, 2, 3];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray); 


// function cleanArray(arr) {
//     return arr.filter(Boolean);
// }
// const originalArray = [0, 1, false, 2, undefined, '', 3, null];
// const cleanedArray = cleanArray(originalArray);
// console.log(cleanedArray);


// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }
// const arrayWithDuplicates = [1, 2, 3, 1, 2];
// const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log(arrayWithoutDuplicates);


// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr)


// const arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);


// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);


// const obj = {js: 'test', jq: 'hello', css: 'world'};
// const keysArray = Object.keys(obj);
// console.log(keysArray);


// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// const resultString = vegetables.join(', ');
// console.log(resultString);


// function toggleCase(inputString) {
//     return inputString.split('').map(function(char) {
//         return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
//     }).join('');
// }
// const userInput = "КаЖдЫй ОхОтНиК";
// const toggledString = toggleCase(userInput);
// console.log(toggledString);


// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ];

// const filteredCars = cars.filter(car => car.price >= 40000 && car.price <= 60000 && car.year < 2019);
// console.log(filteredCars);
// const desiredMake = "Ford"; 

// const filteredCars = cars.filter(car => car.make === desiredMake);

// console.log(filteredCars);