const allResponsiveElements = document.querySelectorAll(
  "[data-screen='responsive']"
);
const allMainElements = document.querySelectorAll("[data-screen='main']");

const imageGalleryEl = document
  .querySelector(".image-gallery")
  .querySelector(".swiper-wrapper");

const expandedGalleryEl = document
  .querySelector(".expanded-gallery")
  .querySelector(".swiper-wrapper");

const cusomersExpandedGalleryEl = document.querySelector(
  ".customers-expanded-gallery"
);

const expandedMiniGalleryEl = document.querySelector(
  ".expanded-gallery-images"
);

const colorNameContainerEl = document.querySelector(".color-name__container");
const colorsContainerEl = document.querySelector(".colors-container");
const colorsCountEl = document.querySelector(".color-count");

const productGallery = [
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery01.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery02.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery03.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery04.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery05.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery06.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery07.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery08.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery09.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery10.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery11.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery12.jpg",
  },
  {
    title: "iPhone 13",
    src: "./img/product-details/image-gallery/image-gallery13.jpg",
  },
];

const productColors = [
  { name: "مشکی", color: "rgb(33, 33, 33)", isDark: false },
  { name: "سفید", color: "rgb(255, 255, 255)", isDark: true },
  { name: "قرمز", color: "rgb(244, 67, 54)", isDark: false },
  { name: "آبی", color: "rgb(33, 150, 243)", isDark: false },
  { name: "صورتی", color: "rgb(255, 128, 171)", isDark: true },
  { name: "سبز تیره", color: "rgb(0, 104, 42)", isDark: false },
];

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
});

