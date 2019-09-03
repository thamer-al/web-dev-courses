const getSleepHours = (day) =>
{
 if(day === 'monday'){
   return 8;
 } else if (day === 'tuesday'){
   return 6;
 }else if(day === 'wednesday'){
    return 5;
 }else if(day === 'thursday'){
    return 8;
  }else if (day === 'friday'){
    return 8;
  }else if (day === 'saturday'){
    return 10;
  }else if (day === 'sunday'){
    return 17;
  }
  else {
    console.log('Error!');
  }
  };

 const getActualSleepHours = () =>
8 + 6 + 5 + 8 + 8 + 10 + 17;

const getIdealSleepHours = () => {
let idealHours = 8;
return idealHours * 7;
};
 
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log("You got it");
} 
  
  else if (actualSleepHours > idealSleepHours) {
  console.log("You got" + " " +(actualSleepHours - idealSleepHours) + " sleep more than you need");
}
  
  else if (actualSleepHours < idealSleepHours){
    console.log("you got " +(idealSleepHours - actualSleepHours) + " " +  "hours less sleep than you need. Get some rest");
  }
  else{
    console.log("check your code")
  }
} 
calculateSleepDebt()
