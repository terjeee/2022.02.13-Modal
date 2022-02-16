'use strict';

const modal = document.querySelector(`.modal`);
const overlayModal = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

function openModal() {
  modal.classList.remove(`hidden`);
  overlayModal.classList.remove(`hidden`);
}
function closeModal() {
  modal.classList.add(`hidden`);
  overlayModal.classList.add(`hidden`);
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal); // open  Modal
}

btnCloseModal.addEventListener(`click`, closeModal); // close Modal
overlayModal.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
