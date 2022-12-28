import { galleryItems } from './gallery-items.js';

const galeryListOfImagesEl = document.querySelector('.gallery');
const imageItemsMarkup = createImageMarkup(galleryItems);

function returnUrlOfBiggestImg(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return
     }
    const bigImg = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
  `) 
    bigImg.show();
  
    document.addEventListener('keydown', event => {
        if(event.code === 'Escape') {
            bigImg.close();
        }
    })
    
}

galeryListOfImagesEl.addEventListener('click', returnUrlOfBiggestImg)

function createImageMarkup(items) {
      return items.map( item =>
      `
      <div class="gallery__item">
      <a class="gallery__link" href="${item.original}" onclick="return false">
        <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
        />
</a>
</div>
    `).join('')
  }
galeryListOfImagesEl.innerHTML = imageItemsMarkup;





