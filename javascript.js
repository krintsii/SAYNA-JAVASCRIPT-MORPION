
// Récupération des cases à clicker
const items = document.getElementsByClassName('grid-item');
const tableau = Array.from(items);
console.log(tableau);
console.log(items);
let ArrayX = [];
let ArrayO = [];
const valeur = [
    //row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //column
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
];
// fonction qui determiner le gangant 
function Answer () {
    for (let i = 0; i < valeur.length; i++) {
        if (ArrayX.includes(valeur[i][0]) && ArrayX.includes(valeur[i][1]) && ArrayX.includes(valeur[i][2]) ){
            document.querySelector("main").innerHTML = `<div id="reset-box">
                                             <h1>woaaaouuhhh mandresy x....!</h1>
                                             <button id="reste" type="reset">reset</button>
                                        </div>`
                                        const reset = document.getElementById ("reste");
                                        reset.addEventListener("click", retour);
            caseScore();
            break
            

           
        } else if (ArrayO.includes(valeur[i][0]) && ArrayO.includes(valeur[i][1]) && ArrayO.includes(valeur[i][2])  ) {
            document.querySelector("main").innerHTML = `<div id="reset-box">
                                             <h1>woaaaouuhhh mandresy o....!</h1>
                                             <button id="reste" type="reset">reset</button>
                                        </div>`
                                        const reset = document.getElementById ("reste");
                                        reset.addEventListener("click", retour);
            caseScoreII();
            break;

        }
        
    }
    
}

function iza() {
    let qui = false
    if (ArrayX.includes(valeur[i][0]) && ArrayX.includes(valeur[i][1]) && ArrayX.includes(valeur[i][2])){
        qui = true;
    }
    return qui
}


let scoreI = 0;
function caseScore() {
    scoreI++
    const origine = document.getElementById("you-score");
    origine.textContent = scoreI
               
};
let scoreII = 0
function caseScoreII() {
    scoreII++;
    const origineII = document.getElementById('cpu-score');
    origineII.textContent = scoreII
}

// Vide le contenu de toute les cases
 function retour() {
     document.getElementById("reset-box").remove()
    for (var i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
        tableau[i].textContent = ''
    };
    ArrayO = [];
    ArrayX = []
}
function alerte(){
    alert ('ehhh ...')
};


function addOne() {
   if (tableau[0].textContent !== ''){
       alerte();
   } else {
    tableau[0].textContent = 'x';
    ArrayX.push(0);
    if (tableau[1].textContent == "x" ){
        tableau[2].textContent = "o";
        ArrayO.push(2);
    } else if (tableau[3].textContent == "x" ){
        tableau[6].textContent = "o";
        ArrayO.push(6);
    } else if (tableau[4].textContent == "x" ){
        tableau[8].textContent = "o";
        ArrayO.push(8);
    }else if (tableau[3].textContent == ''){
        tableau[3].textContent = "o";
        ArrayO.push(3);
    } else if (tableau[4].textContent == ""){
        tableau[4].textContent = 'o';
        ArrayO.push(4);
    } else if (tableau[8].textContent == ''){
        tableau[8].textContent = 'o';
        ArrayO.push(8);
    } else{
        for (let i = 0; i < tableau.length; i++) {
            const element = tableau[i];
            if (element.textContent == ""){
                element.textContent = "o"
                ArrayO.push(i);
                break;
            }
            
        }
    }
    

   };
   Answer()

};

function addTwo() {
    if (tableau[1].textContent !== ""){
        alerte();
    }  else {
        tableau[1].textContent = "x"
        ArrayX.push(1);
        if (tableau[4].textContent == "x"){
            tableau[7].textContent = "o";
            ArrayO.push(7);
        
        }else if (tableau[2].textContent == ''){
            tableau[2].textContent = "o";
            ArrayO.push(2);
        } else if (tableau[7].textContent == ""){
            tableau[7].textContent = 'o';
            ArrayO.push(7);
        }
         else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    };
    Answer()

};

