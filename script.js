'use strict';

const oneWord = function (str) {
  return str.replaceAll(' ', '');
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};
transformer('JavaScript is the best! ', oneWord);

const high5 = function () {
  console.log('👋');
};
document.querySelector('body').addEventListener('click', high5);

['Jonas', 'Smith'].forEach(high5);
