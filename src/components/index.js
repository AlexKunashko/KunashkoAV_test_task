import { burgerMenu } from "./burgerMenu";
import { initScrollbar } from "./initScrollbar";
import { selectLanguage } from "./selectLanguage";

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    initScrollbar();
    burgerMenu();
    selectLanguage();
  });
