'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.querySelector('#target');

for (let i = 0; i < students.length; i++) {
  let element = document.createElement('option');
  element.value = students[i].id;
  element.textContent = students[i].name;
  targetElement.appendChild(element);
}
