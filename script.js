console.log ("Second file");

var x;
x= 123;
let y = "text";
const z = 5; /* mainīgais, kuru nevarēs izmainīt*/

message();
function message(m) {
    console.log(x + y);
    console.log(x + z);
}   

let output = document.getElementById('output');
let button = document.createElement("button");
button.textContent="Texts ko likt pogā";
output.append(button);
console.log(output);