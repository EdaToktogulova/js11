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



document.body.addEventListener('click', function(event) {
   let div = document.createElement('div');
   document.body.append(div);

   let size = (Math.random() * 50).toFixed(0);
   let half = size / 2;

});




let list = [
   'Apple', 'Banana', 'Cherry'
];
let 