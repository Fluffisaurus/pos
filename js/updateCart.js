window.onload = function () {
  //check if its first load, if it is then set values
  if (localStorage.getItem("firstLoad") === null) {
    localStorage.setItem("firstLoad", 1);
    localStorage.setItem("cartNum", 0);
    console.log(localStorage.getItem("cartNum"));
  } else {
    //load in number of cart items
    document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
    //if num of cart items is > 0, load them in
    for(var i = 0; i < localStorage.getItem("cartNum"); i++){
      appendHtml(document.getElementById("scroll_section"), item);
    }
  }
}

var item = '<div class="cart_listing" id="listing"><img src="https://via.placeholder.com/150" alt="placeholder"><div class="cart_item_description"><h3>Item Name</h3><p>item description</p></div></div>'

function update() {
  //update cartNum
  if (localStorage.getItem("cartNum")) {
    var temp = localStorage.getItem("cartNum");
    var tempInt = parseInt(temp);
    tempInt++;
    console.log(tempInt);
    localStorage.setItem("cartNum", tempInt);
  }
  //add html chunk
  document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
  appendHtml(document.getElementById("scroll_section"), item);
}

//reset the value and remove all existing cart items
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