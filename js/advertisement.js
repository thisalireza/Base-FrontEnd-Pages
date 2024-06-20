/******************** Advertisement ********************/
const imageTargets = document.querySelectorAll("img[data-src]");

const imageSrc = (e) => {
  const currentWidth = e.currentTarget.innerWidth;
  if (currentWidth <= 425) {
    imageTargets.forEach((imageTarget) =>
      imageTarget.setAttribute("src", imageTarget.dataset.responsive)
    );
  } else {
    imageTargets.forEach((imageTarget) =>
      imageTarget.setAttribute("src", imageTarget.dataset.src)
    );
  }
};

window.addEventListener("resize", imageSrc);
window.addEventListener("load", imageSrc);
/******************** Advertisement ********************/
