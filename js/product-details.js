// DOM Elements Selection
const allMainElements = document.querySelectorAll("[data-screen='main']");
const allResponsiveElements = document.querySelectorAll(
  "[data-screen='responsive']"
);
const expandedGalleryEl = document
  .querySelector(".expanded-gallery")
  .querySelector(".swiper-wrapper");
const expandedMiniGalleryEl = document.querySelector(
  ".expanded-gallery-images"
);
const cusomersExpandedGalleryEl = document.querySelector(
  ".customers-expanded-gallery"
);
const imageGalleryEl = document
  .querySelector(".image-gallery")
  .querySelector(".swiper-wrapper");

const colorNameContainerEl = document.querySelector(".color-name__container");
const colorsContainerEl = document.querySelector(".colors-container");
const colorsCountEl = document.querySelector(".color-count");
const offersWrapper = document.getElementById("offers");
const relatedVideosSwiper = document.getElementById("related-videos");
const detailsNavbarEl = document.querySelector(".details-nav");
const detailNavItems = Array.from(document.querySelectorAll(".details-item"));
const detailSections = document.querySelectorAll(".details-section");
const imagesContainerEl = document.querySelectorAll(".images-container");
const suggestingCommentsElements = document.querySelectorAll(
  ".suggesting-comments"
);
const averageRatingElements = document.querySelectorAll(".average-rating");
const maxRatingEl = document.querySelector(".max-rating");
const starRatingEl = document.querySelector(".star-rating");
const ratingsCountElements = document.querySelectorAll(".ratings-count");
const questionsCountEl = document.querySelector(".questions-count");
const commentsContainerEl = document.querySelector(".comments");
const responsiveCommentsContainerEl = document.querySelector(
  ".responsive-comments"
);
const questionsContainerEl = document.querySelector(".questions");
const responsiveQuestionsContainerEl = document.querySelector(
  ".responsive-questions"
);
const remainingCommentsEl = document.querySelector(".remaining-comments");
const remainingCommentsResponsiveEl = document.querySelector(
  ".remaining-comments-responsive"
);
const remainingQuestionsEl = document.querySelector(".remaining-questions");
const remainingQuestionsResponsiveEl = document.querySelector(
  ".remaining-questions-responsive"
);
const introductionEl = document.getElementById("introduction");
const techContainerEl = document.querySelector(".tech-container");
const expertReviewEl = document.querySelector(".expertReview");
const techShowMoreEl = document.querySelector(".tech-ShowMore");
const introductionShowMoreEl = document.querySelector(".introduction-ShowMore");
const commentsCountElements = document.querySelectorAll(".comments-count");
const commentsShowMoreEl = document.querySelector(".comments-ShowMore");
const questionsShowMoreEl = document.querySelector(".questions-ShowMore");
const expertShowMoreEl = document.querySelector(".expert-showMore");

// Introduction Paragraph
const introduction =
  "گوشی موبایل هوآوی مدل nova Y70 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت یکی از گوشی‌های هوشمند میان‌رده جدید شرکت هوآوی است که به لطف بهره بردن از مشخصات فنی مناسب، توانایی ارائه عملکرد بسیار خوب و قابل قبولی را دارد. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش 6.75 اینچ با رزولوشن 720×1600 پیکسل از نوع TFT مجهز شده است. این صفحه‌نمایش از طراحی کاربر پسند ناچ واتردراپ بهره برده است که بریدگی قطره‌ای شکل ناچ در قسمت بالایی و مرکزی صفحه‌نمایش، سنسور دوربین سلفی با رزولوشن 8 مگاپیکسل را در خود جای داده است. در قسمت پشتی هم یک سنسور دوربین اصلی با رزولوشن 48 مگاپیکسل از نوع عریض (wide) در کنار سنسور 5 مگاپیکسل فوق عریض (ultrawied) با زاویه دید 120 درجه و سنسور 2 مگاپیکسل سنجش عمق برای ثبت هرچه بهتر تصاویر پرتره توسط سنسور دوربین اصلی، دوربین‌های سه‌گانه هوآوی nova Y70 را تشکیل می‌دهند. در بخش مشخصات سخت‌افزاری هم این گوشی به پردازنده . اختصاصی Kirin 710A Chipset هوآوی مجهز شده است که توانایی ارائه عملکرد خوبی در اجرای بازی‌های و نرم‌افزار‌های محبوب دارد. باتری قدرتمند با میزان ظرفیت 6000 میلی‌آمپر‌ساعت هم سبب شده تا این گوشی به ازای هر بار شارژ صد درصدی به‌راحتی طول عمر مفید (زمان آماده به‌کار) دو روز را در شرایط استفاده معمولی ارائه کند. از ویژگی‌های خاص وای 70 می‌توان به حس‌گر اثر انگشت و مناسب عکاسی بودن، اشاره کرد.";