const expandedGallery = new Swiper(".expanded-gallery", {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const initialFirstColor = () => {
  colorNameContainerEl.textContent = productColors.at(0).name;
  document
    .querySelectorAll("[aria-label='color']")[0]
    .querySelector(".tick-container")
    .classList.remove("d-none");

  if (window.innerWidth < 992) {
    document
      .querySelectorAll("[aria-label='color']")[0]
      .setAttribute("data-color-responsive", "active");
  }
  if (window.innerWidth >= 992) {
    document
      .querySelectorAll("[aria-label='color']")[0]
      .querySelector("div")
      .setAttribute("data-color", "active");
  }
};

const changeContent = () => {
  if (window.innerWidth < 992) {
    allMainElements.forEach((mainElement) =>
      mainElement.classList.add("d-none")
    );
    allResponsiveElements.forEach((responsiveElement) =>
      responsiveElement.classList.remove("d-none")
    );
    colorsContainerEl.innerHTML = productColors
      .map((productColor) => colorElementResponsiveMarkup(productColor))
      .join("");
    initialFirstColor();
  }
  if (window.innerWidth >= 992) {
    allMainElements.forEach((mainElement) =>
      mainElement.classList.remove("d-none")
    );
    allResponsiveElements.forEach((responsiveElement) =>
      responsiveElement.classList.add("d-none")
    );
    colorsContainerEl.innerHTML = productColors
      .map((productColor) => colorElementMarkup(productColor))
      .join("");
    initialFirstColor();
  }
};

const galleryCardResponsiveMarkup = (content) => {
  return `
    <div class="swiper-slide">
      <div class="d-flex align-items-center justify-content-center">
        <img
          src="${content.src}"
          alt="${content.title}"
          style="width: calc(100vw / 2)"
        />
      </div>
    </div>
  `;
};

const galleryCardMarkup = (content) => {
  return `
    <div class="swiper-slide">
      <div
        class="d-flex align-items-center justify-content-center"
      >
        <img
          src="${content.src}"
          alt="${content.title}"
          height="550px"
        />
      </div>
    </div>
  `;
};

const galleryMiniCardMarkup = (content, index) => {
  return `
    <div
      class="p-1 border border-2 rounded-4 overflow-hidden"
      style="width: fit-content"
      aria-label="${index + 1}"
      data-content="mini-card"
    >
      <div
        class="d-flex align-items-center justify-content-center"
        style="width: 60px; height: 60px"
      >
        <img
          src="${content.src}"
          alt="${content.title}"
          width="110%"
          height="110%"
        />
      </div>
    </div>
  `;
};

const customerGalleryCardMarkup = (content) => {
  return `
    <div
    class="p-1 border border-2 rounded-4 overflow-hidden"
    style="width: fit-content"
    >
      <div
        class="d-flex align-items-center justify-content-center"
        style="width: 90px; height: 90px"
      >
        <img
          src="${content.src}"
          alt="${content.title}"
          width="110%"
          height="110%"
        />
      </div>
    </div>
  `;
};

const colorElementMarkup = (productColor) => {
  return `
    <button
    class="position-relative border p-2 rounded-circle"
    style="width: fit-content"
    aria-label="color"
    >
      <div
        class="rounded-circle border pe-none"
        data-color=""
        style="
          width: 30px;
          height: 30px;
          background: ${productColor.color};
        "
        aria-label="${productColor.name}"
      ></div>
      <div
        class="tick-container position-absolute pe-none d-none"
        style="
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
      >
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <defs>
            <symbol
              id="done"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"
              ></path>
            </symbol>
          </defs>
          <g fill="${productColor.isDark ? "#0c0c0c" : "#ffffff"}">
            <path
              d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  `;
};

const colorElementResponsiveMarkup = (productColor) => {
  return `
    <button
    class="active px-2 py-1 pe-4 border rounded-pill d-flex align-items-center gap-3"
    style="width: fit-content"
    data-color-responsive=""
    aria-label="color"
    data-screen="responsive"
    >
      <div class="position-relative pe-none">
        <div
          class="rounded-circle border"
          style="
            width: 22px;
            height: 22px;
            background: ${productColor.color};
          "
          aria-label="${productColor.name}"
        ></div>
        <div
          class="tick-container position-absolute d-none"
          style="
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          "
        >
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            style="scale: 0.7"
            width="24"
            height="24"
          >
            <defs>
              <symbol
                id="done"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"
                ></path>
              </symbol>
            </defs>
            <g fill="${productColor.isDark ? "#0c0c0c" : "#ffffff"}">
              <path
                d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="pe-none" style="text-wrap:nowrap">
        <p class="fs-5">${productColor.name}</p>
      </div>
    </button>
  `;
};

productGallery.forEach((product) =>
  imageGalleryEl.insertAdjacentHTML(
    "beforeend",
    galleryCardResponsiveMarkup(product)
  )
);

productGallery.forEach((product) =>
  expandedGalleryEl.insertAdjacentHTML("beforeend", galleryCardMarkup(product))
);

productGallery.forEach((product, index) =>
  expandedMiniGalleryEl.insertAdjacentHTML(
    "beforeend",
    galleryMiniCardMarkup(product, index)
  )
);

productGallery.forEach((product) =>
  cusomersExpandedGalleryEl.insertAdjacentHTML(
    "beforeend",
    customerGalleryCardMarkup(product)
  )
);

colorsCountEl.textContent = productColors.length;

colorsContainerEl.addEventListener("click", function (e) {
  const elements = document.querySelectorAll("[aria-label='color']");
  const element = e.target.getAttribute("aria-label");
  if (element === "color") {
    if (window.innerWidth > 992) {
      elements.forEach((colorElement) => {
        colorElement.querySelector("div").setAttribute("data-color", "");
        colorElement.querySelector(".tick-container").classList.add("d-none");
      });
      e.target.querySelector("div").setAttribute("data-color", "active");
      e.target.querySelector(".tick-container").classList.remove("d-none");
      colorNameContainerEl.textContent = e.target
        .querySelector("div")
        .getAttribute("aria-label");
    }
    if (window.innerWidth <= 992) {
      console.log(e.target);
      elements.forEach((colorElement) => {
        colorElement.setAttribute("data-color-responsive", "");
        colorElement.querySelector(".tick-container").classList.add("d-none");
      });
      e.target.setAttribute("data-color-responsive", "active");
      e.target.querySelector(".tick-container").classList.remove("d-none");
      colorNameContainerEl.textContent = e.target
        .querySelector("div")
        .querySelector("div")
        .getAttribute("aria-label");
    }
  }
});

document.querySelectorAll(".swiper-button").forEach((button) =>
  button.addEventListener("click", function (e) {
    const galleryMiniCards = Array.from(
      document.querySelectorAll("[data-content='mini-card']")
    );
    galleryMiniCards.forEach((miniCard) =>
      miniCard.setAttribute("data-color", "")
    );
    const activeNumber = document
      .querySelectorAll(".swiper-slide-active")[1]
      .getAttribute("aria-label");
    const label = +activeNumber.slice(0, 2);
    const activeSlide = galleryMiniCards.find(
      (miniCard) => +miniCard.getAttribute("aria-label") === label
    );
    activeSlide.setAttribute("data-color", "active");
  })
);

window.addEventListener("load", changeContent);
window.addEventListener("resize", changeContent);
