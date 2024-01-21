import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";

function render(state = store.Introduction) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
}

render();

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav-bar ul").classList.toggle("hidden--mobile");
  });
}

afterRender();
