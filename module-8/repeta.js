'use strict';
// /* <div class="lightbox js-lightbox">
//       <div class="lightbox__overlay"></div>

//       <div class="lightbox__content">
//         <img class="lightbox__image" src="" alt="" />
//       </div>

//       <button
//         type="button"
//         class="lightbox__button"
//         data-action="close-lightbox"
//       ></button>
// </div> */

const openModal = document.querySelector('gallery__item');
const closeModal = document.querySelector('button[data-action="close-modal"]');
openModal.addEventListener('click', handleOpenModal);
closeModal.addEventListener('click', handleCloseModal);

function handleOpenModal() {
  document.body.classList.add('is-open');
  document.body.classList.add('js-lightbox');
}
function handleCloseModal() {
  document.body.classList.remove('lightbox__overlay');
}
