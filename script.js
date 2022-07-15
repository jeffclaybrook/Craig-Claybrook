const body = document.body;
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal-body');
const watchBtn = document.querySelector('#watch-video');

let scrollY;

const openModal = (e) => {
   modal.classList.remove('hidden');
   scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
   body.style.position = 'fixed';
   body.style.top = `-${scrollY}`;
   e.stopPropagation();
}

const closeModal = () => {
   scrollY = body.style.top;
   body.style.position = '';
   body.style.top = '';
   window.scrollTo(0, parseInt(scrollY || '0') * -1);
   modal.classList.add('hidden');
}

window.addEventListener('scroll', () => {
   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})

watchBtn.addEventListener('click', openModal);
document.addEventListener('click', closeModal);