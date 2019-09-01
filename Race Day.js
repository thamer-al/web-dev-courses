let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 36 ;

if(early && age > 18){
  raceNumber += 1000;

  if(early && age > 18)
  console.log(`The race will begin at: 9:30 a.m your number is: ${raceNumber}`);
}else if ( !early && age >18) {
    console.log(`The race will begin at: 11:00 a.m , your number is: ${raceNumber}`);
}else if(age<18){
    console.log(`The race will begin at: 12:30 p.m , your number is: ${raceNumber}`)}
else {
console.log(`see the registrattion desk`)
  
}

