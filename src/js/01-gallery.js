// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const imagesList = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", imagesList);

new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});

