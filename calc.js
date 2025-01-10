let numberInput = "";
let result = 0;
let lastInput = "";  // To track the last input

function inputAnswer(answer) {
    
    numberInput+=answer;
    document.getElementById("header").textContent = numberInput
    n  = String(numberInput).length;
    if( n > 8 ){
        document.getElementById("header").style.fontSize = "40px";
    
    }

}
function initialize() {
    numberInput = "";
    document.getElementById("header").textContent = "";
    lastInput = "";  
    document.getElementById("header").style.fontSize = "";
}

function equals(total){

    if (total === '=') {
        
       try {
        result = math.evaluate(numberInput);
        let r1 = String(result).length;
        if(r1 > 8){
        document.getElementById("header").style.fontSize = "40px";
        }else{
            document.getElementById("header").style.fontSize = "";
        }
        document.getElementById("header").textContent = result;  
        lastInput = "";  
        numberInput = result.toString(); 
    }catch(error){
            alert("Kupal kaba boss?")
            initialize();
        }

    }

}
function erase(){
    let newN = numberInput.slice(0,-1);
    numberInput = newN;
    document.getElementById("header").textContent = numberInput;
}

