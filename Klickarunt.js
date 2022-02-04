

document.addEventListener("keydown", function(event) {
    let bild = document.querySelector ("img")
    
    if (event.code === 'ArrowDown') {
        if (bild.classList.contains("RightUp")) {
            bild.classList.remove("RightUp")
            bild.classList.add("RightDown") 
        }
        if (bild.classList.contains("LeftUp")) {
            bild.classList.remove("LeftUp")
            bild.classList.add("LeftDown") 
        }
        
    }
    if (event.code === 'ArrowUp') {
        if (bild.classList.contains("RightDown")) {
            bild.classList.remove("RightDown")
            bild.classList.add("RightUp") 
        }
        if (bild.classList.contains("LeftDown")) {
            bild.classList.remove("LeftDown")
            bild.classList.add("LeftUp") 
        }

    }
    if (event.code === 'ArrowLeft') {
        if (bild.classList.contains("RightDown")) {
            bild.classList.remove("RightDown")
            bild.classList.add("LeftDown") 
        }
        if (bild.classList.contains("RightUp")) {
            bild.classList.remove("RightUp")
            bild.classList.add("LeftUp") 
        }

    }
    if (event.code === 'ArrowRight' || event.code === '65') {
        if (bild.classList.contains("LeftDown")) {
            bild.classList.remove("LeftDown")
            bild.classList.add("RightDown") 
        }
        if (bild.classList.contains("LeftUp")) {
            bild.classList.remove("LeftUp")
            bild.classList.add("RightUp") 
        }

    }
});
