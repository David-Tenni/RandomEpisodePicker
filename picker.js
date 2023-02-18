console.log('2')
var x = document.getElementById('submit');
console.log(x)
const entStart = document.getElementById('ent-start-season');
const entEnd = document.getElementById('ent-end-season');
const entCheck = document.getElementById('ent-check');
let selectedEpisodes=[];


function getEntEpisode(){
    starTrekEnterprise.forEach(episode => {
    if (episode.season >= entStart.value && episode.season <= entEnd.value){
        selectedEpisodes.push(episode);
    }
    });
    console.log(selectedEpisodes);

}

function displayValues() {
    document.getElementById("output").innerHTML = "Hello World" + entStart.value + entEnd.value + starTrekEnterprise[0].name;

}

function main(){
    let includeEnt = entCheck.checked;
    console.log(includeEnt);
    if (includeEnt){
        getEntEpisode();
    };



}
const randomiseButton = document.getElementById("randomise");
randomiseButton.addEventListener("click", main);
