/* const hero = document.querySelector('.hero');
const hoveruv = document.querySelector('.hoveruv');
const search = document.querySelector('.search');
const overlay = document.querySelector('.overlay-1');
const emailThick = document.querySelector('.text-thiny');
const signIn = document.querySelector('#footer-newsletter-email');

const footer = document.querySelectorAll('.nav__list-footer-2');
const iconFooterOpen = document.querySelector('#dario');

const dual = function () {
  search.classList.toggle('hidden');
  overlay.classList.remove('hidden');
};

hoveruv.addEventListener('mouseenter', dual);
signIn.addEventListener('click', function (e) {
  e.preventDefault();
  emailThick.classList.remove('hidden');
});

const openFooter = function(){
  console.log('dskuvilnd');
}

const amade = document.querySelector('.nav__list-footer');

iconFooterOpen.addEventListener('click', function (e){
  const clicked = e.target.closest('.nav__list-footer-2')

  clicked.classList.add('operations__tab--active');
})

iconFooterOpen.addEventListener('click', function(e){
  const

}) */

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

//NOTE switch-single-page to Double
const swicthSingle = document.querySelector('.switch-single-page');
const swicthDouble = document.querySelector('.switch-double-page');
const colorDisplay = document.querySelector('.colorDisplay');

const gridImage = document.querySelectorAll(
  '.showcase-container-gallery-grid-item'
);
let sizeSlider = document.querySelector('.size-slider');
const galleryGrid = document.querySelectorAll(
  '.showcase-container-gallery-grid'
);

galleryGrid.forEach(el => {
  swicthDouble.addEventListener('click', function () {
    el.classList.add('change-to-double-view');
  });
});
galleryGrid.forEach(el => {
  swicthSingle.addEventListener('click', function () {
    el.classList.remove('change-to-double-view');
  });
});

//NOTE Hover on mouse enter

gridImage.forEach(el => {
  el.addEventListener('mouseenter', addSlider);
});
gridImage.forEach(el => {
  el.addEventListener('mouseleave', removeSlider);
});

function addSlider(e) {
  console.log('IN');
  if (e.target === e.currentTarget) {
    // sizeSlider.forEach(e => {
    // sizeSlider = e.target
    sizeSlider.style.visibility = 'visible';
    sizeSlider.style.opacity = '1';
    sizeSlider.style.transform = 'translate(0,0)';

    // })
  }
  e.stopPropagation();
}

function removeSlider() {
  
  sizeSlider.style.visibility = 'hidden';
  sizeSlider.style.opacity = '0';
  sizeSlider.style.transform = 'translate(0,100%)';
  // console.log('OUT NOW');
}

// const theTarget = gridImage;
// console.log(theTarget.length);

// gridImage.forEach( el => {

// el.addEventListener('mouseenter', function (){
//   sizeSlider.style.visibility = 'visible';
//   sizeSlider.style.opacity = '1';
//   console.log('in');
// })
// })
// gridImage.forEach( el => {

// el.addEventListener('mouseleave', function (){
//   sizeSlider.style.visibility = 'none';
//   sizeSlider.style.opacity = '0';
//   console.log('leave');
// })
// })

// gridImage.forEach(el => {
//   console.log(el);
//   el.addEventListener('mouseenter', function (_, i){
//     sizeSlider.style.visibility = 'visible';
//     sizeSlider.style.opacity = '1';
//     console.log('siuhds');

//   })
// el.addEventListener('mouseenter', function (e) {
//   if (!theTarget.length > 1) return;
//   sizeSlider.forEach(e => {
//     e.style.visibility = 'visible';
//     e.style.opacity = '1';
//   });
// });
// });

// gridImage.forEach(el => {
//   colorDisplay.innerHTML = ` <p class="text-thinny">1 COLOUR</p>`;
//   el.addEventListener('mouseleave', function () {
//     sizeSlider.forEach(e => {
//       e.style.visibility = '';
//       e.style.opacity = '';
//     });
//   });
// });

// colorDisplay.addEventListener('mouseenter', function (e) { //BUG
//   e.target.style.display = 'none';
//   if(!e.target.style.display === '') return
//   e.target.insertAdjacentHTML(
//     'afterend',
//     `<p class="one-color">
//       <span class="thinny-square">
//         <img src="/src/img/pic-29.jpg" alt="Clothing" class="clothing-img">
//       </span>
//       <span class="text-thinny" >RED</span>
//     </p>`
//   );
// });

// colorDisplay.addEventListener('mouseleave', function (e) {

//   e.target.style.display = 'inline';
// });


const amazon = document.querySelector('#AmazonPayButton');

amazon.addEventListener('click', function(){
  console.log('hey');
})