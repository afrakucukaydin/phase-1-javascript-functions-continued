// code your solution here
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (symbol = "*") => {
  return function(adjective = "special") {
    return `You are ${symbol}${adjective}${symbol}!`;
  }
}

