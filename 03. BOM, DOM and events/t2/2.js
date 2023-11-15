const targetElement = document.querySelector('#target');

var items = ['First item', 'Second item', 'Third item'];

items.forEach(function (itemText) {
    var liElement = document.createElement('li');
    liElement.textContent = itemText;

    if (itemText == 'Second item') {
        liElement.classList.add('my-item');
    }

    targetElement.appendChild(liElement);

});