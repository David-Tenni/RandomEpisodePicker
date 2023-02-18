console.log('2')
var x = document.getElementById('submit');
console.log(x)
let entStart = document.getElementById('ent-start-season');
let entEnd = document.getElementById('ent-end-season');




function displayValues() {
    document.getElementById("output").innerHTML = "Hello World" + entStart.value + entEnd.value;

}

const randomiseButton = document.getElementById("randomise");
randomiseButton.addEventListener("click", displayValues);
