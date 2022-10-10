// code your solution here
const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`;
};
console.log(saturdayFun());

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());

function wrapAdjective(result = "*") {
  return function (emphatic = "a hard worker") {
    return `You are ${result}${emphatic}${result}!`;
  };
}

console.log(wrapAdjective()());
