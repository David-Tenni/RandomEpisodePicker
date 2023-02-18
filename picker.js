
const output = document.getElementById('output');
const entStart = document.getElementById('ent-start-season');
const entEnd = document.getElementById('ent-end-season');
const entCheck = document.getElementById('ent-check');

const tosStart = document.getElementById('tos-start-season');
const tosEnd = document.getElementById('tos-end-season');
const tosCheck = document.getElementById('tos-check');

let selectedEpisodes=[];


function getEntEpisodes(){
    entEpisodes.forEach(episode => {
    if (episode.season >= entStart.value && episode.season <= entEnd.value){
        selectedEpisodes.push(episode);
    }
    });
    console.log(selectedEpisodes);

}

function getTosEpisodes(){
    tosEpisodes.forEach(episode => {
    if (episode.season >= tosStart.value && episode.season <= tosEnd.value){
        selectedEpisodes.push(episode);
    }
    });
    console.log(selectedEpisodes);

}

function displayValues(episode) {
    document.getElementById("output").innerHTML = `You should try watching: ${episode.show} Season ${episode.season} Episode ${episode.episode} ${episode.name} ` ;

}

function main(){
    let includeEnt = entCheck.checked;
    let includeTos = tosCheck.checked;
    console.log(includeEnt);
    if (includeEnt){
        getEntEpisodes();
    };
    if (includeTos){
        getTosEpisodes();
    };

    displayValues(selectedEpisodes[Math.floor(Math.random()*selectedEpisodes.length)])
    selectedEpisodes=[];

}
const randomiseButton = document.getElementById("randomise");
randomiseButton.addEventListener("click", main);
