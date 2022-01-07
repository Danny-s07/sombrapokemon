function tentativa() {
  var nome = document.getElementById("input_tentativa").value;
  tentarPokemon(nome.toUpperCase());
  document.getElementById("input_tentativa").value = "";
}

function tentarPokemon(nome) {
  if (nome === "CHARMANDER") {
    document.getElementById("pokemon2").classList.remove("sinueta");
  } else if (nome === "BULBASAUR") {
    document.getElementById("pokemon1").classList.remove("sinueta");
  } else if (nome === "SQUIRTLE") {
    document.getElementById("pokemon3").classList.remove("sinueta");
  } else if (nome === "PIKACHU") {
document.getElementById("pokemon4").classList.remove("sinueta");
  } 
   }