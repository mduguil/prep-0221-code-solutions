let person = {
  firstName: 'Beyonce',
  lastName: 'Knowles-Carter',
  hobby: 'singing'
};
console.log(person);

let fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is: ${fullName}.`);

person.job = 'Artist';
console.log(`The person's current job is: ${person.job}.`);

person.previousJob = 'She is Beyonce';
console.log(`The person's previous job is: ${person.previousJob}.`);

console.log(person);

let myCar = {
  make: 'Rolls-Royce',
  model: 'Phantom',
  year: '2020'
};
console.log(myCar);

myCar['owner'] = fullName;
console.log(`My name is ${fullName} and I drive a ${myCar['year']} ${myCar['make']} ${myCar['model']}.`);

myCar['color'] = 'Champagne Pink';
console.log(myCar);