// Feature Icons
const featureIcons = {
  positive: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="scale: 0.7" width="24" height="24"><defs><symbol id="addSimple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z" clip-rule="evenodd"></path></symbol></defs><g fill="#00A049"><path fill-rule="evenodd" d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z" clip-rule="evenodd"></path></g></svg>`,
  negative: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="scale: 0.7" width="24" height="24"><defs><symbol id="removeSimple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H4v-2h16z"></path></symbol></defs><g fill="#D32F2F"><path d="M20 11v2H4v-2h16z"></path></g></svg>`,
};

// Maximum Rating
const maxRating = 5;

/****************************************************/
/*************** INITIAL DATA SECTION ***************/
// Product Colors
const productColors = [
  { name: "مشکی", color: "rgb(33, 33, 33)", isDark: false },
  { name: "سفید", color: "rgb(255, 255, 255)", isDark: true },
  { name: "قرمز", color: "rgb(244, 67, 54)", isDark: false },
  { name: "آبی", color: "rgb(33, 150, 243)", isDark: false },
  { name: "صورتی", color: "rgb(255, 128, 171)", isDark: true },
  { name: "سبز تیره", color: "rgb(0, 104, 42)", isDark: false },
];

// Product Gallery
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

// Videos Data
const videos = [
  { title: "بررسی گوشی Realme narzo 50 📱", userName: "RaviUnbox" },
  {
    title: "تیزر رسمی ریلمی نارزو ۵۰ - Realme Narzo 50",
    userName: "BestTechVideos",
  },
];

// Products Data
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

// Comments Data
const allComments = [
  {
    rating: 5,
    title: "",
    date: "10/8/2023",
    userName: "حمید محمدی",
    role: "خریدار",
    suggested: true,
    comment: "خوبه",
    features: [],
    images: [],
    retailer: "دیجی‌کالا",
    color: "مشکی",
    reactions: {
      like: 0,
      dislike: 0,
    },
  },
  {
    rating: 3,
    title: "",
    date: "10/7/2023",
    userName: "محسن شکرگزار",
    role: null,
    suggested: null,
    comment:
      "گوشی خوبیه باطری عالی کیفیت صفحه نمایش و تاچ از سامسونگ های میان رده بهتره دوربینش خوبه بسته پلمپ به دستم رسید",
    features: [],
    images: [],
    retailer: "",
    color: "صورتی",
    reactions: {
      like: 0,
      dislike: 0,
    },
  },
  {
    rating: 3,
    title: "کاملا معمولی",
    date: "10/7/2023",
    userName: "کاربر دیجی‌کالا",
    role: "",
    suggested: null,
    comment:
      "از دیجی خریدم خرداد 1402رنگ مشکی 5/64/9000،وقتی با تعصب بیجا به هواوی سابق تصمیم گرفتم همین میشه دیگه، اگر به عقب برگردم یا سامسونگ یا شیامی و آنر از خریدم پشیمان هستم",
    features: [],
    images: [],
    retailer: "",
    color: "آبی",
    reactions: {
      like: 1,
      dislike: 0,
    },
  },
  {
    rating: 4,
    title: "گوشی عالییه",
    date: "10/1/2023",
    userName: "امیررضا مختاریان",
    role: "خریدار",
    suggested: true,
    comment:
      "گوشی خوبیه ولی معایبی هم داره از نظر باطری و کار روز کره خوبه اگه کسی شارژ نگهداشتن براش مهمه بخره چون ۳روز و در حالت عادی و استفاده معمولی (زنگ و پیام) یک هفته میره که خیلی خوبه",
    features: [
      {
        title: "قیمت مناسب",
        isGood: true,
      },
      {
        title: "حسگر اثر انگشت",
        isGood: true,
      },
      {
        title: "دوربین نصب به قیمت خوب",
        isGood: true,
      },
      {
        title: "باطری قوی",
        isGood: true,
      },
      {
        title: "نداشتن گوگل که قابل حله",
        isGood: false,
      },
      {
        title: "نبود قاب در بازار",
        isGood: false,
      },
      {
        title: "حتی فریم دور هم پلاستیکی",
        isGood: false,
      },
      {
        title: "دکمه اثر انگشت سریع شل میشه",
        isGood: false,
      },
    ],
    images: ["./img/product-details/productImg01.jpg"],
    retailer: "سپهر همراه",
    color: "سفید",
    reactions: {
      like: 6,
      dislike: 0,
    },
  },
];
// Minified Comments
let comments = allComments.slice(0, 2);

// Questions Data
const allQuestions = [
  {
    question: "سلام رم مجازي فعال ميشه براي اين و باطريش چقدر ميكشه پر بشه؟",
    answers: [],
  },
  {
    question:
      "با سلام در این گوشی بجای گوگل پلی از چه نرم افزاری برای خدمات گوگل باید استفاده نمود ؟",
    answers: [
      {
        answer:
          "با سلام. از برنامه مایکت. بازار. و حتی خود برنامه گوگل، نه گوگل پلی بلکه خود گوگل.",
        userName: "محمد ناصرى كيا",
        role: "خریدار",
        reactions: {
          like: 0,
          dislike: 0,
        },
      },
    ],
  },
  {
    question: "سلام رم مجازي فعال ميشه براي اين و باطريش چقدر ميكشه پر بشه؟",
    answers: [],
  },
  {
    question:
      "با سلام در این گوشی بجای گوگل پلی از چه نرم افزاری برای خدمات گوگل باید استفاده نمود ؟",
    answers: [
      {
        answer:
          "با سلام. از برنامه مایکت. بازار. و حتی خود برنامه گوگل، نه گوگل پلی بلکه خود گوگل.",
        userName: "محمد ناصرى كيا",
        role: "خریدار",
        reactions: {
          like: 0,
          dislike: 0,
        },
      },
    ],
  },
  {
    question: "سلام رم مجازي فعال ميشه براي اين و باطريش چقدر ميكشه پر بشه؟",
    answers: [],
  },
  {
    question:
      "با سلام در این گوشی بجای گوگل پلی از چه نرم افزاری برای خدمات گوگل باید استفاده نمود ؟",
    answers: [
      {
        answer:
          "با سلام. از برنامه مایکت. بازار. و حتی خود برنامه گوگل، نه گوگل پلی بلکه خود گوگل.",
        userName: "محمد ناصرى كيا",
        role: "خریدار",
        reactions: {
          like: 0,
          dislike: 0,
        },
      },
    ],
  },
];
// Minified Questions
let questions = allQuestions.slice(0, 4);

// Techs Data
const allTechs = [
  { title: "ابعاد", contents: ["۸.۹۸×۷۷.۷×۱۶۸.۳"] },
  { title: "وزن", contents: ["۱۹۹ گرم"] },
  { title: "توضیحات سیم کارت", contents: ["سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)"] },
  { title: "اندازه", contents: ["۶.۷۴ اینچ"] },
  {
    title: ["ویژگی‌های خاص"],
    contents: [" مجهز به حس‌گر اثرانگشت", " مناسب عکاسی"],
  },
  {
    title: "شبکه های ارتباطی",
    contents: ["2G", "3G", "4G"],
  },
  {
    title: ["قابلیت‌های دوربین"],
    contents: [
      "دارای سه دوربین در پشت گوشی | دوربین ۴۸ مگاپیکسل + ۵ مگاپیکسل + ۲ مگاپیکسل دوربین اول از نوع عریض (Wide) با رزولوشن ۴۸ مگاپیکسل، دریچه‌ی دیافراگم f/۱.۸ دوربین دوم از نوع فوق عریض (Ultrawide)، با رزولوشن ۵ مگاپیکسل و زاویه دید ۱۲۰ درجه و گشودگی دریچه دیافراگم f/۲.۲ دوربین سوم از نوع حسگر عمق (Depth Sensor) با رزولوشن ۲ مگاپیکسل، دریچه‌ی دیافراگم f/۲.۴ قابلیت عکاسی HDR قابلیت عکاسی پانوراما (Panorama)",
    ],
  },
];

// Minified Techs
let techs = allTechs.slice(0, 2);

// Comments Images
const allImages = allComments
  .map((comment) => (comment.images ? [...comment.images] : ""))
  .flat();

// Comments Suggesting the Product
const suggestingComments = allComments.filter(
  (comment) => comment.suggested !== null
);

// All Ratings
const ratings = allComments.filter((comment) => comment.rating !== null);

// Average Rating
const averageRating =
  ratings
    .map((rating) => rating.rating)
    .reduce((previous, current) => previous + current, 0) / ratings.length;

// Star Rating
const starRating = (averageRating / maxRating) * 100;

/*!!!!!!!!!!!!!! INITIAL DATA SECTION !!!!!!!!!!!!!!*/
/****************************************************/

/*************************************************/
/*************** FUNCTIONS SECTION ***************/
// Text Shortener
const shortText = function (text, limit) {
  const letterCount = text.length;
  if (letterCount > limit) {
    return `${text.slice(0, limit)}...`;
  } else {
    return text;
  }
};

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

// Generate Tech Cards
const generateTechs = function () {
  techContainerEl.textContent = "";
  techs.forEach((tech) =>
    techContainerEl.insertAdjacentHTML("beforeend", techCard(tech))
  );
};

// Generate Comment Cards
const generateComments = function () {
  const width = window.innerWidth > 992;
  if (width) {
    commentsContainerEl.textContent = "";
    comments.forEach((comment) =>
      commentsContainerEl.insertAdjacentHTML("beforeend", commentCard(comment))
    );
  } else {
    responsiveCommentsContainerEl.textContent = "";
    allComments.forEach((comment) =>
      responsiveCommentsContainerEl.insertAdjacentHTML(
        "beforeend",
        responsiveCommentCard(comment)
      )
    );
  }
};

// Generate Question Cards
const generateQuestions = function () {
  const width = window.innerWidth > 992;
  if (width) {
    questionsContainerEl.textContent = "";
    questions.forEach((question) =>
      questionsContainerEl.insertAdjacentHTML(
        "beforeend",
        questionCard(question)
      )
    );
  } else {
    responsiveQuestionsContainerEl.textContent = "";
    allQuestions.forEach((question) =>
      responsiveQuestionsContainerEl.insertAdjacentHTML(
        "beforeend",
        responsiveQuestionCard(question)
      )
    );
  }
};

// Change Content Based on Size
const changeContent = () => {
  if (window.innerWidth < 992) {
    allMainElements.forEach((mainElement) =>
      mainElement.classList.add("d-none")
    );
    allResponsiveElements.forEach((responsiveElement) =>
      responsiveElement.classList.remove("d-none")
    );
    colorsContainerEl.innerHTML = productColors
      .map((productColor) => colorElementResponsive(productColor))
      .join("");
    initialFirstColor();
    generateComments();
    generateQuestions();
  }
  if (window.innerWidth >= 992) {
    allMainElements.forEach((mainElement) =>
      mainElement.classList.remove("d-none")
    );
    allResponsiveElements.forEach((responsiveElement) =>
      responsiveElement.classList.add("d-none")
    );
    colorsContainerEl.innerHTML = productColors
      .map((productColor) => colorElement(productColor))
      .join("");
    initialFirstColor();
    generateComments();
    generateQuestions();
  }
};
/*************** FUNCTIONS SECTION ***************/
/*************************************************/

/**********************************************/
/*************** MARKUP SECTION ***************/
// Gallery Card Markup - Main
const galleryCard = (content) => {
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

// Gallery Card Markup - Responsive
const galleryCardResponsive = (content) => {
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

// Gallery Mini Card Markup
const galleryMiniCard = (content, index) => {
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

// Customer Gallery Card Markup
const customerGalleryCard = (content) => {
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

// Color Element Markup - Main
const colorElement = (productColor) => {
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

// Color Element Markup - Responsive
const colorElementResponsive = (productColor) => {
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

// Video Card Markup
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

// Product Card Markup
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
                      <span class="fs-5 lh-base">${
                        product.discount * 100
                      }%</span>
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

// Image Card Markup
const imageCard = (image) => {
  return `
    <div
      class="overflow-hidden border-complete ml-2 my-2 rounded overflow-hidden cursor-pointer object-cover shrink-0 styles_pdpCommentSectionThumbnailItem__4WIsJ"
      style="
        width: 57px;
        height: 57px;
        border-radius: 8px;
        line-height: 0;
      "
    >
      <img
        class="w-full bg-neutral-000 inline-block"
        src=${image}
        width="57"
        height="57"
        alt=""
        title=""
        style="object-fit: cover; border-radius: 8px"
      />
    </div>
  `;
};

// Comment Card Markup - Main
const commentCard = (comment) => {
  const color = productColors.find(
    (productColor) => comment.color === productColor.name
  )?.color;
  return `
    <article class="py-4 d-flex align-items-start border-top">
      <div class="mt-2 me-3" style="min-width: 32px">
        <div
          class="rounded-3 d-flex justify-content-center align-items-center px-2 bg-success text-white fs-5"
        >
          ${Number(comment.rating).toFixed(1)}
        </div>
      </div>
      <div class="w-100 d-flex justify-content-between">
        <div class="w-100">
          ${comment.title ? `<p class="fs-3 pb-3">${comment.title}</p>` : ""}
          <div class="d-flex align-items-start w-100 mt-1">
            <div class="flex-grow-1">
              <div>
                <div
                  class="d-flex align-items-center pb-3 border-bottom"
                >
                  <p class="fs-5 d-inline" style="color: #a1a3a8">
                    ${new Intl.DateTimeFormat("fa-IR", {
                      dateStyle: "medium",
                    }).format(new Date(comment.date))}
                  </p>
                  <div class="d-flex m-2">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <symbol
                          id="dotOutline"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <circle cx="8" cy="8" r="2"></circle>
                        </symbol>
                      </defs>
                      <g fill="#A1A3A8">
                        <circle cx="8" cy="8" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                  <p class="fs-5 d-inline" style="color: #a1a3a8">
                    ${comment.userName}
                  </p>
                  ${
                    comment.role === "خریدار"
                      ? `<div
                    class="d-inline-flex align-items-center px-3 py-1 text-success rounded-4 ms-3"
                    style="
                    background-color: rgba(76, 175, 80, 0.1);
                    "
                  >
                    <p class="d-inline-block fs-5">خریدار</p>
                  </div>`
                      : ""
                  }
                </div>
                <div class="d-flex align-items-center gap-5">
                  ${
                    comment.suggested
                      ? `
                    <div
                      class="text-success d-flex align-items-center pt-2"
                    >
                      <div class="d-flex me-2">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
                          style="scale: 0.7"
                          width="24"
                          height="24"
                        >
                          <defs>
                            <symbol
                              id="thumbsUp"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                                clip-rule="evenodd"
                              ></path>
                            </symbol>
                          </defs>
                          <g fill="#4CAF50">
                            <path
                              fill-rule="evenodd"
                              d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                              clip-rule="evenodd"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p class="fs-5">پیشنهاد می‌کنم</p>
                    </div>
                    `
                      : ""
                  }
                </div>
              </div>
              <p class="fs-4 pt-3 mb-1 lh-lg">
                ${comment.comment}
              </p>
                ${
                  comment.features
                    ? comment.features
                        .map((feature) => {
                          return `
                          <div class="d-flex align-items-center pt-2 fs-5">
                            <div class="d-flex me-2">
                              ${
                                feature.isGood
                                  ? featureIcons.positive
                                  : featureIcons.negative
                              }
                            </div>
                            <p class="text-body-2">
                              ${feature.title}
                            </p>
                          </div>      
                      `;
                        })
                        .join("")
                    : ""
                }
                ${
                  comment.images
                    ? `<div
                  class="d-flex justify-content-start align-items-center flex-wrap gap-2"
                  >
                  ${comment.images
                    .map((image) => {
                      return `
                    <div
                    class="my-3"
                    style="
                      width: 50px;
                      height: 50px;
                      line-height: 0;
                    "
                  >
                    <img
                      class="w-full inline-block"
                      src=${image}
                      width="50"
                      height="50"
                      alt=${comment.title}
                      title=""
                      style="object-fit: contain"
                    />
                  </div>`;
                    })
                    .join("")}
                </div>`
                    : ""
                }
              <div
                class="d-flex align-items-center pt-3 border-top mt-3 fs-5"
                style="color: #3f4064"
              >
                ${
                  comment.retailer
                    ? `<span class="d-flex align-items-center"
                  ><div class="d-flex me-2">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      style="scale: 0.8"
                      width="24"
                      height="24"
                    >
                      <defs>
                        <symbol
                          id="seller"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                            clip-rule="evenodd"
                          ></path>
                        </symbol>
                      </defs>
                      <g fill="#A1A3A8">
                        <path
                          fill-rule="evenodd"
                          d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p class="d-inline">${comment.retailer}</p></span
                >
                <div class="d-flex m-2">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <defs>
                      <symbol
                        id="dotOutline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="2"></circle>
                      </symbol>
                    </defs>
                    <g fill="#A1A3A8">
                      <circle cx="8" cy="8" r="2"></circle>
                    </g>
                  </svg>
                </div>
                `
                    : ""
                }
                ${
                  comment.color
                    ? `
                <div
                  class="ml-2 d-inline-block border rounded-circle me-3 border-circle"
                  style="
                    background-color: ${color};
                    width: 14px;
                    height: 14px;
                    padding: 2px;
                  "
                ></div>
                <p class="text-caption text-neutral-700 inline">
                  ${comment.color}
                </p>
                `
                    : ""
                }
              </div>
              <div
                class="d-flex align-items-center pt-3 justify-content-end"
                style="color: #81858b"
              >
                <p class="fs-5 me-5">آیا این دیدگاه مفید بود؟</p>
                <div class="d-flex align-items-center">
                  <button
                    class="position-relative d-flex align-items-center border-0 py-1 px-3 fs-5 bg-transparent"
                    style="color: #a1a3a8"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center position-relative flex-grow-1"
                    >
                      <p>${comment.reactions.like}</p>
                      <div class="d-flex ms-1">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <defs>
                            <symbol
                              id="thumbsUp"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                                clip-rule="evenodd"
                              ></path>
                            </symbol>
                          </defs>
                          <g fill="#A1A3A8">
                            <path
                              fill-rule="evenodd"
                              d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                              clip-rule="evenodd"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div></button
                  ><button
                    class="position-relative d-flex align-items-center border-0 py-1 ps-3 fs-5 bg-transparent"
                    style="color: #a1a3a8"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center position-relative flex-grow-1"
                    >
                      <p>${comment.reactions.dislike}</p>
                      <div class="d-flex ms-1">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <defs>
                            <symbol
                              id="thumbsDown"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
                                clip-rule="evenodd"
                              ></path>
                            </symbol>
                          </defs>
                          <g fill="#A1A3A8">
                            <path
                              fill-rule="evenodd"
                              d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
                              clip-rule="evenodd"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="me-auto pt-1">
          <div>
            <button>
              <div class="d-flex">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <defs>
                    <symbol
                      id="moreVert"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        clip-rule="evenodd"
                      ></path>
                    </symbol>
                  </defs>
                  <g fill="#A1A3A8">
                    <path
                      fill-rule="evenodd"
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      clip-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
};

