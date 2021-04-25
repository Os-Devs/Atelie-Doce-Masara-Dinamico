import datasetOthers from "./model/dadosCatalogos.js";

const dadosOthers = datasetOthers;
const catalogoVazio = document.querySelector(".catalogo")

const CatalogoMain = () => {
  for (let i = 0; i < dadosOthers.length; i++) {
    const show = `
    <div class="bolo${i}">
      <a href="${dadosOthers[i].link}"><img src="${dadosOthers[i].image}" alt="${dadosOthers[i].title}" /></a>
      <h3>${dadosOthers[i].title}</h3>
      <p>${dadosOthers[i].description}</p>
    </div>`

    catalogoVazio.insertAdjacentHTML('beforeend', show)
  };
};

CatalogoMain()

