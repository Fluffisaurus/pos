window.onload = function () {
  //check if its first load, if it is then set values
  if (localStorage.getItem("firstLoad") === null) {
    localStorage.setItem("firstLoad", 1);
    localStorage.setItem("cartNum", 0);
    localStorage.setItem("men", 0);
    localStorage.setItem("women", 0);
    console.log(localStorage.getItem("cartNum"));
  } 
  else {
    //check all values on load
    console.log(localStorage.getItem("cartNum"), localStorage.getItem("men"), localStorage.getItem("women"));
    //load in number of cart items
    document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
    //if num of cart items is > 0, load them in
    for (var i = 0; i < localStorage.getItem("men"); i++) {
      appendHtml(document.getElementById("scroll_section"), item1);
    }
    for (var i = 0; i < localStorage.getItem("women"); i++) {
      appendHtml(document.getElementById("scroll_section"), item2);
    }
  }
}

var names = ["Men\'s Listing", "Women\'s Listing"]
var item1 = '<div class="cart_listing" id="listing"><img src="img/mens-fossil.jpg" alt="placeholder"><div class="cart_item_description"><h3>Fossil Commuter 42mm Men\'s Watch</h3><h4>$139.99</h4></div></div>'
var item2 = '<div class="cart_listing" id="listing"><img src="img/womens-fossil2.jpg" alt="placeholder"><div class="cart_item_description"><h3>Fossil Jacqueline 36mm Women\'s Watch</h3><h4>$164.99</h4></div></div>'

function update() {
  //update cartNum
  if (localStorage.getItem("cartNum")) {
    increment("cartNum");
  }
  //add html chunk
  document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
  // console.log(document.title);

  // depending on the curr listing, add item and update 
  if (document.title === names[0]) {
    console.log("men + 1");
    appendHtml(document.getElementById("scroll_section"), item1);
    increment("men");
  } 
  else if (document.title === names[1]) {
    console.log("women + 1");
    appendHtml(document.getElementById("scroll_section"), item2);
    increment("women");
  } 
  else {
    console.log("shit went wrong at " + document.title);
  }
}

//general increment function that increments the item
function increment(str) {
  console.log("INCREMENTING THIS: " + str);
  var temp = localStorage.getItem(str);
  var tempInt = parseInt(temp);
  console.log("PRE-INCREMENT: " + tempInt);
  tempInt++;
  // console.log(tempInt);
  localStorage.setItem(str, tempInt);
  console.log("POST-INCREMENT : " + localStorage.getItem(str) + "\n");
}

//reset the value and remove all existing cart items
function resetValue() {
  localStorage.setItem("cartNum", 0);
  localStorage.setItem("men", 0);
  localStorage.setItem("women", 0);
  console.log(localStorage.getItem("cartNum"), localStorage.getItem("men"), localStorage.getItem("women"));
  document.getElementById("cart_label").innerHTML = "Cart(" + localStorage.getItem("cartNum") + ")";
  while (document.getElementById("scroll_section").children.length > 0) {
    document.getElementById("listing").remove();
  }
}

//general append function taken from: https://stackoverflow.com/a/10309703
function appendHtml(target, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    target.appendChild(div.children[0]);
  }
}

function showMiniCart(){
  if(document.getElementById("mini_scrollable_section").style.height === "0vh" || document.getElementById("mini_scrollable_section").style.height === ""){
    document.getElementById("mini_scrollable_section").style.height = "35vh";
    document.getElementById("checkout_link").style.display = "block";
  }
  else{
    document.getElementById("mini_scrollable_section").style.height = "0vh";
    document.getElementById("checkout_link").style.display = "none";
  }
}