// @ts-nocheck
const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const xPostion = event.offsetX;
  const yPostion = event.offsetY;
  const spanElement = document.createElement("span");
  spanElement.style.left = xPostion + "px";
  spanElement.style.top = yPostion + "px";
  const size = Math.random() * 100;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";

  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
