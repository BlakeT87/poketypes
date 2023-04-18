
//grab needed elements from document to change photo and type text
const choiceImg = document.getElementById("choice-img")
const choiceEl = document.getElementById("choice-el")
const suggestedImg = document.getElementById("suggested-pokemon-container")

//set variable for opponent
let opponent = ""

//create objects for fire pokemon name and img path
let fire = [
    {
        "name": "Charmander",
        "source": "images/fire-type/Charmander.png"

    },
    {
        "name": "Charmeleon",
        "source": "images/fire-type/Charmeleon.png"
    },
    {
        "name": "Cyndaquil",
        "source": "images/fire-type/Cyndaquil.png"
    },
    {
        "name": "Growlithe",
        "source": "images/fire-type/Growlithe.png"
    },
    {
        "name": "Vulpix",
        "source": "images/fire-type/Vulpix.png"
    }
]
//array of objects for electric
let electric = [
    {
        "name": "Pikachu",
        "source": "images/electric-type/pikachu.png"
    },
    {
        "name": "Raichu",
        "source": "images/electric-type/raichu.png"
    },
    {
        "name": "Electabuzz",
        "source": "images/electric-type/electabuzz.png"
    },
    
    {
        "name": "Electrode",
        "source": "images/electric-type/electrode.png"
    },
    {
        "name": "Voltorb",
        "source": "images/electric-type/voltorb.png"
    }
]
//array of objects for water
let water = [
    {
        "name": "Squirtle",
        "source": "images/water/Squirtle.png"
    },
    {
        "name": "Poliwag",
        "source": "images/water/Poliwag.png"
    },
    {
        "name": "Seel",
        "source": "images/water/Seel.png"
    },
    
    {
        "name": "Shellder",
        "source": "images/water/Shellder.png"
    },
    {
        "name": "Blastoise",
        "source": "images/water/Blastoise.png"
    }
]
//array of objects for fighting
let fighting = [
    {
        "name": "Hitmonlee",
        "source": "images/fighting/Hitmonlee.png"
    },
    {
        "name": "Machop",
        "source": "images/fighting/Machop.png"
    },
    {
        "name": "Makuhita",
        "source": "images/fighting/Makuhita.png"
    },
    
    {
        "name": "Mankey",
        "source": "images/fighting/Mankey.png"
    },
    {
        "name": "Tauros",
        "source": "images/fighting/Tauros.png"
    }
]
//array of objects for ground
let ground = [
    {
        "name": "Cubone",
        "source": "images/ground/Cubone.png"
    },
    {
        "name": "Diglett",
        "source": "images/ground/Diglett.png"
    },
    {
        "name": "Geodude",
        "source": "images/ground/Geodude.png"
    },
    
    {
        "name": "Rhyhorn",
        "source": "images/ground/Rhyhorn.png"
    },
    {
        "name": "Sandshrew",
        "source": "images/ground/Sandshrew.png"
    }
]
//array of objects for flying
let flying = [
    {
        "name": "Zubat",
        "source": "images/flying/Zubat.png"
    },
    {
        "name": "Farfetch'd",
        "source": "images/flying/Farfetch'd.png"
    },
    {
        "name": "Hoothoot",
        "source": "images/flying/Hoothoot.png"
    },
    
    {
        "name": "Pidgey",
        "source": "images/flying/Pidgey.png"
    },
    {
        "name": "Spearow",
        "source": "images/flying/Spearow.png"
    }
]
//array of objects for rock
let rock = [
    {
        "name": "Geodude",
        "source": "images/rock/Geodude.png"
    },
    {
        "name": "Golem",
        "source": "images/rock/Golem.png"
    },
    {
        "name": "Graveler",
        "source": "images/rock/Graveler.png"
    },
    
    {
        "name": "Omanyte",
        "source": "images/rock/Omanyte.png"
    },
    {
        "name": "Onix",
        "source": "images/rock/Onix.png"
    }
]
//array of objects for bug
let bug = [
    {
        "name": "Caterpie",
        "source": "images/bug/Caterpie.png"
    },
    {
        "name": "Pinsir",
        "source": "images/bug/Pinsir.png"
    },
    {
        "name": "Venonat",
        "source": "images/bug/Venonat.png"
    },
    {
        "name": "Weedle",
        "source": "images/bug/Weedle.png"
    },
    {
        "name": "Wurmple",
        "source": "images/bug/Wurmple.png"
    }
]
//array of objects for dark
let dark = [
    {
        "name": "Darkrai",
        "source": "images/dark/Darkrai.png"
    },
    {
        "name": "Meowth-Alolan",
        "source": "images/dark/Meowth.png"
    },
    {
        "name": "Nickit",
        "source": "images/dark/Nickit.png"
    },
    {
        "name": "Poochyena",
        "source": "images/dark/Poochyena.png"
    },
    {
        "name": "Umbreon",
        "source": "images/dark/Umbreon.png"
    }
]
//array of objects for ice
let ice = [
    {
        "name": "Cubchoo",
        "source": "images/ice/Cubchoo.png"
    },
    {
        "name": "Glalie",
        "source": "images/ice/Glalie.png"
    },
    {
        "name": "Jynx",
        "source": "images/ice/Jynx.png"
    },
    {
        "name": "Snorunt",
        "source": "images/ice/Snorunt.png"
    },
    {
        "name": "Spheal",
        "source": "images/ice/Spheal.png"
    }
]

