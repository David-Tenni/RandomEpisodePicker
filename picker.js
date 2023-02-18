const output = document.getElementById("output");
const entStart = document.getElementById("ent-start-season");
const entEnd = document.getElementById("ent-end-season");
const entCheck = document.getElementById("ent-check");

const tosStart = document.getElementById("tos-start-season");
const tosEnd = document.getElementById("tos-end-season");
const tosCheck = document.getElementById("tos-check");

const tngStart = document.getElementById("tng-start-season");
const tngEnd = document.getElementById("tng-end-season");
const tngCheck = document.getElementById("tng-check");

const ds9Start = document.getElementById("ds9-start-season");
const ds9End = document.getElementById("ds9-end-season");
const ds9Check = document.getElementById("ds9-check");

let selectedEpisodes = [];

function getEntEpisodes() {
  entEpisodes.forEach((episode) => {
    if (episode.season >= entStart.value && episode.season <= entEnd.value) {
      selectedEpisodes.push(episode);
    }
  });
}

function getTosEpisodes() {
  tosEpisodes.forEach((episode) => {
    if (episode.season >= tosStart.value && episode.season <= tosEnd.value) {
      selectedEpisodes.push(episode);
    }
  });
}

function getTngEpisodes() {
  tngEpisodes.forEach((episode) => {
    if (episode.season >= tngStart.value && episode.season <= tngEnd.value) {
      selectedEpisodes.push(episode);
    }
  });
}

function getDs9Episodes() {
    ds9Episodes.forEach((episode) => {
      if (episode.season >= ds9Start.value && episode.season <= ds9End.value) {
        selectedEpisodes.push(episode);
      }
    });
  }

function displayValues(episode) {
  document.getElementById(
    "output"
  ).innerHTML = `You should try watching: ${episode.show} Season ${episode.season} Episode ${episode.episode} ${episode.name} `;
}

function main() {
  let includeEnt = entCheck.checked;
  let includeTos = tosCheck.checked;
  let includeTng = tngCheck.checked;
  console.log(includeEnt);
  if (includeEnt) {
    getEntEpisodes();
  }
  if (includeTos) {
    getTosEpisodes();
  }
  if (includeTng) {
    getTngEpisodes();
  }
  displayValues(
    selectedEpisodes[Math.floor(Math.random() * selectedEpisodes.length)]
  );
  selectedEpisodes = [];
}
const randomiseButton = document.getElementById("randomise");
randomiseButton.addEventListener("click", main);
