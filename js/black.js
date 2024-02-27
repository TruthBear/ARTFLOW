// 부모 요소 생성
const searchSection = document.createElement('section');
searchSection.classList.add('search');

const infoSection = document.createElement('section');
infoSection.classList.add('info');

// 검색 상자 생성
const searchBox = document.createElement('div');
searchBox.classList.add('search-box');

const firstDiv = document.createElement('div');
firstDiv.classList.add('first');

const firstTagDiv = document.createElement('div');
firstTagDiv.classList.add('first-tag');

const regionTag = document.createElement('p');
regionTag.textContent = '지역';
const regionChevron = document.createElement('i');
regionChevron.classList.add('fas', 'fa-regular', 'fa-chevron-down');
regionTag.appendChild(regionChevron);

const genreTag = document.createElement('p');
genreTag.textContent = '장르';
const genreChevron = document.createElement('i');
genreChevron.classList.add('fas', 'fa-regular', 'fa-chevron-down');
genreTag.appendChild(genreChevron);

firstTagDiv.appendChild(regionTag);
firstTagDiv.appendChild(genreTag);

const secondDiv = document.createElement('div');
secondDiv.classList.add('second');

const dateInput1 = document.createElement('input');
dateInput1.setAttribute('type', 'date');
dateInput1.dataset.placeholder = '시작일';

const dateInput2 = document.createElement('input');
dateInput2.setAttribute('type', 'date');
dateInput2.dataset.placeholder = '종료일';

secondDiv.appendChild(dateInput1);
secondDiv.appendChild(dateInput2);

firstDiv.appendChild(firstTagDiv);
firstDiv.appendChild(secondDiv);

searchBox.appendChild(firstDiv);

const secondBox = document.createElement('div');
secondBox.classList.add('second');

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'search');
searchInput.setAttribute('placeholder', '검색어를 입력하세요.');

secondBox.appendChild(searchInput);

searchBox.appendChild(secondBox);

searchSection.appendChild(searchBox);

// 정보 컨테이너 생성
const infoContainer = document.createElement('div');
infoContainer.classList.add('info-container');

// 정보 박스 생성
for (let i = 0; i < 8; i++) {
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const image = document.createElement('img');
    image.setAttribute('src', 'https://cdn.pixabay.com/photo/2023/12/08/02/32/indoors-8436679_1280.jpg');

    const genreDiv = document.createElement('div');
    genreDiv.textContent = '장르';

    imageDiv.appendChild(image);
    imageDiv.appendChild(genreDiv);

    const infoDiv = document.createElement('div');

    const titleP = document.createElement('p');
    titleP.textContent = '공연명';

    const locationP = document.createElement('p');
    locationP.textContent = '장소';

    const dateP = document.createElement('p');
    dateP.textContent = '기간';

    infoDiv.appendChild(titleP);
    infoDiv.appendChild(locationP);
    infoDiv.appendChild(dateP);

    infoBox.appendChild(imageDiv);
    infoBox.appendChild(infoDiv);

    infoContainer.appendChild(infoBox);
}

// "MORE" 버튼 생성
const moreButton = document.createElement('div');
moreButton.classList.add('more');
moreButton.textContent = 'MORE';

infoSection.appendChild(infoContainer);
infoSection.appendChild(moreButton);

// 생성한 요소들을 문서에 추가
document.body.appendChild(searchSection);
document.body.appendChild(infoSection);