// Comment Card Markup - Responsive
const responsiveCommentCard = (comment) => {
  return `
    <article
      class="border rounded-4 px-4 pb-4 pt-3 d-flex flex-column"
      style="height: 100%; min-width: 270px; max-width: 300px"
    >
      ${
        comment.title
          ? `<p class="fs-4 fw-bold lh-lg">${comment.title}</p>`
          : ""
      }
      ${
        comment.suggested
          ? `
      <div class="text-success d-flex align-items-center pt-2">
        <div class="d-flex me-2" style="margin-right: -5px">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            style="scale: 0.7"
            width="24"
            height="24"
          >
            <defs>
              <symbol
                id="thumbsUp"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                  clip-rule="evenodd"
                ></path>
              </symbol>
            </defs>
            <g fill="#4CAF50">
              <path
                fill-rule="evenodd"
                d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                clip-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
        <p class="fs-5">پیشنهاد می‌کنم</p>
      </div>
      `
          : ""
      }
      <p class="fs-4 lh-lg mt-2">${shortText(comment.comment, 110)}</p>
      <div
        class="d-flex align-items-center mt-auto"
        style="color: #a1a3a8"
      >
        <p>${new Intl.DateTimeFormat("fa-IR", {
          dateStyle: "medium",
        }).format(new Date(comment.date))}</p>
        <div class="d-flex mx-1">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <defs>
              <symbol
                id="dotOutline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="2"></circle>
              </symbol>
            </defs>
            <g fill="#A1A3A8">
              <circle cx="8" cy="8" r="2"></circle>
            </g>
          </svg>
        </div>
        <p>${comment.userName}</p>
      </div>
    </article>
  `;
};

