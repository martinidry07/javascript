/*console.log ("Second file");

var x;
x= 123;
let y = "text";
const z = 5; /* mainīgais, kuru nevarēs izmainīt

message();
function message(m) {
    console.log(x + y);
    console.log(x + z);
}   
*/


let output = document.getElementById('output');
let i=0;
let j=41;

addbutton(i);
function addbutton(i){
     
    let button = document.createElement("button");
    let y;
    i=i+1;
    button.textContent=i;
    if(i%3==0){
        button.style.background="green";
        button.addEventListener("click", function (){
            y=Number(button.textContent);
            button.textContent = y+1;
        });
    }
    
    output.append(button);
    console.log(output);
    if(i<42){
        addbutton(i);
    }
    /*alert("Button" + i + " was presed!");*/
}




let add_button=document.getElementById("add");
add_button.addEventListener("click", function (){
   j++;
   addbutton(j);
});