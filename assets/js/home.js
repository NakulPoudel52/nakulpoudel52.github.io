(function () {
  var list = document.querySelector("[data-news-list]");
  var button = document.querySelector("[data-news-toggle]");
  if (!list || !button) return;

  function setExpanded(expanded) {
    list.classList.toggle("is-collapsed", !expanded);
    button.setAttribute("aria-expanded", expanded ? "true" : "false");
    button.textContent = expanded ? "Show less" : "Show earlier news";
  }

  setExpanded(false);

  button.addEventListener("click", function () {
    setExpanded(button.getAttribute("aria-expanded") !== "true");
  });
})();
