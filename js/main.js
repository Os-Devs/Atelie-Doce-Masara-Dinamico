import datasetMain from "./model/dadosImgMain.js";
import datasetOthers from "./model/dadosCatalogos.js";

const dadosMain = datasetMain;
const dadosOthers = datasetOthers;
const catalogoVazio = document.querySelector(".catalogo")

const CatalogoMain = () => {
  for (let i = 0; i < dadosMain.length; i++) {
    const show = `
    <div class="bolo${dadosMain[i].id}">
      <img src="${dadosMain[i].image}" alt="${dadosMain[i].title}" type="button" data-bs-toggle="offcanvas" 
      data-bs-target="#offcanvasBottom${dadosMain[i].id}" aria-controls="offcanvasBottom"/></a>
      <h3>${dadosMain[i].title}</h3>
      <p>${dadosMain[i].description}</p>
    </div>
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom${dadosMain[i].id}" aria-labelledby="offcanvasBottomLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">${dadosMain[i].title}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body small">
        <img src="${dadosMain[i].image1}" alt="${dadosMain[i].title}">
        <img src="${dadosMain[i].image2}" alt="${dadosMain[i].title}">
      </div>
    </div>`

    catalogoVazio.insertAdjacentHTML('beforeend', show)
  };
};

CatalogoMain()