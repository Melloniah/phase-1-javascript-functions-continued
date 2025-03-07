function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"));
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
console.log(saturday("work from home."));
function wrapAdjective(wrapper = "*") {
  return function (adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
