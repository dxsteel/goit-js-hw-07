import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector('.gallery');

const createPhotoCardMarkup = galleryItems.map(({ preview, original, description }) => {
    return `   
     <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
}).join('');
let instance;

galleryCards.insertAdjacentHTML('afterbegin', createPhotoCardMarkup);
galleryCards.addEventListener('click', onGalleryCardClick);

function onGalleryCardClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    };
    const url = originalImage(evt);
    instance = modal(url)

    instance.show(window.addEventListener('keydown', escClick))

};

function modal(url) {
    return basicLightbox.create(`
    <img src="${url}">
  `,
        {
            onClose: () => {
                window.removeEventListener('keydown', escClick);
            }
        }
    );
};

function originalImage(e) {
    return e.target.dataset.source;
};

function escClick(e) {
  const isEsc = e.code !== 'Escape';

  if (isEsc) {
    return
  };

  instance.close();
}
