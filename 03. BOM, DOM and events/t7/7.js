'use strict';

const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

trigger.addEventListener('mouseenter', function(evt){
    target.src = "img/picB.jpg";
});

trigger.addEventListener('mouseleave', function (evt) {
    target.src = "img/picA.jpg";
})