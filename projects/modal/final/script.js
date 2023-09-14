const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('.show-modal');

for (let i = 0; i < buttons.length; i++)
  buttons[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

modal.addEventListener('click', function (e) {
  console.log(e);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' ) {
    if (!modal.classList.contains('hidden')) {
      hideModal();
    }
  }
});
// console.log(buttons)
// console.log(modal, overlay, closeModal)
