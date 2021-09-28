const person = {
  firstName: 'Crash',
  lastName: 'Override',
  hobby: 'h4ck1ng 7h3 p14n3t'
};
console.log(person);
var fullName = 'Crash' + ' Override';
// var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);
person.job = '1337 h4x0r';
console.log("The person's current job is: ", person.job);
person.previousJob = 'script kiddie';
console.log("The person's previous job is: ", person.previousJob);
console.log('The complete person object: ', person);
