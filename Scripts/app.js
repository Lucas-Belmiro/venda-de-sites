const toggleElements = [
  {
    buttonId: "div1",
    divId: "elemento1",
    text:
      "O tempo de desenvolvimento pode variar a depender da quantidade de funcionalidade, mas geralmente demora entre um ou três meses.",
  },
  {
    buttonId: "div2",
    divId: "elemento2",
    text:
      "Os orçamentos são enviados com base em uma análise cuidadosa do que o cliente deseja para o projeto. Entre o contato, o tempo de resposta é de 1 dia.",
  },
  {
    buttonId: "div3",
    divId: "elemento3",
    text:
      "O cliente recebe o site otimizado após a finalização do projeto. Após isso, é possível contratar pacotes de assinatura para a manutenção do site",
  },
  {
    buttonId: "div4",
    divId: "elemento4",
    text:
      "Sim! O site será entregue perfeitamente otimizado para tablet e celular seguindo as melhores práticas de desenvolvimento e experiência do usuário.",
  },
  {
    buttonId: "div5",
    divId: "elemento5",
    text:
      "Compreensão do projeto (reunião inicial), rascunhos, protótipo, ajustes, desenvolvimento e entrega do site.",
  },
  {
    buttonId: "div6",
    divId: "elemento6",
    text:
      "Sim! Seu site estará totalmente disponível dentro das redes de pesquisa do Google.",
  },
];

function setupToggleButton(addItemButtonId, addItemDivId, text) {
  let addItemButton = document.getElementById(addItemButtonId);
  let addItemDiv = document.getElementById(addItemDivId);

  let selectArrow = document.querySelector(`#${addItemButton.id} img`);

  let itemAdded = false;
  let newItem = document.createElement("p");
  newItem.textContent = text;

  addItemButton.addEventListener("click", function () {
    if (!itemAdded) {
      addItemDiv.appendChild(newItem);
      itemAdded = true;
      selectArrow.className = "up-arrow";
    } else {
      addItemDiv.removeChild(newItem);
      itemAdded = false;
      selectArrow.className = "down-arrow";
    }
  });
}

toggleElements.forEach((element) => {
  setupToggleButton(element.buttonId, element.divId, element.text);
});

let addMenu = document.getElementById("menu");
let removeColumn = document.getElementById("coluna1");
let addLinks = document.getElementById("links");
let adjustContainerNav = document.getElementById("containerNav");
let adjustNavbar = document.getElementById("navbar");
let outMenu = document.getElementById("outMenu");

addMenu.addEventListener("click", function () {
  removeColumn.className = "disable";
  addLinks.className = "coluna2modified";
  adjustContainerNav.className = "containerNavModified";
  adjustNavbar.className = "navbarModified";
  addMenu.className = "disable";
  outMenu.className = "outMenu";
});

outMenu.addEventListener("click", function () {
  removeColumn.className = "coluna1";
  addLinks.className = "coluna2";
  adjustContainerNav.className = "container-nav";
  adjustNavbar.className = "navbar";
  addMenu.className = "menu";
  outMenu.className = "disable";
});
