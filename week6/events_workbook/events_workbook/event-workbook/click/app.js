// make the box disapear when the user clicks it

// document.getElementsByClassName("red-box").onclick = function(){

//     document.getElementsByClassName("red-box").style.visibility="hidden";

// }

document.getElementsByTagName("div").onclick = function(){
    document.getElementsByClassName("red-box").style.visibility = "hidden";
  }