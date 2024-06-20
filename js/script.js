// set addDeliveryElement height same as selectDeliveryFirstElement after content load
document.addEventListener("DOMContentLoaded", function () {
  let selectDeliveryFirstElement = document.querySelector(
    ".select-delivery div:first-child"
  );
  let addDeliveryElement = document.querySelector(".add-delivery");
  addDeliveryElement.style.height = `${selectDeliveryFirstElement.offsetHeight}px`;
});


//table
new DataTable("#myTable", {
  responsive: true,
  language: {
    decimal: "",
    emptyTable: "داده ای مطابق با عبارت جستجو شده یافت نشد",
    info: "نمایش _START_ تا _END_ از _TOTAL_ کل ورودی ها",
    infoEmpty: "نمایش 0 تا 0 از 0 کل رکورد",
    infoFiltered: "(فیلتر شده از _MAX_ تعداد رکورد)",
    infoPostFix: "",
    thousands: ",",
    lengthMenu: "نمایش _MENU_ تا از کل ورودی ها",
    loadingRecords: "بارگزاری...",
    processing: "",
    search: "جستجو: ",
    zeroRecords: "داده ای مطابق با عبارت جستجو شده یافت نشد",
    paginate: {
      first: "اول",
      last: "آخر",
      next: "بعدی",
      previous: "قبلی",
    },
  },
});

function myFunction(id) {
  var element = document.getElementById(id);
  let allTypeofpayments = document.querySelectorAll(".typeofpayment");
  allTypeofpayments.forEach((itm) => {
    itm.style.backgroundColor = "#fff";
  });
  element.style.backgroundColor = "#e9e9f5";
  element.style.transition = "0.6s";
}


