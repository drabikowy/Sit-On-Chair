document.addEventListener('DOMContentLoaded', function() {

   var type = document.getElementById('type');
   var color = document.getElementById('color');
   var material = document.getElementById('material');


   var typeSpan = document.querySelector('.panel_left .title');
   var typeVal = document.querySelector('.panel_right .title');

   var colorSpan = document.querySelector('.panel_left .color');
   var colorVal = document.querySelector('.panel_right .color');

   var materialSpan = document.querySelector('.panel_left .pattern');
   var materialVal = document.querySelector('.panel_right .pattern');

   var transportSpan = document.querySelector('.panel_left .transport');
   var transportVal = document.querySelector('.panel_right .transport');

   var drop = Array.from(document.querySelectorAll('.drop_down_list'));
   var listElements = Array.from(document.querySelectorAll('.drop_down_list li'));

   var checkbox = document.querySelector('#transport');

var sum = document.querySelector('.sum strong');

// definiuję funkcję do zliczania i aktualizacji ceny w polu 'suma'
function sumCheck () {
   var tmp = Number(transportVal.innerText) + Number(typeVal.innerText) + Number(materialVal.innerText) + Number(colorVal.innerText);
   sum.innerText = tmp;
}


   // pokazanie/ukrycie dropdown list:
   drop.forEach(function(element){
      element.addEventListener('click', function(e) {
         this.querySelector('.list_panel').classList.toggle('visible');
      });
   })


//dodaję eventy do każdego elementu listy (li), aby zbierać z nich dane, które mam wpisać w polu summary.

   listElements.forEach(function(el){
      el.addEventListener('click', function(e) {
         var attribute = this.parentElement.parentElement.getAttribute('id');
         switch (attribute) {
            case 'color':
               colorSpan.innerText = this.innerText;
            // (W kodzie html do każdego elementu listy dodałem dataset, który zawiera cenę(danego typu fotela, koloru i materiału);
               colorVal.innerText = this.dataset.price;
               console.log(this.dataset.price);
               break;
            case 'material':
               materialSpan.innerText = this.innerText;
               materialVal.innerText = this.dataset.price;
               break;
            case 'type':
               typeSpan.innerText = this.innerText;
               typeVal.innerText = this.dataset.price;
               break;
            default:
            console.log('default');
         }
         sumCheck();
      });
   });

// event dla checkboxa:
   transport.addEventListener('change', function(e) {
      if (transport.checked) {
         transportSpan.innerText = 'Transport';
         transportVal.innerText = this.dataset.transportPrice;
      }else {
         transportVal.innerText =' ';
         transportSpan.innerText=' ';
      }
      sumCheck();
   });









});
