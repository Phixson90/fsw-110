var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS Site"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

var list = document.createElement("ol");
list.setAttribute("id","JsOl");
document.body.appendChild(list);

var listItems = document.createElement("li");
var firstLi = document.createTextNode("Green");
listItems.appendChild(firstLi);
document.getElementById("JsOl").appendChild(listItems);

var listItems = document.createElement("li");
var firstLi = document.createTextNode("Red");
listItems.appendChild(firstLi);
document.getElementById("JsOl").appendChild(listItems);

var listItems = document.createElement("li");
var firstLi = document.createTextNode("Purple");
listItems.appendChild(firstLi);
document.getElementById("JsOl").appendChild(listItems);
