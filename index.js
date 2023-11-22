//selction: affichage
const screen = document.querySelector("#screen");

const clear = document.querySelector(".clear");

const equal = document.querySelector(".egal")

const delet = document.querySelector(".delete");

// operateur:

const operations = document.querySelectorAll(".sign")

// Nombre
const numbers = document.querySelectorAll(".numbers")

let fisrtValue ="";

let sign = "";


for(let operation of operations){
    operation.addEventListener("click", function(){
        fisrtValue = screen.innerText;
        // console.log("firstValue ==>",fisrtValue)
        screen.innerText = "";
        sign = operation.innerText;
        // console.log("sign ==>",sign)
        screen.innerText = "";
        // console.log(operation.innerText);
    })
} 
    
for (let number of numbers) {
    number.addEventListener("click", function(){
       
        screen.append(number.innerText); 
        // console.log(number.innerText);
    })
    
}

clear.addEventListener('click', function(){
    screen.innerText = "";
})

delet.addEventListener('click', function(){
    screen.innerText = screen.innerText.slice(0,-1);
})


function calculate(x,op,y){
    if(op === "+"){
        return Number(x) + Number(y);
    }else if (op === "−"){
        return x - y;
    }else if (op === "×"){
        return x * y;
    }else if(op === "÷"){
        return x / y;
    }
    
}

equal.addEventListener("click", function(){
        let secondValue ="";
        secondValue = screen.innerText;
        // console.log("secondeVlaue===>",secondValue)
        screen.innerText =""
        let result = calculate(fisrtValue,sign,secondValue);
        // screen.innerText = result;
        // console.log(result);
        screen.append(result)
    
})  
