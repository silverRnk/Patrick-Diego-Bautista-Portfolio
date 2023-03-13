let slideButton = document.querySelectorAll('.slide-item-btn');
const slide = document.querySelector("#inner");

slideButton = Array.from(slideButton)

slideButton.forEach((element, index) => {
  element.addEventListener('click', () => {
    slide.style = `margin-left:${-(index * 100)}%`;
    updateSelection(slideButton, index);
  })
})


function updateSelection(btns, index){
  btns.forEach(element => {
    element.querySelector('.selection-indicator').classList.remove('selected');
  });

  btns[index].querySelector('.selection-indicator').classList.add('selected');
}