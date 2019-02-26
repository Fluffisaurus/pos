// helped with what i wanted to do https://jsfiddle.net/kym2rvyL/1/
window.addEventListener("click", function(e){
  if(!document.getElementById("mobile_menu").contains(e.target)){
    document.getElementById("mobile_menu").style.width = "0%";
  }
  if(document.getElementById("hamburger").contains(e.target)){
    tenderize();
  }
});

function tenderize(){
  document.getElementById("mobile_menu").style.width = "40%";
}