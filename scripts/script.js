let $ = document;
let contextOptions = $.querySelector(".context_options");

$.body.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  contextOptions.style.display = "initial";
  contextOptions.style.top = `${event.pageY}px`;
  contextOptions.style.left = `${event.pageX}px`;
  contextOptions.style.animation = "none";
  void contextOptions.offsetWidth;
  contextOptions.style.animation = "moveDown 200ms ease-out";
});

$.body.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    contextOptions.style.display = "none";
  }
});

$.body.addEventListener("click", function () {
  contextOptions.style.display = "none";
});
