import cursor from './mouse.js'

const homePage = () => {
  const wrap = document.createElement('div');
  wrap.classList.add('home-wrap');

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

  const circleTextArr = [
    {
      route: "#about",
      text: "About",
    },
    {
      route: "#artsPerformance",
      text: "공연",
    },
    {
      route: "#facility",
      text: "시설",
    },
  ];

  let tumpArr = [];
  let i = 0;

  circleTextArr.forEach(item => {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const circleWrap = document.createElement('div');
    circleWrap.classList.add('circle-wrap');

    const circleText = document.createElement('a');
    circleText.setAttribute("href", item.route);
    circleText.classList.add('circle-text');
    circleText.textContent = item.text;

    tumpArr[i] = circleText;
    i++;

    circleText.addEventListener('mouseover', ()=>{
      cursor.classList.add('hover');
      circle.style.background = "none"
    })

    circleText.addEventListener('mouseout', ()=>{
      cursor.classList.remove('hover');
      circle.style.background = "#000"
    })

    circleWrap.appendChild(circleText);
    circle.appendChild(circleWrap);
    circleBoxWrap.appendChild(circle);
  })

  

  circleBox.appendChild(circleBoxWrap);
  wrap.appendChild(circleBox);

  for(let i=0; i<tumpArr.length; i++){
    const circle = document.createElement('div');
    circle.classList.add('bg')
    circle.classList.add(`circle${i}`);

    const videoWrap = document.createElement('div');

    const video = document.createElement('video');
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("loop", "");
    
    const source = document.createElement('source');
    source.setAttribute("src", `../asset/video/bg-${i}.mov`);
    source.setAttribute("type", "video/mov");

    video.appendChild(source);
    videoWrap.appendChild(video);
    circle.appendChild(videoWrap);
    wrap.appendChild(circle);

    console.log(tumpArr[i]);

    tumpArr[i].addEventListener('mouseover', ()=>{
      circle.classList.add('bg-show')
    })

    tumpArr[i].addEventListener('mouseout', ()=>{
      circle.classList.remove('bg-show')
    })

  }

  return wrap;
} 

export default homePage;