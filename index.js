
//grab needed elements from document to change photo and type text
const choiceImg = document.getElementById("choice-img")
const choiceEl = document.getElementById("choice-el")

//set variable for opponent
let opponent = ""

//create a variable for whichever type is clicked
// let clicked = opponent???

/*
window.onclick = e => {
    return e.target.getAttribute("id")
    opponent = 
}
*/

window.addEventListener("click", function(e){
   opponent = (e.target.getAttribute("id"))
   switch (opponent){
    case "normal":
        choiceEl.textContent = "fighting"
        choiceImg.src = "images/fighting.png"
        break;
    case "fire": 
        choiceEl.textContent = "water"
        choiceImg.src = "images/water.png"
        break;
    case "water": 
        choiceEl.textContent = "electric"
        choiceImg.src = "images/electric.png"
        break;
    case "grass": 
        choiceEl.textContent = "fire"
        choiceImg.src = "images/fire.png"
        break;
    case "electric": 
        choiceEl.textContent = "ground"
        choiceImg.src = "images/ground.png"
        break;
    case "ice": 
        choiceEl.textContent = "fire"
        choiceImg.src = "images/fire.png"
        break;
    case "fighting": 
        choiceEl.textContent = "flying"
        choiceImg.src = "images/flying.png"
        break;
    case "poison": 
        choiceEl.textContent = "ground"
        choiceImg.src = "images/ground.png"
        break;
    case "ground": 
        choiceEl.textContent = "water"
        choiceImg.src = "images/water.png"
        break;
    case "flying": 
        choiceEl.textContent = "rock"
        choiceImg.src = "images/rock.png"
        break;
    case "Psychic": 
        choiceEl.textContent = "bug"
        choiceImg.src = "images/bug.png"
        break;
    case "bug": 
        choiceEl.textContent = "flying"
        choiceImg.src = "images/flying.png"
        break;
    case "rock": 
        choiceEl.textContent = "water"
        choiceImg.src = "images/water.png"
        break;
    case "ghost": 
        choiceEl.textContent = "dark"
        choiceImg.src = "images/dark.png"
        break;
    case "dragon": 
        choiceEl.textContent = "ice"
        choiceImg.src = "images/ice.png"
        break;
    case "dark": 
        choiceEl.textContent = "fighting"
        choiceImg.src = "images/fighting.png"
        break;
    case "steel": 
        choiceEl.textContent = "fire"
        choiceImg.src = "images/fire.png"
        break;
        
}
})

//create a function to get the 'choice' pokemon determined by which type is clicked

