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

// a태그 호버 
const hoverTagA = document.getElementsByTagName('a');
for(let i=0;i<hoverTagA.length;i++){
  hoverTagA[i].addEventListener('mouseover', ()=>{
    cursor.classList.add('hover');
  })
}
for(let i=0;i<hoverTagA.length;i++){
  hoverTagA[i].addEventListener('mouseout', ()=>{
    cursor.classList.remove('hover');
  })
}

// button태그 호버
const hoverTagButton = document.getElementsByTagName('button');

for(let i=0;i<hoverTagButton.length;i++){
  hoverTagButton[i].addEventListener('mouseover', ()=>{
    cursor.classList.add('hover');
  })
}
for(let i=0;i<hoverTagButton.length;i++){
  hoverTagButton[i].addEventListener('mouseout', ()=>{
    cursor.classList.remove('hover');
  })
};


export default cursor;