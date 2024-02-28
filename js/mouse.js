const cursor = document.getElementsByClassName('cursor')[0];

document.addEventListener("mousemove", (e)=>{
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
})

document.addEventListener("mouseleave", ()=>{
  cursor.classList.add('hidden')
})
document.addEventListener("mouseenter", ()=>{
  cursor.classList.remove('hidden')
})

const hover = document.getElementsByTagName('a');

for(let i=0;i<hover.length;i++){
  hover[i].addEventListener('mouseover', ()=>{
    cursor.classList.add('hover');
  })
}

for(let i=0;i<hover.length;i++){
  hover[i].addEventListener('mouseout', ()=>{
    cursor.classList.remove('hover');
  })
}