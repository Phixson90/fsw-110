function newElement() {
  var l = document.createElement("li");
  var inputValue = document.getElementById("listItem").value;
  var total = document.createTextNode(inputValue);
  l.appendChild(total);

 
  if (inputValue === '') {
    alert("You forgot to add an item to your list!");
  } else {
    document.getElementById("ul").appendChild(l);
  }
  document.getElementById("listItem").value = "";


  var span = document.createElement("SPAN");
  var del = document.createTextNode("DELETE");
  span.className = "close";
  span.appendChild(del);
  l.appendChild(span);




  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
