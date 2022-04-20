(function () {
  var cRetour = document.getElementById("cRetour");
  var icone = document.getElementById("icone");
  var duration = 500;

  function displayCRetour() {
    if (window.pageYOffset > 600) {
      cRetour.classList.remove("cInvisible");
      cRetour.classList.add("cVisible");
      icone.classList.remove("invisible");
      icone.classList.add("visible");
    } else {
      cRetour.classList.add("cInvisible");
      cRetour.classList.remove("cVisible");
      icone.classList.remove("visible");
      icone.classList.add("invisible");
    }
  }

  window.addEventListener("scroll", displayCRetour);
  icone.addEventListener("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    displayCRetour();
  });
})();
