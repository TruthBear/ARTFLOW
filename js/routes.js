import artPage from './black.js';
import white from './white.js';

const root = document.getElementById('root');
const pages = {
  home: white,
  test: artPage,
}

const routes = () => {
  const hashTag = window.location.hash; //#home
  const pageId = hashTag.replace("#", ""); //home

  root.replaceChildren();

  const pageFunc = pages[pageId];

  if(pageFunc) {
    const pageContent = pageFunc();
    root.appendChild(pageContent);
  } else {
    root.innerHTML ="<h1>Page not found</h1>"
  }
}

window.addEventListener('hashchange', routes);
window.addEventListener('load', routes);