function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var toAdd = document.createDocumentFragment();
function IntervalCreateDiv() {
   var newDiv = document.createElement('div');
   newDiv.innerText = getRandomIntInclusive(0, 20);
   newDiv.className = 'element';
   toAdd.appendChild(newDiv);
   console.log(newDiv);
   var parentDiv = document.getElementById('container');
   parentDiv.appendChild(toAdd);
}
setInterval(IntervalCreateDiv, 5000);