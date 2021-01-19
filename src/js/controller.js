const hero = document.querySelector('.hero');
const hoveruv = document.querySelector('.hoveruv');
const search = document.querySelector('.search');
const overlay = document.querySelector('.overlay-1');
const dual = function () {
  search.classList.toggle('hidden');
  overlay.classList.remove('hidden');
};

hoveruv.addEventListener('mouseenter', dual);
