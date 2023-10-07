"use strict";

export const selectLanguage = () => {
  const language = document.getElementById("language");
  const languageClass = document.querySelectorAll(".language-btn");
  const selectLanguage = document.getElementById("selection-language");
  const selectLanguageRU = document.getElementById("btn-select-language-RU");
  const selectLanguageEN = document.getElementById("btn-select-language-EN");
  const languageMobile = document.getElementById("language-mobile");
  const selectLanguageMobile = document.getElementById(
    "selection-language-mobile"
  );
  const selectLanguageRUMobile = document.getElementById(
    "btn-select-language-RU-mobile"
  );
  const selectLanguageENMobile = document.getElementById(
    "btn-select-language-EN-mobile"
  );
  const languageHeaderMobile = document.getElementById(
    "language-header-mobile"
  );
  const selectLanguageHeaderMobile = document.getElementById(
    "selection-language-header-mobile"
  );
  const selectLanguageRUHeaderMobile = document.getElementById(
    "btn-select-language-RU-header-mobile"
  );
  const selectLanguageENHeaderMobile = document.getElementById(
    "btn-select-language-EN-header-mobile"
  );

  function selectLanguages(
    language,
    languageClass,
    selectLanguage,
    selectLanguageRU,
    selectLanguageEN,
    mobile = false
  ) {
    if (mobile == false) {
      selectLanguageRU.addEventListener("click", () => {
        languageClass.forEach((languageClass) => {
          languageClass.value = "RU";
        });
        language.innerHTML = `<img src="./assets/images/header/icon-planet.svg" alt="icon planet" /> RU`;
        selectLanguage.classList.remove("active-language");
      });
      selectLanguageEN.addEventListener("click", () => {
        languageClass.forEach((languageClass) => {
          languageClass.value = "EN";
        });
        language.innerHTML = `<img src="./assets/images/header/icon-planet.svg" alt="icon planet" /> EN`;
        selectLanguage.classList.remove("active-language");
      });
      const toggleMenu = function () {
        selectLanguage.classList.toggle("active-language");
      };

      language.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu =
          target == selectLanguage || selectLanguage.contains(target);
        const its_btnMenu = target == language;
        const menu_is_active =
          selectLanguage.classList.contains("active-language");

        if (!its_menu && !its_btnMenu && menu_is_active) {
          toggleMenu();
        }
      });
    } else {
      selectLanguageRU.addEventListener("click", () => {
        languageClass.forEach((languageClass) => {
          languageClass.value = "RU";
        });
        selectLanguage.classList.remove("active-language");
      });
      selectLanguageEN.addEventListener("click", () => {
        languageClass.forEach((languageClass) => {
          languageClass.value = "EN";
        });
        selectLanguage.classList.remove("active-language");
      });
      const toggleMenu = function () {
        selectLanguage.classList.toggle("active-language");
      };

      language.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu =
          target == selectLanguage || selectLanguage.contains(target);
        const its_btnMenu = target == language;
        const menu_is_active =
          selectLanguage.classList.contains("active-language");

        if (!its_menu && !its_btnMenu && menu_is_active) {
          toggleMenu();
        }
      });
    }
  }
  selectLanguages(
    language,
    languageClass,
    selectLanguage,
    selectLanguageRU,
    selectLanguageEN,
    false
  );
  selectLanguages(
    languageMobile,
    languageClass,
    selectLanguageMobile,
    selectLanguageRUMobile,
    selectLanguageENMobile,
    true
  );
  selectLanguages(
    languageHeaderMobile,
    languageClass,
    selectLanguageHeaderMobile,
    selectLanguageRUHeaderMobile,
    selectLanguageENHeaderMobile,
    true
  );
};
