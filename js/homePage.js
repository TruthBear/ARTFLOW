
const homePage = () => {
  const wrap = document.createElement('div');
  for(let i=0;i<50;i++){
    const test = document.createElement('h1');
    test.textContent = "테스트페이지 입니다.";
    wrap.appendChild(test);
  }

  return wrap;
} 

export default homePage;