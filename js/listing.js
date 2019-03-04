//Referenced https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

function showOverview() {
  var show = document.getElementById("overview");
  show.style.display ="none";
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}

// window.addEventListener("click", function(e){
//     if(document.getElementById("overview_title".contains(e))){
//         document.getElementById("overview").style.display = "block";
//     }
// });

function showMoreInfo() {
    var show = document.getElementById("moreInfo");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  }