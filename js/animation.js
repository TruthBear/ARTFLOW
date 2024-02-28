const menuBtn = document.getElementsByClassName('menu-btn')[0];

menuBtn.addEventListener('click', ()=>{
  const gnbMo = document.getElementsByClassName('gnb-mo')[0]
  gnbMo.classList.toggle('hidden')
})