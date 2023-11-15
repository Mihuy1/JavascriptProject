'use strict';
const names = ['John', 'Paul', 'Jones'];


let html = '';

for (var i = 0; i < names.length; i++) {
    html += '<li>' + names[i] + '</li>';
}

document.querySelector('#target').innerHTML = html;
