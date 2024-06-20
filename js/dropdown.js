const chevronDown =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol xmlns="http://www.w3.org/2000/svg" id="chevronDown" viewBox="0 0 18 18"><path d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"/></symbol></defs><use xlink:href="#chevronDown" fill="#424750"/></svg>';
const chevronUp =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><defs><symbol xmlns="http://www.w3.org/2000/svg" id="chevronUp" viewBox="0 0 24 24"><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"/></symbol></defs><use xlink:href="#chevronUp" fill="#424750"/></svg>';

const dropdown = function () {
  document.querySelectorAll(".nav-button").forEach((product) =>
    product.addEventListener("click", function (e) {
      this.parentNode.classList.toggle("closed");
      this.parentNode.querySelector(".dropdown-icon").innerHTML = chevronDown;
      if (!this.parentNode.classList.contains("closed")) {
        this.parentNode.querySelector(".dropdown-icon").innerHTML = chevronUp;
      }
    })
  );
};
