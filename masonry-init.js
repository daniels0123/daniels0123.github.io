var elem = document.querySelector('.grid');

var gridItems = elem.querySelectorAll('.grid-item');
var tempElement;

for (var i = 0; i < gridItems.length; i++) {
  tempElement = gridItems[i];
  if (i % 4 === 0) {
    tempElement.classList.add('grid-item-wide');
  }

  if (i % 7 === 0) {
    //tempElement.classList.add('grid-item-wider');
  }
}


var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
