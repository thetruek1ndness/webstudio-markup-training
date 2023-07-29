const filterRef = document.querySelector(".js-filter");

const allCardsRefs = document.querySelectorAll(".card");
const websiteCardsRefs = document.querySelectorAll(".js-website");
const applicationCardsRefs = document.querySelectorAll(".js-application");
const designCardsRefs = document.querySelectorAll(".js-design");
const marketingCardsRefs = document.querySelectorAll(".js-marketing");

const allShownBtnRef = document.querySelector(".js-all-shown");
const websitesShownBtnRef = document.querySelector(".js-websites-shown");
const applicationsShownBtnRef = document.querySelector(
  ".js-applications-shown"
);
const designsShownBtnRef = document.querySelector(".js-designs-shown");
const marketingShownBtnRef = document.querySelector(".js-marketing-shown");

filterRef.addEventListener("click", filterCards);

function filterCards(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  if (e.target === allShownBtnRef) {
    showCards(allCardsRefs);
    switchActiveBtn(allShownBtnRef);
    return;
  }

  if (e.target === websitesShownBtnRef) {
    showCards(websiteCardsRefs);
    switchActiveBtn(websitesShownBtnRef);
    return;
  }

  if (e.target === applicationsShownBtnRef) {
    showCards(applicationCardsRefs);
    switchActiveBtn(applicationsShownBtnRef);
    return;
  }

  if (e.target === designsShownBtnRef) {
    showCards(designCardsRefs);
    switchActiveBtn(designsShownBtnRef);
    return;
  }

  if (e.target === marketingShownBtnRef) {
    showCards(marketingCardsRefs);
    switchActiveBtn(marketingShownBtnRef);
    return;
  }
}

function showCards(cardType) {
  allCardsRefs.forEach((card) => (card.style.display = "none"));
  cardType.forEach((card) => (card.style.display = "block"));
}

function switchActiveBtn(newActiveBtn) {
  const currentActiveBtn = document.querySelector(".filter__button--active");
  currentActiveBtn.classList.remove("filter__button--active");
  newActiveBtn.classList.add("filter__button--active");
}
