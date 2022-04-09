import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector('.gallery');
const createPhotoCardMarkup = galleryItems.map(({ preview, original, description }) => {
    return `   
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
}).join('');

galleryCards.insertAdjacentHTML('afterbegin', createPhotoCardMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,

});