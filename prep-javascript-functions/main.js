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
