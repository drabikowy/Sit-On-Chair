document.addEventListener('DOMContentLoaded', function() {

   // ZADANIE 1:
   var menuLinks = Array.from(document.querySelectorAll('#main__menu a:first-child'));
   var subMenu = document.querySelector('.main__menu__sub');

   console.log(menuLinks);



   menuLinks.forEach(function(element){
      element.addEventListener('mouseover', function(e) {

         subMenu.classList.remove('hidden');

         subMenu.addEventListener('mouseover', function(ev) {
            this.classList.remove('hidden');
         });
         subMenu.addEventListener('mouseout', function(ev){
            subMenu.classList.add('hidden');
         });
      });

      element.addEventListener('mouseout', function(e){

         subMenu.classList.add('hidden');


      });
   });

});


// ZADANIE 2:

var chairsContainers = Array.from(document.querySelectorAll('.chairs__container'));

chairsContainers.forEach(function(element){
   element.addEventListener('mouseover', function(e){
      if (this.querySelector('div')) {
         this.querySelector('div').classList.add('hidden');
      }
   });

   element.addEventListener('mouseout', function(e){
      if (this.querySelector('div')) {
         this.querySelector('div').classList.remove('hidden');
      }
   });
});





//ZADANIE 3:

var prev = document.getElementById('slider__left');
var next = document.getElementById('slider__right');

var sliders = Array.from(document.querySelectorAll('#slider__container > article'));

// stowrzyłem sobie 3 sekcje article, które zawierają poszczególne stany slidera (1, 2, 3) - pozmieniałem zdjęcia fotela i tekst// aby widoczny byl tylko pierwszy stan slidera, ukryłem dwa pozostałe poprzez klasę displayNone, z ustawionym atrybutem display:none;

//tworzę zdarzenie dla guzika Next:
next.addEventListener('click', function(e){

// robię pętlę którą sprawdzam który element jest aktualnie widoczny (nie posiada klasy displayNone), następnie dodaję mu tę klasę.

   for (var i=0; i<sliders.length; i++) {
      if (sliders[i].className !== 'displayNone') {
         console.log(sliders[i]);
         sliders[i].classList.add('displayNone');

// teraz, jeżeli to ostatni stan slidera jest aktualnie widoczny, to muszę wrócić do pierwszego i jemu zabrać klasę displayNone:
         if (i == sliders.length-1) {
            sliders[0].classList.remove('displayNone');
            break;
            //...jeżeli nie, to po prostu kolejnemu elementowi zabieram klasę displayNone:

         }else {
            sliders[i+1].classList.remove('displayNone');
            break;

            //za każdym razem po pokazaniu elementu zatrzymuję pętlę, aby już dalej nie sprawdzała.
         }
      }
   }
})


//adekwatnie do powyższego, tylko że kalsę odejmuję poprzednim elementom, nie następnym.
prev.addEventListener('click', function(e){

   for (var i=0; i<sliders.length; i++) {
      if (sliders[i].className !== 'displayNone') {
         console.log(sliders[i]);
         sliders[i].classList.add('displayNone');

         if (i == 0) {
            sliders[sliders.length-1].classList.remove('displayNone');
            break;
         }else {
            sliders[i-1].classList.remove('displayNone');
            break;
         }
      }
   }
})

//DROPDOWN LIST:



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
