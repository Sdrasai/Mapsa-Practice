// function findMaxFruitsInBascket(fruits: number[]): number {
//   let i: number = fruits.length;
//   let j = i - 1;
//   let ans = 0;
//   const fruitsInBascket: any = {};

//   while (i--) {
//     fruitsInBascket.hasOwnProperty(fruits[i])
//       ? fruitsInBascket[fruits[i]]++
//       : (fruitsInBascket[fruits[i]] = 1);
//     if (Object.keys(fruitsInBascket).length > 2) {
//       fruitsInBascket[fruits[j]]--;
//       if (fruitsInBascket[fruits[j]] === 0) {
//         delete fruitsInBascket[fruits[j]];
//       }
//       j--;
//     }
//     ans = Math.max(j - i + 1, ans);
//   }
//   return ans;
// }
// console.log(findMaxFruitsInBascket([1, 1, 1, 1, 2, 3, 2, 1, 2]));

// enum Gender {
//   male,
//   female,
// }

// interface Person {
//   username: string;
//   age: number;
//   gender?: Gender;
// }

// const person: Person = {
//   age: 54,
//   username: "Sadra",
//   gender: Gender.male,
// };

class Car {
  vinNumber: number;
  year: number;
  model: string;
  price: number;
  constructor(vinNumber: number, year: number, model: string, price: number) {
    this.vinNumber = vinNumber;
    this.year = year;
    this.model = model;
    this.price = price;
  }
}

class Sedan extends Car {
  zeroToOneHundred: number;
  consumptionPerOneHundredKM: number;
  tireSize?: number;
  color?: string;
  constructor(
    zeroToOneHundred: number,
    consumptionPerOneHundredKM: number,
    vinNumber: number,
    year: number,
    model: string,
    price: number,
    tireSize?: number,
    color?: string
  ) {
    super(vinNumber, year, model, price);
    this.zeroToOneHundred = zeroToOneHundred;
    this.consumptionPerOneHundredKM = consumptionPerOneHundredKM;
    this.tireSize = tireSize;
    this.color = color;
  }
}
class Tractor extends Car {
  power: string;
  tools?: string;
  constructor(
    power: string,
    vinNumber: number,
    year: number,
    model: string,
    price: number,
    tools?: string
  ) {
    super(vinNumber, year, model, price);
    this.power = power;
    this.tools = tools;
  }
}
class Bus extends Car {
  passengers: number;
  dimension?: string;
  constructor(
    passengers: number,
    vinNumber: number,
    year: number,
    model: string,
    price: number,
    dimension?: string
  ) {
    super(vinNumber, year, model, price);
    this.passengers = passengers;
    this.dimension = dimension;
  }
}

// class Sedan {
//   zeroToOneHundred: number;
//   consumptionPerOneHundredKM: number;
//   tireSize?: number;
//   color?: string;
//   constructor(
//     zeroToOneHundred: number,
//     consumptionPerOneHundredKM: number,
//     tireSize?: number,
//     color?: string
//   ) {
//     this.zeroToOneHundred = zeroToOneHundred;
//     this.consumptionPerOneHundredKM = consumptionPerOneHundredKM;
//     this.tireSize = tireSize;
//     this.color = color;
//   }
// }
