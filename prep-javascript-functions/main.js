function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('the addTwoNumbers function gives a sum of', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('the convertHoursToMinutes function returned: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greet = getGreeting('World');
console.log('the getGreeting function says: ', greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMult = addAndMultiplyBy5(10, 5);
console.log('the addAndMultiplyBy5 function returned: ', addAndMult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multAndDiv = multiplyAndDivideBy5(35, 10);
console.log('the multiplyAndDivideBy5 function returned: ', multAndDiv);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract2 = subtractTwoNumbers(22, 7);
console.log('the subtractTwoNumbers function returned: ', subtract2);
