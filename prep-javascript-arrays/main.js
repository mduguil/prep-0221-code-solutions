let languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languagesArray);
console.log(languagesArray.length);

languagesArray.push('C#', 'php');
console.log(languagesArray);

languagesArray.pop();
console.log(languagesArray);

languagesArray.unshift('C++');
console.log(languagesArray);

languagesArray.shift();
console.log(languagesArray);

let thirdElement = languagesArray[2];
console.log(thirdElement);

let arrayLength = languagesArray.length;
console.log(arrayLength);

let lastItem = languagesArray[arrayLength - 1];
console.log(lastItem);