// Tech Card Markup
const techCard = (tech) => {
  return `
    <div class="w-100 d-flex fs-4">
      <p
        class="d-flex me-4 py-4 p-lg-2 flex-shrink-0"
        style="width: 20%; color: #81858b"
      >
        ${tech.title}
      </p>

      <div class="d-flex align-items-center border-bottom py-3 flex-grow-1">
        <ul class="d-flex flex-column w-100 mb-0 fs-5 fs-lg-4 gap-2" style="color: #0c0c0c">
         ${tech.contents.map((content) => `<li>${content}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
};

// Question Card Markup - Main
const questionCard = (question) => {
  return `
    <article class="py-3 border-bottom">
      <div class="d-flex align-items-center">
        <span class="me-4"
          ><div class="d-flex">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <defs>
                <symbol
                  id="question"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
              </defs>
              <g fill="#19BFD3">
                <path
                  fill-rule="evenodd"
                  d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg></div
        ></span>
        <p class="w-100 fs-4">
         ${question.question}
        </p>
      </div>
      <div>
        ${
          question.answers
            ? question.answers.map((answer) => {
                return `<div>
                  <div
                    class="d-flex align-items-center mt-4"
                    style="color: #62666d"
                  >
                    <p class="me-4 fs-5">پاسخ</p>
                    <div class="grow">
                      <p class="fs-4">
                        ${answer.answer}
                      </p>
                    </div>
                  </div>
                  <div
                    class="-dflex flex-column align-items-start justify-content-center"
                    style="margin-right: 40px"
                  >
                    <p class="fs-5" style="color: #a1a3a8">
                      ${answer.userName}
                    </p>
                    <div
                      class="d-inline-flex align-items-center px-3 py-1 text-success rounded-4"
                      style="background-color: rgba(76, 175, 80, 0.1); margin-right:-3px"
                    >
                      <p class="d-inline-block fs-5">${answer.role}</p>
                    </div>
                    <div
                      class="d-flex align-items-center pt-3 justify-content-end"
                      style="color: #81858b"
                    >
                      <p class="fs-5 me-5">آیا این پاسخ مفید بود؟</p>
                      <div class="d-flex align-items-center">
                        <button
                          class="position-relative d-flex align-items-center border-0 py-1 px-3 fs-5 bg-transparent"
                          style="color: #a1a3a8"
                        >
                          <div
                            class="d-flex align-items-center justify-content-center position-relative flex-grow-1"
                          >
                            <p>${answer.reactions.like}</p>
                            <div class="d-flex ms-1">
                              <svg
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                              >
                                <defs>
                                  <symbol
                                    id="thumbsUp"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </symbol>
                                </defs>
                                <g fill="#A1A3A8">
                                  <path
                                    fill-rule="evenodd"
                                    d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
                                    clip-rule="evenodd"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                          </div></button
                        ><button
                          class="position-relative d-flex align-items-center border-0 py-1 ps-3 fs-5 bg-transparent"
                          style="color: #a1a3a8"
                        >
                          <div
                            class="d-flex align-items-center justify-content-center position-relative flex-grow-1"
                          >
                            <p>${answer.reactions.dislike}</p>
                            <div class="d-flex ms-1">
                              <svg
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                              >
                                <defs>
                                  <symbol
                                    id="thumbsDown"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </symbol>
                                </defs>
                                <g fill="#A1A3A8">
                                  <path
                                    fill-rule="evenodd"
                                    d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
                                    clip-rule="evenodd"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`;
              })
            : ""
        }
        <div class="border-top mt-4" style="margin-right: 48px">
          <button
            class="position-relative d-flex align-items-center mt-3"
          >
            <span
              class="d-inline-flex align-items-center my-3 fs-5"
              >
              <span style="color: #19bfd3">${
                question.answers.length === 0 ? "ثبت پاسخ " : "ثبت پاسخ جدید"
              }</span>
              <div class="d-flex">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <defs>
                    <symbol
                      id="chevronLeft"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                      ></path>
                    </symbol>
                  </defs>
                  <g fill="#19BFD3">
                    <path
                      d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                    ></path>
                  </g>
                </svg></div
            ></span>
          </button>
        </div>
      </div>
    </article>
  `;
};

