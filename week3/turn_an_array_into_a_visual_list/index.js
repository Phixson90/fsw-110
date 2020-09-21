<<<<<<< HEAD
var helloWorld = [
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World"
]


var helloWorldList = document.getElementById("hw")



for (var i = 0; i < helloWorld.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = helloWorld [i]
    helloWorldList.append(newName)
}

document.getElementById("hw").style.color = "green";


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

for (var i = 0; i < names.length; i++) { 
    console.log(names[i]); 
=======
var helloWorld = [
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World"
]


var helloWorldList = document.getElementById("hw")



for (var i = 0; i < helloWorld.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = helloWorld [i]
    helloWorldList.append(newName)
}

document.getElementById("hw").style.color = "green";


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

for (var i = 0; i < names.length; i++) { 
    console.log(names[i]); 
>>>>>>> 4806911968eb4c809277bbff32a21b347f22e67e
} 