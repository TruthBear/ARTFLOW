// import test from './api.js';




const black = () => {
  const searchSection=document.createElement("section");
  searchSection.classList.add("search");

  const infoSection=document.createElement("section");
  infoSection.classList.add("info");

  // search section
  const searchBox=document.createElement("div");
  searchBox.classList.add("search-box");

  const firstDiv=document.createElement("div");
  firstDiv.classList.add("first");

  const firstTagDiv=document.createElement("div");
  firstTagDiv.classList.add("first-tag");

  searchSection.appendChild(searchBox);
  searchBox.appendChild(firstDiv);
  firstDiv.appendChild(firstTagDiv);

  // select 태그
  const regionSelect=document.createElement("select");
  const regionOption=document.createElement("option");  
  regionOption.value="";
  regionOption.textContent="지역";
  regionSelect.appendChild(regionOption);
  firstTagDiv.appendChild(regionSelect);

  const genreSelect=document.createElement("select");
  const genreOption=document.createElement("option");
  genreOption.value="";
  genreOption.textContent="장르";
  genreSelect.appendChild(genreOption);
  firstTagDiv.appendChild(genreSelect);

  const inputDiv=document.createElement("div");
  inputDiv.classList.add("input-div");

  //date input 
  const inputDate1=document.createElement("input");
  inputDate1.setAttribute("type","date");
  inputDate1.dataset.placeholder="시작일";

  const inputDate2=document.createElement("input");
  inputDate2.setAttribute("type","date");
  inputDate2.dataset.placeholder="종료일";

  inputDiv.appendChild(inputDate1);
  inputDiv.appendChild(inputDate2);

  firstDiv.appendChild(inputDiv);

  const secondDiv=document.createElement("div");
  secondDiv.classList.add("second");

  //search input
  const inputSearch=document.createElement("input");
  inputSearch.setAttribute("type","search");
  inputSearch.setAttribute("placeholder","검색어를 입력하세요.");

  secondDiv.appendChild(inputSearch);
  searchBox.appendChild(secondDiv);

  //info section
  const infoContainer=document.createElement("div");
  infoContainer.classList.add("info-container");

  for(let i=0;i<8;i++){
    const infoBox=document.createElement("div");
    infoBox.classList.add("info-box");

    const imageDiv=document.createElement("div");
    imageDiv.classList.add("image");

    const image=document.createElement("img");
    image.setAttribute("src","https://cdn.pixabay.com/photo/2023/12/08/02/32/indoors-8436679_1280.jpg")

    const genreTag=document.createElement("div");
    genreTag.textContent="장르";

    imageDiv.appendChild(image);
    imageDiv.appendChild(genreTag);

    const infoDiv=document.createElement("div");

    const titleP=document.createElement("p");
    titleP.textContent="공연명";

    const locationP=document.createElement("p");
    locationP.textContent="장소";

    const dateP=document.createElement("p");
    dateP.textContent="기간";

    infoDiv.appendChild(titleP);
    infoDiv.appendChild(locationP);
    infoDiv.appendChild(dateP);

    infoBox.appendChild(imageDiv);
    infoBox.appendChild(infoDiv);

    infoContainer.appendChild(infoBox);
  }

  //more 버튼

  const more=document.createElement("div");
  more.classList.add("more");
  more.textContent="MORE";

  infoSection.appendChild(infoContainer);
  infoSection.appendChild(more);

  document.body.appendChild(searchSection);
  document.body.appendChild(infoSection);
}


const hi = document.getElementById('hi')
hi.addEventListener('click', black)