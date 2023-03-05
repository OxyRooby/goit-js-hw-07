import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryCard = ({preview, original, description}) => `<li class="gallery-item">
<a class="gallery-link" href="${original}">
<img class="gallery-image" loading="lazy" src="${preview}" data-sourse="${original}" alt="${description}" width=350>
</li>`

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map((data) => makeGalleryCard(data)).join('');
galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.sourse}">
    </div>
    `)

    instance.show();

    const escHandler = event => {
        console.log(event.key);
        if (event.key !== 'Escape') { return; }
        
        instance.close();

        window.removeEventListener('keydown', escHandler);
    };

    window.addEventListener('keydown', escHandler);

});
