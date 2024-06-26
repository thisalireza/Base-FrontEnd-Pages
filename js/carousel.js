/******************** Carousel ********************/
const containerEl = document.getElementById("container");
const swiperContainer = document.querySelector(".swiper");
const swiperEl = document.querySelector(".swiper-wrapper");

const products = [
  {
    title: "آیفون 13 پرو",
    price: 99900000,
    discount: 15,
  },
  {
    title: "آیفون 13 پرو",
    price: 87990000,
    discount: 15,
  },
  {
    title: "آیفون 13 پرو",
    price: 85200000,
    discount: 10,
  },
  {
    title: "قاب موبایل آیفون",
    price: 290000,
    discount: 83,
  },
  {
    title: "قاب موبایل سامسونگ",
    price: 250000,
    discount: 80,
  },
  {
    title: "قاب موبایل سامسونگ",
    price: 250000,
    discount: 80,
  },
  {
    title: "هندزفری بلوتوثی",
    price: 219000,
    discount: 77,
  },
  {
    title: "هندزفری بلوتوثی",
    price: 1500000,
    discount: 81,
  },
  {
    title: "هندزفری بلوتوثی",
    price: 2500000,
    discount: 81,
  },
  {
    title: "هندزفری بلوتوثی",
    price: 3500000,
    discount: 63,
  },
  {
    title: "هندزفری بلوتوثی",
    price: 2850000,
    discount: 79,
  },
  {
    title: "دفتر",
    price: 320000,
    discount: 69,
  },
  {
    title: "دفتر",
    price: 220000,
    discount: 61,
  },
  {
    title: "دفتر",
    price: 220000,
    discount: 61,
  },
  {
    title: "دفتر",
    price: 50000,
    discount: 58,
  },
  {
    title: "ساعت هوشمند",
    price: 300000,
    discount: 67,
  },
  {
    title: "ساعت هوشمند",
    price: 2690000,
    discount: 30,
  },
  {
    title: "ساعت هوشمند",
    price: 2650000,
    discount: 63,
  },
];

const localePrice = function (price) {
  return new Intl.NumberFormat("fa-IR", {
    compactDisplay: "short",
  }).format(price);
};

/* ---------- Swiper Customization ---------- */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1,
    },
    // when window width is >= 550px
    550: {
      slidesPerView: 2,
    },
    // when window width is >= 720px
    720: {
      slidesPerView: 3,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grid: {
    rows: 2,
  },
});
/* ---------- Swiper Customization ---------- */

/* ---------- Product Card | Default ---------- */
const staticCard = function (product, index) {
  return `
  <a href="#" class="product border-end border-bottom px-3 py-4 col d-flex justify-content-center text-decoration-none">
    <div class="w-100">
      <div class="text-center">
        <img src="./img/carousel/${index + 1}.webp" height="150px" alt="${
    product.title
  }"/>
      </div>
      <div class="d-flex flex-column pt-4 lh-lg w-100">
        <div>
          <h4 class="fs-4 text-dark">${product.title || "عنوان"}</h4>
        </div>
        <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center bg-danger px-2 lh-base"
        style="border-radius:10px"
        >
          <span class="fs-6 text-light">${product.discount}%</span>
      </div>
      <div class="d-flex fs-5 align-items-center gap-1 text-dark">
        <span class="fs-4 fw-bold">${localePrice(
          product.price - Math.round(product.price * (product.discount / 100))
        )}</span>
          <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style="
                width: 16px;
                height: 16px;
                fill: var(--color-icon-high-emphasis);
              "
              width="16"
              height="16"
            >
              <defs>
                <symbol
                  id="toman"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
              </defs>
              <g fill="#424750">
                <path
                  fill-rule="evenodd"
                  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg>
      </div>
    </div>
    <div class="d-flex fs-6 align-items-center justify-content-end gap-1">
      <span class="text-decoration-line-through" style="color: #c0c2c5">${localePrice(
        product.price
      )}</span>
    </div>
  </div>
    </div>
  </a>
`;
};
/* ---------- Product Card | Default ---------- */

/* ---------- Product Card | For Swiper ---------- */
const swippingCard = function (product, index) {
  return `
    <div class="swiper-slide">
      <div class="d-flex flex-column" style="height:100%">
        <a
          href="#"
          class="product border-start px-3 col d-flex justify-content-center text-decoration-none"
          style="align-items:center"
          >
          <div class="w-100">
            <div class="text-center">
              <img src="./img/carousel/${
                index + 1
              }.webp" class="pt-2 d-block m-auto" height="130px" alt="${
    product.title
  }"/>
            </div>
            <div class="d-flex flex-column pt-4 lh-lg w-100">
              <div>
                <h4 class="fs-4 text-dark text-start">${
                  product.title || "عنوان"
                }</h4>
              </div>
              <div
                class="d-flex align-items-center justify-content-between"
              >
                <div
                  class="d-flex align-items-center bg-danger px-3 lh-base"
                  style="border-radius:10px"
                >
                  <span class="fs-6 text-light">${product.discount}%</span>
                </div>
                <div
                  class="d-flex fs-5 align-items-center gap-1 text-dark"
                >
                  <span class="fs-4 fw-bold">${localePrice(
                    product.price -
                      Math.round(product.price * (product.discount / 100))
                  )}</span>
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                      width: 16px;
                      height: 16px;
                      fill: var(--color-icon-high-emphasis);
                    "
                    width="16"
                    height="16"
                  >
                    <defs>
                      <symbol
                        id="toman"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                          clip-rule="evenodd"
                        ></path>
                      </symbol>
                    </defs>
                    <g fill="#424750">
                      <path
                        fill-rule="evenodd"
                        d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div
                class="d-flex fs-6 align-items-center justify-content-end gap-1"
              >
                <span
                  class="text-decoration-line-through"
                  style="color: #c0c2c5"
                  >${localePrice(product.price)}</span
                >
              </div>
            </div>
          </div> 
        </a>
      </div>
    </div>
`;
};
/* ---------- Product Card | For Swiper ---------- */

/* ---------- Swiper Bug Fix ---------- */
window.onresize = () => {
  if (
    window.innerWidth <= 768 &&
    !swiperContainer.classList.contains("swiper-grid")
  ) {
    swiperContainer.classList.add("swiper-grid");
    swiperContainer.classList.add("swiper-grid-column");
  }
};
/* ---------- Swiper Bug Fix ---------- */

/* ---------- Products List | For Laptop ---------- */
products.forEach((product, index) =>
  containerEl.insertAdjacentHTML("beforeend", staticCard(product, index))
);
/* ---------- Products List | For Laptop ---------- */

/* ---------- Products List | Carousel ---------- */
products.forEach((product, index) =>
  swiperEl.insertAdjacentHTML("beforeend", swippingCard(product, index))
);
/* ---------- Products List | Carousel ---------- */
/******************** Carousel ********************/
