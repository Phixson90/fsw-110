var aHome = document.createElement("a");
var link = document.createTextNode ("Home");
aHome.appendChild(link);
title = "Home";
aHome.href = "*Home";
aHome.style.textDecoration = "none"
aHome.style.color = "green"
aHome.style.backgroundColor = "tan"
document.body.appendChild(aHome);

var aContact = document.createElement("a");
var link = document.createTextNode ("Contact");
aContact.appendChild(link);
title = "Contact";
aContact.href = "*Contact";
aContact.style.textDecoration = "none"
aContact.style.color = "green"
aContact.style.backgroundColor = "tan"
document.body.appendChild(aContact);

var aAbout = document.createElement("a");
var link = document.createTextNode ("About");
aAbout.appendChild(link);
title = "About";
aAbout.href = "*about";
aAbout.style.textDecoration = "none"
aAbout.style.color = "green"
aAbout.style.backgroundColor = "tan"
document.body.appendChild(aAbout);


var myH1 = document.createElement("h1")
myH1.textContent = "My Basic Website Using Javascript."
myH1.style.textAlign = "center"
myH1.style.color = "lightGreen"
myH1.style.backgroundColor = "blue"
document.body.append(myH1)

var myP = document.createElement("p")
myP.textContent = "I am excited to be learning how to use Javascript. Below are the three pillars of website design"
myP.style.textAlign = "center"
myP.style.color = "yellow"
myP.style.backgroundColor = "green"
document.body.append(myP)

var list = document.createElement("ol");
list.setAttribute("id","JsOl");
list.style.textAlign = "center"
list.style.backgroundColor = "yellow"
list.style.color = "purple"
document.body.appendChild(list);

var listItems = document.createElement("li");
var firstLi = document.createTextNode("HTML");
listItems.appendChild(firstLi);
document.getElementById("JsOl").appendChild(listItems);

var listItems = document.createElement("li");
var firstLi = document.createTextNode("CSS");
listItems.appendChild(firstLi);
document.getElementById("JsOl").appendChild(listItems);

var listItems = document.createElement("li");
var firstLi = document.createTextNode("Javasript");
listItems.appendChild(firstLi);
document.getElementById("JsOl").appendChild(listItems);

var myFooter = document.createElement("footer")
myFooter.textContent = "Website designed by Paul Hixson"
myFooter.style.textAlign ="center"
myFooter.style.backgroundColor = "Brown"
myFooter.style.color = "yellow"
document.body.append(myFooter)