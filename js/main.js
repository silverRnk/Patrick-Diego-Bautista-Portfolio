let slideButton = document.querySelectorAll('.slide-item-btn');
const slide = document.querySelector("#inner");
const contactButton = document.querySelector('#contact-me');
const closeContactBtn = document.querySelector('#close-btn');
const contactCard = document.querySelector('#contact-card');

slideButton = Array.from(slideButton);

updateSelection(slideButton, 0);

slideButton.forEach((element, index) => {
  element.addEventListener('click', () => {
    slide.style = `margin-left:${-(index * 100)}%`;
    updateSelection(slideButton, index);
  })
})

contactButton.addEventListener('click', () => {
  contactCard.classList.toggle('hide-card');
});

closeContactBtn.addEventListener('click', () => {
  contactCard.classList.add('hide-card');
});





function updateSelection(btns, index){
  btns.forEach(element => {
    element.querySelector('.selection-indicator').classList.remove('selected');
  });

  btns[index].querySelector('.selection-indicator').classList.add('selected');
}