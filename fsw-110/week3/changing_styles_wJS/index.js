var birdNames = [
    "Bald Eagle",
    "Osprey",
    "Peregrine Falcon",
    "Hawk",
    "Owl"
    
]
var  birdList = document.getElementById("birds")

for(var i = 0; i < birdNames.length; i++){
    var newName = document.createElement("li")
    newName.textContent = birdNames[i]
    birdList.append(newName)
}

var birds = document.getElementById("birds")
birds.style.fontSize = "20px"
birds.style.fontWeight = "lighter"
birds.style.fontFamily = "sans-serif"
birds.style.color = "cornflowerBlue"

document.getElementsByClassName("border")

