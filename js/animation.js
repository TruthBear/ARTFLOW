// 모바일 토글 메뉴

const menuBtn = document.getElementsByClassName('menu-btn')[0];

menuBtn.addEventListener('click', ()=>{
  const gnbMo = document.getElementsByClassName('gnb-mo')[0];
  const headerWrap = document.getElementsByClassName('header-wrap')[0];
  gnbMo.classList.toggle('show');
  headerWrap.classList.toggle("border-bottom");
  headerWrap.classList.toggle('white');
})


// 메뉴 - 스크롤 감지

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const headerWrap = document.getElementsByClassName('header-wrap')[0];
  const gnbMo = document.getElementsByClassName('gnb-mo')[0];

  if(!gnbMo.classList.contains('show')){
    if (currentScrollY > 70) {
      if (currentScrollY < lastScrollY) {
        headerWrap.style.opacity = "1"; 
      } else {
        
        headerWrap.style.opacity = "0"; 
      }
    } else {
      headerWrap.style.opacity = "1"; 
    }
  }

  lastScrollY = currentScrollY;
});



