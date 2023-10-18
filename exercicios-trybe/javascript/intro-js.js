//  Variáveis

const myName = Alice;
const birthCity =  Alterosa;

let birthYear = 1993;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//  Tipos primitivos

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
// 

const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);

//  Condições if/else

const grade = 80;
if (grade >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
  } else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera");
  } else if (grade < 60) {
    console.log("Você foi reprovada(o)");
  }

//  operadores lógicos

const currentHour = 16;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
  } else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
  } else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
  } else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
  } else if (currentHour < 11 && currentHour < 4) {
    message = "Hmmm, cheiro de café recém passado";
  }

  console.log(message);
// 

const weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
   } else {
     console.log("FINALMENTE, descanso merecido UwU");
   }

//  Switch and case

const status = 'aprovada';
switch(status) {
    case 'aprovada':
      console.log("Parabéns, você foi aprovada(o)!");
      break;
    case 'lista':
      console.log("Você está na nossa lista de espera");
      break;
    case 'reprovada':
      console.log("Você foi reprovada(o)");
      break;
    default:
      console.log("Informação incorreta");
      break;
  }

// 
const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));
// 

const ab = 20;
const bc = 21;

if (ab > bc) {
  console.log("'ab' é maior que 'bc'");
} else {
  console.log("'bc' é maior que 'ab'");
};
// 

const x = 6;
const y = 4;
const z = 2;

if (x > y && x > z) {
  console.log('O maior número é: ' + x + ' (x)');
} else if (y > x && y > z) {
  console.log('O maior número é: ' + y + ' (y)');
} else {
  console.log('O maior número é: ' + z + ' (z)');
};
// 

const number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};
// 

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
// 

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
// 

const grade2 = 76;

if (grade2 < 0 || grade2 > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade2 >= 90) {
  console.log("A");
} else if (grade2 >= 80) {
  console.log("B");
} else if (grade2 >= 70) {
  console.log("C");
} else if (grade2 >= 60) {
  console.log("D");
} else if (grade2 >= 50) {
  console.log("E");
} else {
  console.log("F");
}
// 

const m = 1;
const n = 3;
const o = 5;

let isEven = false;

if ((m % 2 === 0 || n % 2 === 0 || o % 2 === 0)) {
  isEven = true;
};
console.log(isEven);
// 


const one = 1;
const two = 3;
const three = 5;

let isOdd = false;

if ((one % 2 !== 0 || two % 2 !== 0 || three % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);
// 


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
// 


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));


