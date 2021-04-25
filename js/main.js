import datasetMain from "./model/dadosImgMain.js";
import datasetOthers from "./model/dadosCatalogos.js";

const dadosMain = datasetMain;
const dadosOthers = datasetOthers;
const catalogoVazio = document.querySelector(".catalogo")

const CatalogoMain = () => {
  for (let i = 0; i < dadosMain.length; i++) {
    const show = `
    <div class="bolo${dadosMain[i].id}">
      <a href="${dadosMain[i].link}"><img src="${dadosMain[i].image}" alt="${dadosMain[i].title}" /></a>
      <h3>${dadosMain[i].title}</h3>
      <p>${dadosMain[i].description}</p>
    </div>`

    catalogoVazio.insertAdjacentHTML('beforeend', show)
  };
};

CatalogoMain()
