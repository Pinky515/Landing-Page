import * as components from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
      ${Header()}
      ${Nav()}
      ${Main()}
      ${Footer()}
    `;
}

render();

function afterRender(state = index.html) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav-bar ul").classList.toggle("hidden--mobile");
  });
}