// Question Card Markup - Responsive
const responsiveQuestionCard = (question) => {
  return `
    <article
    class="border rounded-4 p-4 d-flex flex-column"
    style="height: 240px; min-width: 270px; max-width: 300px"
    >
      <div class="d-flex">
        <div class="d-flex">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <defs>
              <symbol
                id="question"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z"
                  clip-rule="evenodd"
                ></path>
              </symbol>
            </defs>
            <g fill="#19BFD3">
              <path
                fill-rule="evenodd"
                d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z"
                clip-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
        <span class="fs-4 ms-4 lh-lg"
          >${question.question}</span
        >
      </div>
      ${
        question.answers.length !== 0
          ? `<div class="d-flex mt-2">
      <span class="fs-5" style="color: #a1a3a8">پاسخ</span
      ><span class="fs-4 ms-4" style="color: #62666d"
        >${question.answers.at(0).answer}</span
      >
      </div>
      <p class="fs-5 mt-auto" style="color: #a1a3a8">
          ${question.answers.at(0).userName}
      </p>`
          : ""
      }
    </article>
  `;
};
/*!!!!!!!!!!!!!! MARKUP SECTION !!!!!!!!!!!!!!*/
/**********************************************/

/*******************************************************/
/*************** INITIAL CONTENT SECTION ***************/
generateTechs();
window.addEventListener("load", changeContent);
window.addEventListener("resize", changeContent);
colorsCountEl.textContent = productColors.length;
commentsCountElements.forEach(
  (commentsCountEl) => (commentsCountEl.textContent = allComments.length)
);
questionsCountEl.textContent = allQuestions.length;
remainingCommentsEl.textContent = comments.length;
remainingCommentsResponsiveEl.textContent = allComments.length;
remainingQuestionsEl.textContent = allQuestions.length - questions.length;
remainingQuestionsResponsiveEl.textContent = allQuestions.length;
introductionEl.textContent = shortText(introduction, 310);
suggestingCommentsElements.forEach(
  (suggestingCommentsEl) =>
    (suggestingCommentsEl.textContent = `${
      (suggestingComments.length / allComments.length) * 100
    }% (${suggestingComments.length} نفر)`)
);
ratingsCountElements.forEach(
  (ratingsCountEl) => (ratingsCountEl.textContent = ratings.length)
);
maxRatingEl.textContent = maxRating;
averageRatingElements.forEach(
  (averageRatingEl) => (averageRatingEl.textContent = averageRating)
);
starRatingEl.style.width = `${starRating}%`;
/*!!!!!!!!!!!!!! INITIAL CONTENT SECTION !!!!!!!!!!!!!!*/
/*******************************************************/

