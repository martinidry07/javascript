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




addbutton(0);
function addbutton(i){
    let output = document.getElementById('output'); 
    let button = document.createElement("button");
    i=i+1;
    button.textContent="Button " + i;
    output.append(button);
    console.log(output);
    if(i<42){
        addbutton (i);
    }

}