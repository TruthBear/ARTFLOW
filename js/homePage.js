
const homePage = () => {
  const wrap = document.createElement('div');
  wrap.style.background = '#fff';
  wrap.style.position = 'fixed';
  wrap.style.width = '100%';
  wrap.style.height = '100%';
  wrap.style.left = '0';
  wrap.style.right = '0';

  // 가로 무한 슬라이드
  const slider = document.createElement('div');
  slider.classList.add('slider');

  const slideTrack = document.createElement('div');
  slideTrack.classList.add('slide-track');

  const slideArr = ["A R T F L O W", "A R T F L O W"];
  slideArr.forEach((item)=> {
    const slide = document.createElement('div');
    slide.textContent = item;
    slide.classList.add('slide');
    slideTrack.appendChild(slide);
  })

  slider.appendChild(slideTrack);

  wrap.appendChild(slider);


  // 동그라미 버튼
  const circleBox = document.createElement('div');
  circleBox.classList.add('circle-box');

  const circleBoxWrap = document.createElement('div');
  circleBoxWrap.classList.add('circle-box-wrap');

  const circleTextArr = ["공연", "시설", "About"];

  circleTextArr.forEach(item => {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const circleWrap = document.createElement('div');
    circleWrap.classList.add('circle-wrap');

    const circleText = document.createElement('a');
    circleText.classList.add('circle-text');
    circleText.textContent = item;

    circleWrap.appendChild(circleText);
    circle.appendChild(circleWrap);
    circleBoxWrap.appendChild(circle);
  })

  circleBox.appendChild(circleBoxWrap);
  wrap.appendChild(circleBox);


  return wrap;
} 

export default homePage;