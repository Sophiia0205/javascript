'use strict';

import images from './images.js';

const imgAlt = images.map((image) => image.description);
const imgSrc = images.map((image) => image.original);

const getGallery = images.map((image) => {
  const liUl = document.createElement('li');
  const aUl = document.createElement('a');
  const img = document.createElement('img');
  aUl.href = image.original;
  img.src = image.preview;
  img.alt = image.description;
  liUl.insertAdjacentHTML(
    'afterbegin',
    `<a
        class="gallery__link"
        href='#'
      >
        <img
          class="gallery__image"
          src='${img.src}'
          data-source='${img.dataset.original}'
          alt='${img.alt}'
        />
      </a>
    `
  );
  liUl.classList.add('gallery__item');
  liUl.addEventListener('click', () => {
    img.dataset.source = image.original;
  });
  return liUl;
});

const ulGa = document.querySelector('.js-gallery');
ulGa.append(...getGallery);

const closeModal = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const overlay = document.querySelector('.lightbox__content');
const changeSrc = document.querySelector('.lightbox__image');
const back = document.querySelector('.lightbox');

ulGa.addEventListener('click', handleOpenModal);
closeModal.addEventListener('click', handleCloseModal);
overlay.addEventListener('click', handleOverlayClick);

function handleOpenModal(e) {
  back.classList.add('is-open');
  let changeSrcAlt = e.target.alt;
  let imgIndex = imgAlt.indexOf(changeSrcAlt);
  changeSrc.setAttribute('src', `${imgSrc[imgIndex]}`);
  changeSrc.setAttribute('alt', `${imgAlt[imgIndex]}`);
  window.addEventListener('keydown', handleKeyPress);
}

function handleCloseModal() {
  back.classList.remove('is-open');
  changeSrc.removeAttribute('alt');
  changeSrc.removeAttribute('src');
  window.removeEventListener('keydown', handleKeyPress);
}

function handleOverlayClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target !== e.currentTarget) {
    return;
  }
  handleCloseModal();
}

function handleKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  handleCloseModal();
}
