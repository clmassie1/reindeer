let colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
let reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

    
 let hoohoElement = document.getElementById("colors");

 for(let u = 0; u < reindeer.length; u++) { 
      
 hoohoElement.innerHTML += colors[u] + " " + reindeer[u] + "<p>";
 };
      
 

    
