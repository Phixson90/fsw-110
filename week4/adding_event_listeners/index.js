document.getElementById("square").addEventListener("mouseover", function(){
    document.body.style.backgroundColor = "blue"
})

document.getElementById("square").addEventListener("mousedown", function(){
    document.body.style.backgroundColor = "red"
})

document.getElementById("square").addEventListener("mouseup", function(){
    document.body.style.backgroundColor = "yellow"
})

document.getElementById("square").addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "green"
})

document.getElementById("square").addEventListener("scroll", function(){
    document.body.style.backgroundColor = "orange"
})


function myFunction(event) {
    var x = event.key;
  
    if (x == "y" || x == "Y") { 
        document.body.style.backgroundColor = "yellow"
    }
  }

  function myFunction(event) {
    var x = event.key;
  
    if (x == "b" || x == "B") { 
        document.body.style.backgroundColor = "blue"
    }
  }

  function myFunction(event) {
    var x = event.key;
  
    if (x == "o" || x == "O") { 
        document.body.style.backgroundColor = "orange"
    }
  }

  function myFunction(event) {
    var x = event.key;
  
    if (x == "g" || x == "G") { 
        document.body.style.backgroundColor = "green"
    }
  }

  function myFunction(event) {
    var x = event.key;
  
    if (x == "r" || x == "R") { 
        document.body.style.backgroundColor = "red"
    }
  }

