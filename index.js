// code your solution here
function saturdayFun(activity = 'roller-skate') {
      return `This Saturday, I want to ${activity}!`;
};
 console.log(saturdayFun('sing'));


const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork('learn'));

function wrapAdjective(){
    // return `$('You are ')*${special}*!`;
    // return `${"You are "}||${'a dedicated programmer'}||!`;
    return function (special = "*") {
        return `${"You are "}*${special}*!`;
    };   
  }
  console.log(wrapAdjective()("a hard worker"));
 


