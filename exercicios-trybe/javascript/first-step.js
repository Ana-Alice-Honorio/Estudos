//  arrays(listas)

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.push('Fazer exercícios da Trybe');  
// adiciona mais uma tarefa no final da nossa lista
// Se precisarmos adicionar no início, podemos usar o .unshift()
console.log(tasksList);
//  O método .pop() nos permite remover o último item do array. 
//  Mas se precisarmos remover o primeiro item da lista, podemos usar o .shift().

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
//  O indexOf(), usado para procurar o índice de um item no Array.

//  For
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
  const element = groceryList[index];
  console.log(element);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}


//  For/of
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index of names) {
  console.log(index);
}

// While
function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}

// Bubble Sort
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let newArray = [];

for (let index = 0; index < numbers2.length; index += 1) {
  if (index + 1 < numbers2.length) {
    newArray.push(numbers2[index] * numbers2[index + 1]);
  } else {
    newArray.push(numbers2[index] * 2);
  }
}

console.log(newArray);
