import { galleryItems } from './gallery-items.js';

const galeryListOfImagesEl = document.querySelector('.gallery');
const imageItemsMarkup = createImageMarkup(galleryItems);

function createImageMarkup(items) {
      return items.map( item =>
      `
      <a class="gallery__link" href="${item.original}" onclick="return false">
        <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
        />
</a>
    `).join('')
  }
galeryListOfImagesEl.innerHTML = imageItemsMarkup;

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
     captionDelay: 250,
     })
