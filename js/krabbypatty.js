// helped with what i wanted to do https://jsfiddle.net/kym2rvyL/1/
var cartNum = 0;
window.addEventListener("click", function(e){
  //menu
  if(document.getElementById("toggle").contains(e.target)){
    document.getElementById("menu_stuff").style.width = "40%";
  }
  else if(!document.getElementById("menu_items").contains(e.target)){
    // if not clicking inside menu, close menu
    document.getElementById("menu_stuff").style.width = "0%";
  }

  //cart menu
  if(document.getElementById("toggle_cart").contains(e.target)){
    document.getElementById("menu_cart_stuff").style.width = "25%";
  }else if(!document.getElementById("menu_cart_items").contains(e.target)){
    document.getElementById("menu_cart_stuff").style.width = "0%";
  }
});
