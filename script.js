// document.querySelector('a').addEventListener('click', function(event) {
//    event.preventDefault();
//    this.textContent = "Yandax";
// });
// document.querySelector('a').addEventListener('contextmenu', function(event) {
//    event.preventDefault();
//    this.style.background ="red";
// });
// document.querySelector('a').addEventListener('dblclick', function(event) {
//    event.preventDefault();
//    this.remove();
// });



document.querySelector('div').addEventListener('click', function(event) {
   event.preventDefault();
   div.style.height = '50px';
   div.style.whith = '50px';
   div.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});



