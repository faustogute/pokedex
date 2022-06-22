const searchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("search-box");
const nameScreen = document.getElementById("name-screen");
const imageScreen = document.getElementById("main-screen");
const heightTag = document.getElementById("height-tag");
const weightTag = document.getElementById("weight-tag");
const typeScreen = document.getElementById("type-screen");
const idScreen = document.getElementById("id-screen");

const URI = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonData = async (pokemon) => {
  try {
    const result = await fetch(URI + pokemon + "/");
    const data = await result.json();
    let id = ("00" + data.id).slice(-3);
    imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
    nameScreen.innerHTML = data.name;
    heightTag.innerHTML = `Height: ${data.height * 10}cm`;
    weightTag.innerHTML = `Weight: ${data.weight / 10}kg`;
    idScreen.innerHTML = `#${data.id}`;
    typeScreen.innerHTML = data.types[0].type.name;
    inputField.value = "";
  } catch (error) {
    nameScreen.innerHTML = "Pokemon not found";
    inputField.value = "";
    heightTag.innerHTML = "";
    weightTag.innerHTML = "";
    idScreen.innerHTML = "";
    typeScreen.innerHTML = "";
    imageScreen.style.backgroundImage = "";
  }
};

inputField.addEventListener(
  "keydown",
  (event) => event.key === "Enter" && searchBtn.click()
);
searchBtn.addEventListener("click", () => getPokemonData(inputField.value));