//create for loop to modify HTML with array objects
//this code worked as planned, but I placed it inside the switch element below to change images based on opponent chosen
/*for (let i = 0; i < electric.length; i++){
    suggestedImg.innerHTML += `
    <div id="suggested-pokemon-card">
    <img src=${electric[i].source}>
    <p>${electric[i].name}</p>
    </div>
    `
}
*/

//create if or switch statement to determine which array to choose from - eventually add type inside of array

//create a variable for whichever type is clicked
// let clicked = opponent???
//add event listener on the window
window.addEventListener("click", function(e){
   opponent = (e.target.getAttribute("id"))
   //create switch statement to change choiceEl and choiceImg based on opponent clicked
   switch (opponent){
    case "normal":
        choiceEl.textContent = "Fighting"
        choiceImg.src = "images/fighting.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < fighting.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${fighting[i].source}>
            <p>${fighting[i].name}</p>
            </div>
            `
        }
        break;
    case "fire": 
        choiceEl.textContent = "Water"
        choiceImg.src = "images/water.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < water.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${water[i].source}>
            <p>${water[i].name}</p>
            </div>
            `
        }
        break;
    case "water": 
        choiceEl.textContent = "Electric"
        choiceImg.src = "images/electric.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < electric.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${electric[i].source}>
            <p>${electric[i].name}</p>
            </div>
            `
        }
        break;
    case "grass": 
        choiceEl.textContent = "Fire"
        choiceImg.src = "images/fire.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < fire.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${fire[i].source}>
            <p>${fire[i].name}</p>
            </div>
            `
        }
        break;
    case "electric": 
        choiceEl.textContent = "Ground"
        choiceImg.src = "images/ground.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < ground.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${ground[i].source}>
            <p>${ground[i].name}</p>
            </div>
            `
        }
        break;
    case "ice": 
        choiceEl.textContent = "Fire"
        choiceImg.src = "images/fire.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < fire.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${fire[i].source}>
            <p>${fire[i].name}</p>
            </div>
            `
        }
        break;
    case "fighting": 
        choiceEl.textContent = "Flying"
        choiceImg.src = "images/flying.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < flying.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${flying[i].source}>
            <p>${flying[i].name}</p>
            </div>
            `
        }
        break;
    case "poison": 
        choiceEl.textContent = "Ground"
        choiceImg.src = "images/ground.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < ground.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${ground[i].source}>
            <p>${ground[i].name}</p>
            </div>
            `
        }
        break;
    case "ground": 
        choiceEl.textContent = "Water"
        choiceImg.src = "images/water.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < water.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${water[i].source}>
            <p>${water[i].name}</p>
            </div>
            `
        }
        break;
    case "flying": 
        choiceEl.textContent = "Rock"
        choiceImg.src = "images/rock.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < rock.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${rock[i].source}>
            <p>${rock[i].name}</p>
            </div>
            `
        }
        break;
    case "psychic": 
        choiceEl.textContent = "Bug"
        choiceImg.src = "images/bug.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < bug.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${bug[i].source}>
            <p>${bug[i].name}</p>
            </div>
            `
        }
        break;
    case "bug": 
        choiceEl.textContent = "Flying"
        choiceImg.src = "images/flying.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < flying.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${flying[i].source}>
            <p>${flying[i].name}</p>
            </div>
            `
        }
        break;
    case "rock": 
        choiceEl.textContent = "Water"
        choiceImg.src = "images/water.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < water.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${water[i].source}>
            <p>${water[i].name}</p>
            </div>
            `
        }
        break;
    case "ghost": 
        choiceEl.textContent = "Dark"
        choiceImg.src = "images/dark.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < dark.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${dark[i].source}>
            <p>${dark[i].name}</p>
            </div>
            `
        }
        break;
    case "dragon": 
        choiceEl.textContent = "Ice"
        choiceImg.src = "images/ice.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < ice.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${ice[i].source}>
            <p>${ice[i].name}</p>
            </div>
            `
        }
        break;
    case "dark": 
        choiceEl.textContent = "Fighting"
        choiceImg.src = "images/fighting.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < fighting.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${fighting[i].source}>
            <p>${fighting[i].name}</p>
            </div>
            `
        }
        break;
    case "steel": 
        choiceEl.textContent = "Fire"
        choiceImg.src = "images/fire.png"
        suggestedImg.innerHTML = ""
        for (let i = 0; i < fire.length; i++){
            suggestedImg.innerHTML += `
            <div id="suggested-pokemon-card">
            <img src=${fire[i].source}>
            <p>${fire[i].name}</p>
            </div>
            `
        }
        break;
        
}
})