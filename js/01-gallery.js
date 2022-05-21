import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesListMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesListMarkup(items) {
  return items.map(({preview, original, description}) => {
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
`})
.join("")
}

const links = galleryContainer.querySelectorAll('.gallery__link');

links.forEach(el => el.addEventListener('click', e => e.preventDefault()));

galleryContainer.addEventListener('click', onImageClick)

function onImageClick(event) {
    if (event.target.nodeName === "IMG") {

      const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `, {
        onShow: () => document.addEventListener('keydown', event => { if (event.key === "Escape") {instance.close()}}),
        onClose: () => document.removeEventListener('keydown', event => { if (event.key === "Escape") {instance.close()}})
      })

    instance.show();
  
    }
    event.stopPropagation();
}






