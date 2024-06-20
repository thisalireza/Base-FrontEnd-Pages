const offersWrapper = document.getElementById("offers");
const relatedVideosSwiper = document.getElementById("related-videos");

const products = [
  {
    title: "هدست بلوتوثی مدل AirPod Pro 2",
    price: 2800000,
    discount: 0.75,
  },
  {
    title: "هدست بلوتوثی مدل inPods Pro 2",
    tag: {
      icon: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol id="deliveryToday" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5h-2v2h2V5z"></path><path fill-rule="evenodd" d="M15 15h6v-2h-6a1 1 0 110-2h5V9h-6a1 1 0 110-2h4V5H7a7 7 0 000 14h11v-2h-3a1 1 0 110-2zm-3-3a5 5 0 10-10 0 5 5 0 0010 0z" clip-rule="evenodd"></path><path d="M21.5 9H24v2h-2.5V9zM21.5 17H19v2h2.5v-2z"></path><path fill-rule="evenodd" d="M7 12V9.75H5.5v3c0 .414.336.75.75.75h3V12H7z" clip-rule="evenodd"></path></symbol></defs><g fill="#1028FF"><path d="M22 5h-2v2h2V5z"></path><path fill-rule="evenodd" d="M15 15h6v-2h-6a1 1 0 110-2h5V9h-6a1 1 0 110-2h4V5H7a7 7 0 000 14h11v-2h-3a1 1 0 110-2zm-3-3a5 5 0 10-10 0 5 5 0 0010 0z" clip-rule="evenodd"></path><path d="M21.5 9H24v2h-2.5V9zM21.5 17H19v2h2.5v-2z"></path><path fill-rule="evenodd" d="M7 12V9.75H5.5v3c0 .414.336.75.75.75h3V12H7z" clip-rule="evenodd"></path></g></svg>',
      name: "ارسال امروز",
    },
    price: 1900000,
    discount: 0.5,
  },
  {
    title: "هندزفری بلوتوثی مدل Airpod12",
    tag: {
      icon: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol id="deliveryToday" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5h-2v2h2V5z"></path><path fill-rule="evenodd" d="M15 15h6v-2h-6a1 1 0 110-2h5V9h-6a1 1 0 110-2h4V5H7a7 7 0 000 14h11v-2h-3a1 1 0 110-2zm-3-3a5 5 0 10-10 0 5 5 0 0010 0z" clip-rule="evenodd"></path><path d="M21.5 9H24v2h-2.5V9zM21.5 17H19v2h2.5v-2z"></path><path fill-rule="evenodd" d="M7 12V9.75H5.5v3c0 .414.336.75.75.75h3V12H7z" clip-rule="evenodd"></path></symbol></defs><g fill="#1028FF"><path d="M22 5h-2v2h2V5z"></path><path fill-rule="evenodd" d="M15 15h6v-2h-6a1 1 0 110-2h5V9h-6a1 1 0 110-2h4V5H7a7 7 0 000 14h11v-2h-3a1 1 0 110-2zm-3-3a5 5 0 10-10 0 5 5 0 0010 0z" clip-rule="evenodd"></path><path d="M21.5 9H24v2h-2.5V9zM21.5 17H19v2h2.5v-2z"></path><path fill-rule="evenodd" d="M7 12V9.75H5.5v3c0 .414.336.75.75.75h3V12H7z" clip-rule="evenodd"></path></g></svg>',
      name: "ارسال امروز",
    },
    price: 700000,
    discount: 0.59,
  },
  {
    title: "هدفون مخصوص بازی فاکس ری مدل FXR-SAC-06",
    price: 745000,
    discount: 0.15,
  },
  {
    title: "هدفون مخصوص بازی فاکس ری مدل FXR-HAB-05",
    price: 2990000,
    discount: 0.15,
  },
  {
    title: "هدست مخصوص بازی فاکس ری مدل FXR-SAU-35",
    price: 1530000,
    discount: 0.15,
  },
  {
    title: "هدفون بلوتوثی ایکس هانز مدل TWS03 PRO3",
    tag: {
      icon: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol id="deliveryShipBySeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z" clip-rule="evenodd"></path></symbol></defs><g fill="#D86B00"><path fill-rule="evenodd" d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z" clip-rule="evenodd"></path></g></svg>',
      name: "ارسال فروشنده",
    },
    price: 1495000,
    discount: 0.27,
  },
  {
    title: "هدفون بلوتوثی ایکس کین مدل XK-TWS08",
    tag: {
      icon: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol id="deliveryShipBySeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z" clip-rule="evenodd"></path></symbol></defs><g fill="#D86B00"><path fill-rule="evenodd" d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z" clip-rule="evenodd"></path></g></svg>',
      name: "ارسال فروشنده",
    },
    price: 3000000,
    discount: 0.67,
  },
  {
    title: "هدفون بلوتوثی ایکس کین مدل tws08",
    tag: {
      icon: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol id="deliveryShipBySeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z" clip-rule="evenodd"></path></symbol></defs><g fill="#D86B00"><path fill-rule="evenodd" d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z" clip-rule="evenodd"></path></g></svg>',
      name: "ارسال فروشنده",
    },
    price: 1395000,
    discount: 0.2,
  },
];

const videos = [
  { title: "بررسی گوشی Realme narzo 50 📱", userName: "RaviUnbox" },
  {
    title: "تیزر رسمی ریلمی نارزو ۵۰ - Realme Narzo 50",
    userName: "BestTechVideos",
  },
];