function addThree() {
    if (tableau[2].textContent !== ''){
        alerte();
    } else {
        tableau[2].textContent = "x";
        ArrayX.push(2);
        if (tableau[1].textContent == "x"){
            tableau[0].textContent = "o";
            ArrayO.push(0);
        
        } else if (tableau[4].textContent == 'x'){
            tableau[6].textContent = "o";
            ArrayO.push(6);
        
        } else if (tableau[5].textContent == "x"){
            tableau[8].textContent = 'o';
            ArrayO.push(8);
        } else if (tableau[0].textContent == ''){
            tableau[0].textContent = 'o';
            ArrayO.push(0);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    };
    Answer()
};

function addFour() {
    if (tableau[3].textContent !== ""){
        alerte();
    } else {
        tableau[3].textContent = 'x';
        ArrayX.push(3);
        if (tableau[4].textContent == ""){
            tableau[4].textContent = "o";
            ArrayO.push(4);
        }else if (tableau[5].textContent == ''){
            tableau[5].textContent = "o";
            ArrayO.push(5);
        } else if (tableau[6].textContent == ""){
            tableau[6].textContent = 'o';
            ArrayO.push(6);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    }
    Answer()
};

function addFive() {
    if(tableau[4].textContent !== ''){
        alerte();
    } else {
        tableau[4].textContent = 'x';
        ArrayX.push(4);
        if (tableau[1].textContent == ""){
            tableau[1].textContent = "o";
            ArrayO.push(1);
        }else if (tableau[3].textContent == ''){
            tableau[3].textContent = "o";
            ArrayO.push(3);
        } else if (tableau[5].textContent == ""){
            tableau[5].textContent = 'o';
            ArrayO.push(5);
        } else if (tableau[7].textContent == ''){
            tableau[7].textContent = 'o';
            ArrayO.push(7);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    }
    Answer()
};

function addSix() {
    if (tableau[5].textContent !== ''){
        alerte();
    } else {
        tableau[5].textContent = "x";
        ArrayX.push(5);
        if (tableau[2].textContent == ""){
            tableau[2].textContent = "o";
            ArrayO.push(2);
        }else if (tableau[3].textContent == ''){
            tableau[3].textContent = "o";
            ArrayO.push(3);
        } else if (tableau[4].textContent == ""){
            tableau[4].textContent = 'o';
            ArrayO.push(4);
        } else if (tableau[8].textContent == ''){
            tableau[8].textContent = 'o';
            ArrayO.push(8);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    }
    Answer()
};

function addSeven() {
    if (tableau[6].textContent !== ''){
        alerte();
    } else {
        tableau[6].textContent = "x";
        ArrayX.push(6);
        if (tableau[0].textContent == ""){
            tableau[0].textContent = "o";
            ArrayO.push(0);
        }else if (tableau[2].textContent == ''){
            tableau[2].textContent = "o";
            ArrayO.push(2);
        } else if (tableau[3].textContent == ""){
            tableau[3].textContent = 'o';
            ArrayO.push(3);
        } else if (tableau[4].textContent == ''){
            tableau[4].textContent = 'o';
            ArrayO.push(4);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    }
    Answer()
};

function addHeight() {
    if (tableau[7].textContent !== ""){
        alerte();
    }else {
        tableau[7].textContent = "x";
        ArrayX.push(7);
        if (tableau[1].textContent == ""){
            tableau[1].textContent = "o";
            ArrayO.push(1);
        }else if (tableau[3].textContent == ''){
            tableau[3].textContent = "o";
            ArrayO.push(3);
        } else if (tableau[6].textContent == ""){
            tableau[6].textContent = 'o';
            ArrayO.push(6);
        } else if (tableau[8].textContent == ''){
            tableau[8].textContent = 'o';
            ArrayO.push(8);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    }
    Answer()
};

function addNine() {
    if (tableau[8].textContent !== ''){
        alerte();
    } else {
        tableau[8].textContent = "x";
        ArrayX.push(8);
        if (tableau[0].textContent == ""){
            tableau[0].textContent = "o";
            ArrayO.push(0);
        }else if (tableau[2].textContent == ''){
            tableau[2].textContent = "o";
            ArrayO.push(2);
        } else if (tableau[5].textContent == ""){
            tableau[5].textContent = 'o';
            ArrayO.push(5);
        } else if (tableau[4].textContent == ''){
            tableau[4].textContent = 'o';
            ArrayO.push(4);
        } else{
            for (let i = 0; i < tableau.length; i++) {
                const element = tableau[i];
                if (element.textContent == ""){
                    element.textContent = "o"
                    ArrayO.push(i);
                    break;
                }
                
            }
        }
    }
    Answer()
};

tableau[0].addEventListener("click",addOne)
tableau[1].addEventListener("click",addTwo)
tableau[2].addEventListener("click",addThree)
tableau[3].addEventListener("click",addFour)
tableau[4].addEventListener("click",addFive)
tableau[5].addEventListener("click",addSix)
tableau[6].addEventListener("click",addSeven)
tableau[7].addEventListener("click",addHeight)
tableau[8].addEventListener("click",addNine)
console.log(ArrayO);