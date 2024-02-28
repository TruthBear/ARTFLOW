
const homePage = () => {
  const wrap = document.createElement('div');
  wrap.classList.add('bg-video')

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

  return wrap;
} 

export default homePage;