window.onload = function () {
  if (localStorage.getItem("firstLoad") === null) {
    localStorage.setItem("firstLoad", 1);
    localStorage.setItem("cartNum", 0);
    console.log(localStorage.getItem("cartNum"));
  } else {
    document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
  }
}

var item = '<div class="cart_listing" id="listing"><img src="https://via.placeholder.com/150" alt="placeholder"><div class="cart_item_description"><h3>Item Name</h3><p>item description</p></div></div>'

function update() {
  if (localStorage.getItem("cartNum")) {
    var temp = localStorage.getItem("cartNum");
    var tempInt = parseInt(temp);
    tempInt++;
    console.log(tempInt);
    localStorage.setItem("cartNum", tempInt);
  }
  document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
  appendHtml(document.getElementById("scroll_section"), item);
}

function resetValue() {
  localStorage.setItem("cartNum", 0);
  console.log(localStorage.getItem("cartNum"));
  document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
  while(document.getElementById("scroll_section").children.length > 0){
    document.getElementById("listing").remove();
  }
}

// https://stackoverflow.com/a/10309703
function appendHtml(target, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    target.appendChild(div.children[0]);
  }
}