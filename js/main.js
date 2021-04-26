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
      <button id="irCarrinho" class="btn btn-secondary">Colocar no Carrinho</button>
    </div>
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom${dadosMain[i].id}" aria-labelledby="offcanvasBottomLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">${dadosMain[i].title}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body small">
        <img class="w-25 h-100" src="${dadosMain[i].image1}" alt="${dadosMain[i].title}">
        <img class="w-25 h-100" src="${dadosMain[i].image2}" alt="${dadosMain[i].title}">
      </div>
    </div>`

    catalogoVazio.insertAdjacentHTML('beforeend', show)
  };
};

CatalogoMain()

const buttons = document.querySelectorAll('#irCarrinho')

console.log(buttons)

const ColocarNoCarrinho = () => {

  buttons[0].addEventListener('click', function () {
  console.log('Colocar bolo customizado no carrinho')
  });

  buttons[1].addEventListener('click', function () {
    console.log('Colocar tortas no carrinho')
  });

  buttons[2].addEventListener('click', function () {
    console.log('Colocar docinhos no carrinho')
  });

  buttons[3].addEventListener('click', function () {
    console.log('Colocar cupcakees no carrinho')
  });

  buttons[4].addEventListener('click', function () {
    console.log('Colocar pudim no carrinho')
  });

  buttons[5].addEventListener('click', function () {
    console.log('Colocar bolo de aniversário no carrinho')
  });

}

ColocarNoCarrinho()