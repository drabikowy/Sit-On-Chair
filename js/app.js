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
