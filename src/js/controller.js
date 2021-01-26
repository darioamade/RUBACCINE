// const hero = document.querySelector('.hero');
// const hoveruv = document.querySelector('.hoveruv');
// const search = document.querySelector('.search');
// const overlay = document.querySelector('.overlay-1');
// const emailThick = document.querySelector('.text-thiny');
// const signIn = document.querySelector('#footer-newsletter-email');

// const footer = document.querySelectorAll('.nav__list-footer-2');
// const iconFooterOpen = document.querySelector('#dario');

// const dual = function () {
//   search.classList.toggle('hidden');
//   overlay.classList.remove('hidden');
// };

// hoveruv.addEventListener('mouseenter', dual);
// signIn.addEventListener('click', function (e) {
//   e.preventDefault();
//   emailThick.classList.remove('hidden');
// });

// const openFooter = function(){
//   console.log('dskuvilnd');
// }

// const amade = document.querySelector('.nav__list-footer');

// iconFooterOpen.addEventListener('click', function (e){
//   const clicked = e.target.closest('.nav__list-footer-2')

//   clicked.classList.add('operations__tab--active');
// })

// iconFooterOpen.addEventListener('click', function(e){
//   const

// })

/* 



tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
*/

/*  FORM DROWDOWN-SIZE */
/* 
const selected = document.querySelector('.selected');
const optionsConatiner = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');
const sameSize = document.querySelector('.same-size');
const sizeGuide = document.querySelector('.size-guide');
const btnNotClear = document.querySelector('.btn-not-clear');
const btnReset = document.querySelector('.reset-size-details');

selected.addEventListener('click', function () {
  optionsConatiner.classList.toggle('active');
  sizeGuide.innerHTML = '';
  btnNotClear.style.display = 'none';
});

optionsList.forEach(el => {
  el.addEventListener('click', () => {
    selected.innerHTML = el.querySelector('label').innerHTML;
    optionsConatiner.classList.remove('active');
    sameSize.innerHTML = '';
    sameSize.innerHTML = selected.innerHTML;
    btnNotClear.style.display = 'inline';
    btnNotClear.style.cursor = 'pointer';
    btnNotClear.style.backgroundColor = 'black';
  
  });
});

btnReset.addEventListener('click', function () {
  selected.innerHTML = '-';
  sameSize.innerHTML = '';
  btnReset.innerHTML = 'EDIT DETAILS';
  btnNotClear.style.display = 'inline';
  btnNotClear.style.cursor = 'not-allowed';
  btnNotClear.style.backgroundColor = '#ddd';
 
}); */

//closest




