const white = () => {

  const wrap = document.createElement('div');

  // 섹션 엘리먼트 생성
  const exhibitionSection = document.createElement('section');
  exhibitionSection.className = 'exhibiton';

  // 전시 지역 영역 생성
  const exhibitionAreaDiv = document.createElement('div');
  exhibitionAreaDiv.className = 'exhibition-area';

  // ul 엘리먼트 생성
  const ulElement = document.createElement('ul');

  // li 엘리먼트 생성하고 ul에 추가
  const locations = ['전체', '서울', '경기', '부산', '타지역'];
  locations.forEach(location => {
      const liElement = document.createElement('li');
      liElement.textContent = location;
      ulElement.appendChild(liElement);
  });

  // ul을 전시 지역 영역에 추가
  exhibitionAreaDiv.appendChild(ulElement);

  // 전시 지역 영역을 섹션에 추가
  exhibitionSection.appendChild(exhibitionAreaDiv);

  // 전시 달력 영역 생성
  const exhibitionCalendarDiv = document.createElement('div');
  exhibitionCalendarDiv.className = 'exhibition-calendar';

  // 전시 달력 영역을 섹션에 추가
  exhibitionSection.appendChild(exhibitionCalendarDiv);

  // 전시 정보 영역 생성
  const exhibitionInfoDiv = document.createElement('div');
  exhibitionInfoDiv.className = 'exhibition-info';

  // 이미지 및 정보 영역들 생성
  for (let i = 0; i < 8; i++) {
      const exInfoDiv = document.createElement('div');
      exInfoDiv.className = 'ex-info';

      // 전시 이미지 영역 생성
      const exhibitionImgDiv = document.createElement('div');
      exhibitionImgDiv.className = 'exhibition-img';

      // 이미지 엘리먼트 생성하고 소스 설정
      const imgElement = document.createElement('img');
      imgElement.src = './img/white.img/pexels-arthouse-studio-4588837.jpg';
      imgElement.alt = '';

      // 이미지 엘리먼트를 전시 이미지 영역에 추가
      exhibitionImgDiv.appendChild(imgElement);

      // 정보 영역 생성
      const exhibitionMainInfoDiv = document.createElement('div');
      exhibitionMainInfoDiv.className = 'exhibition-maininfo';

      // 전시 이름, 일정, 장소를 표시할 p 엘리먼트 생성
      const nameP = document.createElement('p');
      nameP.textContent = '전시 이름';

      const dateP = document.createElement('p');
      dateP.textContent = '전시 일정';

      const locationP = document.createElement('p');
      locationP.textContent = '전시 장소';

      // p 엘리먼트를 정보 영역에 추가
      exhibitionMainInfoDiv.appendChild(nameP);
      exhibitionMainInfoDiv.appendChild(dateP);
      exhibitionMainInfoDiv.appendChild(locationP);

      // 전시 이미지 영역과 정보 영역을 전시 정보 영역에 추가
      exInfoDiv.appendChild(exhibitionImgDiv);
      exInfoDiv.appendChild(exhibitionMainInfoDiv);

      // 전시 정보 영역을 섹션에 추가
      exhibitionInfoDiv.appendChild(exInfoDiv);
  }

  // 전시 정보 영역을 섹션에 추가
  exhibitionSection.appendChild(exhibitionInfoDiv);

  // 'More' 버튼 영역 생성
  const exhibitionButtonDiv = document.createElement('div');
  exhibitionButtonDiv.className = 'ex-btn';

  // 'More' 버튼 엘리먼트 생성
  const moreButton = document.createElement('button');
  moreButton.className = 'exhibition-btn';
  moreButton.textContent = 'More';

  // 'More' 버튼을 버튼 영역에 추가
  exhibitionButtonDiv.appendChild(moreButton);

  // 버튼 영역을 섹션에 추가
  exhibitionSection.appendChild(exhibitionButtonDiv);

  // 섹션을 문서 body에 추가
  wrap.appendChild(exhibitionSection);

  return wrap;
  }

export default white;