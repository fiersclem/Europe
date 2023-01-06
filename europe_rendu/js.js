const btnBox = document.getElementById('togg1');
const btnLessBox = document.getElementById('togg2');
const bioBox = document.getElementById('d1');
btnLessBox.style.display = 'none'

btnBox.addEventListener('click', () => {
  btnBox.style.display = 'none';

  bioBox.style.display = 'block';

  btnLessBox.style.display = 'block';

});

btnLessBox.addEventListener('click' , () => {
  btnBox.style.display = 'block';

  bioBox.style.display = 'none';

  btnLessBox.style.display = 'none';

})