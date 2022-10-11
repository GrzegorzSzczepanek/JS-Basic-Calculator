let isOff = true;

let onBtn = document.getElementById("on");
let offBtn = document.getElementById("off");
let screen = document.getElementById("screen");


onBtn.addEventListener("click", function(){
    turnOn();
});
offBtn.addEventListener("click", ()=>{
    turnOff();
});

if(!isOff){
    writeNumbers()
}

function turnOn(){
    screen.style.background = "#fff";
    isOff = false;
    screen.innerText = "";
}
function turnOff(){
    screen.style.background = "#111";
    isOff = true;
    screen.innerText = "";
}


function writeNumbers(num){
    let length = screen.innerText.split(/[^0-9.√%]/g).length;

    if(num == "0" && screen.innerText.charAt(screen.innerText.length - 1) == ""){
        screen.innerText += "0."
    }
    else if(screen.innerText.split(/[^0-9.√%]/g)[screen.innerText.split(/[^0-9.√%]/g).length - 1].includes(".")){
        screen.innerText += num;
    }else if(num == "0" && screen.innerText.split(/[^0-9.√%]/g)[length-1] == "0"){
        screen.innerText += ".0"
    }
    else{
        screen.innerText += num;
    }
}
function writeOperators(operator){    
    if(/[^0-9.]/g.test(screen.innerText
        .charAt(screen.innerText.length-1))
        || (screen.innerText == "" && operator != "√")){
            return;
    }else{
        screen.innerText += operator;
    }

}
function sqrt(){
    // console.log(screen.innerText.split(/[^0-9.]/g));
    let text = screen.innerText;
    let textArr = text.split(/[^0-9.√]/g);

    for(let i = 0; i < textArr.length; i++){
        if(textArr[i].includes("√")){
           
            if(textArr[i].split("√").join("").length < 2){
                //console.log(textArr[i].split("√"));
                newNumber = Math.sqrt(textArr[i].split("√").join(''));
                console.log(textArr[i].split("√").join(''));
                console.log(textArr[i]);
            }
            else if(textArr[i].split("√").length == 2){
                newNumber = textArr[i].split("√")[0] * Math.sqrt(textArr[i].split("√")[1])
                // console.log(textArr[i].split("√"));
            }
            
            screen.innerText = screen.innerText.replace(textArr[i], newNumber);

            //console.log(textArr[i], parseFloat(textArr[i].split("%")[0])/100 * parseFloat(textArr[i].split("%")[1]));
            
            console.log(newNumber);
            // console.log();
        }
    }
    
}
function percents(){
    let text = screen.innerText;
    let textArr = text.split(/[^0-9.√%]/g);
    let newNumber = 0;

    for(let i = 0; i < textArr.length; i++){
        if(textArr[i].includes("%")){
           
            newNumber = parseFloat(textArr[i].split("%")[0])/100 * parseFloat(textArr[i].split("%")[1]);

            screen.innerText = screen.innerText.replace(textArr[i], newNumber);

             //console.log(textArr[i]);
             //console.log(newNumber);
            // console.log();
        }
    }

}
function writeDot(){
    if(screen.innerText.split(/[^0-9.√%]/g)[screen.innerText.split(/[^0-9.√%]/g).length-1].includes(".")){
        return;
    }else if(screen.innerText == ""){
        screen.innerText += "0.";
    }else{
        screen.innerText += ".";
    }
    
}
document.getElementById("eq").addEventListener("click", function(){
    evaluate();
})
function evaluate(){
    percents();
    sqrt();
    if(screen.innerText.split(/[^0-9.√]/g).length < 2){
        return;
    }
    //console.log(eval(screen.innerText));
    screen.innerText = eval(screen.innerText);

}