const offersSwiper = new Swiper(".offersSwiper", {
  // Default parameters
  slidesPerView: 5,
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
    },
    // when window width is >= 425px
    425: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 6,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const productCard = (product, index) => {
  const localPrice = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };
  const discountedPrice =
    product.price -
    Math.floor((product.price * product.discount) / 1000) * 1000;
  return `
    <div class="swiper-slide">
      <a
        href="#"
        class="d-block ${
          product === products.at(-1) ? "" : "border-end"
        } swiper-content"
        style="padding: 12px 10px"
        ><div style="height: 100%">
          <article style="height: 100%">
            <div
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 4px; flex: 1"
            >
              <div><img src="img/offers/SpecialSell.svg" /></div>
              <div class="d-flex align-items-center">
                <span class="fs-6">سفارشی</span>
                <div>
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    style="scale: 0.7"
                  >
                    <defs>
                      <symbol
                        id="ads"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.198 1.408l2.779 15.757-4.803.847-2.737-.302a4 4 0 01-7.972-.207l-.006-.205-.005-.442-4.694.827-1.737-9.848 4.782-.843 9.591-4.737 4.802-.847zM9.456 17.05l.003.238a2 2 0 003.99.203l-3.993-.441zm7.15-12.979l1.97-.346 2.084 11.818-1.97.347L16.606 4.07zm-1.898.753L7.236 8.516l1.129 6.402 8.284.913-1.94-11.007zM3.34 9.458l1.97-.348 1.042 5.91-1.97.346L3.34 9.458z"
                          clip-rule="evenodd"
                        ></path>
                      </symbol>
                    </defs>
                    <g fill="#FF009C">
                      <path
                        fill-rule="evenodd"
                        d="M20.198 1.408l2.779 15.757-4.803.847-2.737-.302a4 4 0 01-7.972-.207l-.006-.205-.005-.442-4.694.827-1.737-9.848 4.782-.843 9.591-4.737 4.802-.847zM9.456 17.05l.003.238a2 2 0 003.99.203l-3.993-.441zm7.15-12.979l1.97-.346 2.084 11.818-1.97.347L16.606 4.07zm-1.898.753L7.236 8.516l1.129 6.402 8.284.913-1.94-11.007zM3.34 9.458l1.97-.348 1.042 5.91-1.97.346L3.34 9.458z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="d-flex flex-column"
              style="height: calc(100% - 25px)"
            >
              <div class="d-flex justify-content-center">
                <div style="padding-bottom: 4px">
                  <img src="img/offers/offer${String(index + 1).padStart(
                    2,
                    0
                  )}.jpg" width="150" />
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-between"
                style="height:100%"
                >
                <div>
                  <h3
                    class="fs-5 fw-bold lh-lg"
                    style="color: #3f4064"
                  >
                    ${product.title}
                  </h3>
                </div>
                ${
                  product.tag
                    ? `
                <div
                  class="mb-1 d-flex align-items-center justify-content-between"
                >
                  <div class="d-flex align-items-center">
                    <div class="d-flex" style="margin-left:1px; scale:0.9">
                      ${product.tag.icon}
                    </div>
                    <p class="mb-0 fs-5" style="color: #62666d">
                      ${product.tag.name}
                    </p>
                    <br />
                  </div>
                </div>
                `
                    : ""
                }
                <div
                  class="d-flex flex-column"
                  style="padding-top: 4px"
                >
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center rounded-4 text-white px-2"
                      style="background: #ef394e"
                    >
                      <span class="fs-5">${product.discount * 100}%</span>
                    </div>
                    <div class="d-flex align-items-center fs-3">
                      <span>${localPrice(discountedPrice)}</span>
                      <div class="d-flex">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
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
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between"
                    style="padding-left: 20px"
                  >
                    <div
                      class="fs-5 fw-normal lh-lg text-decoration-line-through align-self-end ms-auto"
                      style="color: #c0c2c5"
                    >
                      ${localPrice(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a>
    </div>
  `;
};

const videoCard = (video, index) => {
  return `
    <div>
      <a href="#" class="d-flex flex-column gap-3">
        <div
          class="d-flex align-items-center position-relative"
          style="
            background-color: #000;
            width: 280px;
            height: 280px;
          "
        >
          <img src="img/related-videos/video${String(index + 1).padStart(
            2,
            0
          )}.jpg" width="100%" />
          <div class="position-absolute rounded-circle play-wrapper">
            <div>
              <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <defs>
                <symbol
                  id="playSimple"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 5l11 7-11 7V5z"></path>
                </symbol>
              </defs>
              <g fill="#FFFFFF"><path d="M7 5l11 7-11 7V5z"></path></g>
            </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 class="fs-5 fw-normal">
            ${video.title}
          </h3>
        </div>
        <a href="#">
          <div class="d-flex align-items-center gap-2">
            <img
              src="img/related-videos/profile${String(index + 1).padStart(
                2,
                0
              )}.jpg"
              width="24"
              class="rounded-circle"
            />
            <div>
              <p class="mb-0" style="color: #a1a3a8">${video.userName}</p>
            </div>
          </div></a
        >
      </a>
    </div>
  `;
};

products.forEach((product, index) =>
  offersWrapper.insertAdjacentHTML("beforeend", productCard(product, index))
);

videos.forEach((video, index) =>
  relatedVideosSwiper.insertAdjacentHTML("beforeend", videoCard(video, index))
);
