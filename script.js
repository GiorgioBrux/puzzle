let solution = "Start ";
// Get the modal

function getelements(){
    let ancestor = document.querySelector("body > div:nth-child(2) > div")
    return ancestor.getElementsByTagName('*');
}

// When the user clicks on <span> (x), close the modal
function hide() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


function magenta(){
    let elements = getelements();
    let magenta = 0;
    for(let i=0; i < elements.length; i++) {
        let e = elements[i];
        if(e.classList.contains('blue') && e.classList.contains('red')){
            e.classList.add('magenta');
        }
        if(e.classList.contains('magenta') && (!e.classList.contains('blue') || !e.classList.contains('red'))){
            e.classList.remove('magenta');
        }
        if(e.classList.contains('magenta')){
            magenta++;
        }

    }
    console.log(`Magenta = ` + magenta)
    if(magenta === 12) {
        console.log("Win! Solution: " + solution);
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
        let add = document.querySelector("#myModal > div")
        let tag = document.createElement("p");
        let text = document.createTextNode("Solution: " + solution);
        tag.appendChild(text);
        add.appendChild(tag);
    }
}

function one(up = true){
    let elements = getelements();
    let removed = 0;
    for(let i=0; i < elements.length; i++){
        let e = elements[i];
        if(e.classList.contains('blue')) {
            if(up && removed<6 || !up && removed>5) {
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('top')) || (up && !e.classList.contains('top'))){
                    e.classList.remove('blue');
                    elements[i-1].classList.add('blue');
                }
                removed++;
            }
            else{
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('down')) || (up && !e.classList.contains('down'))){
                    e.classList.remove('blue');
                    elements[i+1].classList.add('blue');
                    i++;
                }
                removed++;
            }
        }
    }
    solution += `> 1 ${up ? 'up' : 'down'} `;
    magenta();
}

function twothirds(up = true){
    let elements = getelements();
    let removed = 0;
    for(let i=0; i < elements.length; i++){
        let e = elements[i];
        if(removed === 8) removed = 0;
        if(e.classList.contains('blue')) {
            if(up && removed<4 || !up && removed>3) {
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('top')) || (up && !e.classList.contains('top'))){
                    e.classList.remove('blue');
                    elements[i-1].classList.add('blue');
                }
                removed++;
            }
            else{
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('down')) || (up && !e.classList.contains('down'))){
                    e.classList.remove('blue');
                    elements[i+1].classList.add('blue');
                    i++;
                }
                removed++;
            }
        }
    }
    solution += `> 2/3 ${up ? 'up' : 'down'} `;
    magenta();
}

function onehalf(up = true){
    let elements = getelements();
    let removed = 0;
    for(let i=0; i < elements.length; i++){
        let e = elements[i];
        if(removed === 6) removed = 0;
        if(e.classList.contains('blue')) {
            if(up && removed<3 || !up && removed>2) {
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('top')) || (up && !e.classList.contains('top'))){
                    e.classList.remove('blue');
                    elements[i-1].classList.add('blue');
                }
                removed++;
            }
            else{
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('down')) || (up && !e.classList.contains('down'))){
                    e.classList.remove('blue');
                    elements[i+1].classList.add('blue');
                    i++;
                }
                removed++;
            }
        }
    }
    solution += `> 1/2 ${up ? 'up' : 'down'} `;
    magenta();

}

function onethird(up = true){
    let elements = getelements();
    let removed = 0;
    for(let i=0; i < elements.length; i++){
        let e = elements[i];
        if(removed === 4) removed = 0;
        if(e.classList.contains('blue')) {
            if(up && removed<2 || !up && removed>1) {
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('top')) || (up && !e.classList.contains('top'))){
                    e.classList.remove('blue');
                    elements[i-1].classList.add('blue');
                }
                removed++;
            }
            else{
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('down')) || (up && !e.classList.contains('down'))){
                    e.classList.remove('blue');
                    elements[i+1].classList.add('blue');
                    i++;
                }
                removed++;
            }
        }
    }
    solution += `> 1/3 ${up ? 'up' : 'down'} `;
    magenta();
}

function onesixt(up = true){
    let elements = getelements();
    let removed = 0;
    for(let i=0; i < elements.length; i++){
        let e = elements[i];
        if(removed === 2) removed = 0;
        if(e.classList.contains('blue')) {
            if(up && removed<1 || !up && removed>0) {
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('top')) || (up && !e.classList.contains('top'))){
                    e.classList.remove('blue');
                    elements[i-1].classList.add('blue');
                }
                removed++;
            }
            else{
                if(!e.classList.contains('limit') || (!up && !e.classList.contains('down')) || (up && !e.classList.contains('down'))){
                    e.classList.remove('blue');
                    elements[i+1].classList.add('blue');
                    i++;
                }
                removed++;
            }
        }
    }
    solution += `> 1/6 ${up ? 'up' : 'down'} `;
    magenta();
}