/***********************************************************/
/*************** NAVBAR INTERSECTION SECTION ***************/
detailsNavbarEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-item")) {
    detailNavItems.forEach((navItem) => {
      navItem.classList.remove("active-section");
    });
    e.target.classList.add("active-section");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeSection = detailNavItems.find(
        (navItem) => navItem.getAttribute("href").slice(1) === entry.target.id
      );
      detailNavItems.forEach((navItem) => {
        navItem.classList.remove("active-section");
      });
      activeSection?.classList.add("active-section");
    });
  },
  { threshold: 0.8 }
);

detailSections.forEach((section) => observer.observe(section));
/*!!!!!!!!!!!!!! NAVBAR INTERSECTION SECTION !!!!!!!!!!!!!!*/
/***********************************************************/

/**********************************************/
/*************** SWIPER SECTION ***************/
const imageGallery = new Swiper(".image-gallery", {
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

const offersSwiper = new Swiper(".offers-swiper", {
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
/*!!!!!!!!!!!!!! SWIPER SECTION !!!!!!!!!!!!!!*/
/**********************************************/

/******************************************************/
/*************** EXPAND CONTENT SECTION ***************/
// Expand Tech Section Content
techShowMoreEl.addEventListener("click", function () {
  if (techs !== allTechs) {
    techs = allTechs;
    techShowMoreEl.textContent = "بستن";
    generateTechs();
  } else if (techs === allTechs) {
    techs = allTechs.slice(0, 2);
    techShowMoreEl.textContent = "مشاهده بیشتر";
    generateTechs();
  }
});

// Expand Comments Section Content
commentsShowMoreEl.addEventListener("click", function () {
  if (comments !== allComments) {
    comments = allComments;
    document.querySelector(".more-comments").textContent = "";
    generateComments();
  }
});

// Expand Question Section Content
questionsShowMoreEl.addEventListener("click", function () {
  if (questions !== allQuestions) {
    questions = allQuestions;
    document.querySelector(".more-questions").textContent = "";
    generateQuestions();
  }
});

// Expand Introduction Section Content
introductionShowMoreEl.addEventListener("click", function () {
  if (introductionEl.textContent !== introduction) {
    introductionEl.textContent = introduction;
    introductionShowMoreEl.textContent = "بستن";
  } else {
    introductionEl.textContent = shortText(introduction, 310);
    introductionShowMoreEl.textContent = "مشاهده بیشتر";
  }
});

// Expand Expert Section Content
expertShowMoreEl.addEventListener("click", function () {
  console.log(expertReviewEl);
  if (!expertReviewEl.classList.contains("expanded")) {
    expertShowMoreEl.querySelector("span").textContent = "بستن";
    expertReviewEl.classList.add("expanded");
  } else if (expertReviewEl.classList.contains("expanded")) {
    expertShowMoreEl.querySelector("span").textContent = "مشاهده بیشتر";
    expertReviewEl.classList.remove("expanded");
  }
});
/*!!!!!!!!!!!!!! EXPAND CONTENT SECTION !!!!!!!!!!!!!!*/
/******************************************************/

/******************************************************/
/*************** DATA INJECTION SECTION ***************/
// Product Gallery Swiper - Main
productGallery.forEach((product) =>
  expandedGalleryEl.insertAdjacentHTML("beforeend", galleryCard(product))
);

// Product Gallery Swiper - Responsive
productGallery.forEach((product) =>
  imageGalleryEl.insertAdjacentHTML("beforeend", galleryCardResponsive(product))
);

// Product Mini Gallery
productGallery.forEach((product, index) =>
  expandedMiniGalleryEl.insertAdjacentHTML(
    "beforeend",
    galleryMiniCard(product, index)
  )
);

// Customer Product Gallery
productGallery.forEach((product) =>
  cusomersExpandedGalleryEl.insertAdjacentHTML(
    "beforeend",
    customerGalleryCard(product)
  )
);

// Video Carousel
videos.forEach((video, index) =>
  relatedVideosSwiper.insertAdjacentHTML("beforeend", videoCard(video, index))
);

// Products Swiper
products.forEach((product, index) =>
  offersWrapper.insertAdjacentHTML("beforeend", productCard(product, index))
);

// Product Images
imagesContainerEl.forEach((container) => {
  allImages.forEach((image) =>
    container.insertAdjacentHTML("beforeend", imageCard(image))
  );
});
/*!!!!!!!!!!!!!! DATA INJECTION SECTION !!!!!!!!!!!!!!*/
/******************************************************/

/******************************************************/
/*************** EVENT LISTENERS SECTION ***************/
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
/*!!!!!!!!!!!!!! EVENT LISTENERS SECTION !!!!!!!!!!!!!!*/
/******************************************************/
