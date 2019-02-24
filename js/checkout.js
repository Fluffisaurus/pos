function isBillingChecked() {
  var billingCheckBox = document.getElementById("checkbox_billing_address");
  var billingSection = document.getElementById("billing");
  if (billingCheckBox.checked === true) {
    billingSection.style.display = "none";
  } else {
    billingSection.style.display = "block";
  }
}

function isGiftChecked() {
  var giftCheckbox = document.getElementById("checkbox_is_gift");
  var giftSection = document.getElementById("gift");
  if (giftCheckbox.checked === true) {
    giftSection.style.display = "block";
  } else {
    giftSection.style.display = "none";
  }
}
