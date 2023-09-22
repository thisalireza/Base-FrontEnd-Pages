function myFunction(id) {
    var element = document.getElementById(id);
    let allTypeofpayments = document.querySelectorAll(".typeofpayment");
    allTypeofpayments.forEach(itm =>{
      itm.style.backgroundColor = "#fff";
    })
    element.style.backgroundColor = "#e9e9f5";
  }



