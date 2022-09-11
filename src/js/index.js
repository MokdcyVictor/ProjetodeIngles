const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextimage();
}, 7000);

function nextimage() {
  count++;
  if (count > 3) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
