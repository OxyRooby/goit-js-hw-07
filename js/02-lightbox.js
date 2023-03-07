import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryCard = ({preview, original, description}) => `
<a class="gallery-link" href="${original}">
<img class="gallery-image" loading="lazy" src="${preview}" data-sourse="${original}" alt="${description}" width=350>
`

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map((data) => makeGalleryCard(data)).join('');
galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox(".gallery a", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
   

