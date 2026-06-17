const rightAnswer = 2;
const mask = document.getElementById('mask');
const popText = document.getElementById('popText');
const closePop = document.getElementById('closePop');
const optionItems = document.querySelectorAll('.option-item');

optionItems.forEach(item => {
  item.addEventListener('click', () => {
    const userSelect = Number(item.dataset.ans);
    mask.style.display = 'flex';
    if(userSelect === rightAnswer){
      popText.innerHTML = '✅ 回答正确！';
    }else{
      popText.innerHTML = '❌ 回答错误<br>正确答案：swing';
    }
  })
})

closePop.addEventListener('click', () => {
  mask.style.display = 'none';
})
