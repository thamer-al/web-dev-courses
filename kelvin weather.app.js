//the value of kelvin//
const kelvin= 275 ;
//the value of celsius//
const celsius = kelvin- 273;
//the value of fahrenheit//
let fahrenheit = celsius * (9 / 5) + 32;
//redondeo del fahrenheit
fahrenheit = Math.floor(fahrenheit);
let newton = celsius * (33 / 100)
console.log(`The temperature is ${newton} degrees Fahrenheit.`);
