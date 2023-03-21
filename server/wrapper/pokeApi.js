

class PokeAPI{

  constructor(){
    this.hostURL = 'https://pokeapi.co/api/v2';
  }

  // Get Pokemon by name ID
  getPokemon = async (nameId) =>{
    const pokeInfo = await fetch(this.hostURL+`/pokemon/${nameId}`)
      .then((resp) => resp.json());

    const specieURL = pokeInfo.species.url;
    const specieInfo = await fetch(specieURL)
      .then((resp) => resp.json());
    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return {
      name: nameId,
      id: zeroPad(pokeInfo.id, 4),
      height: pokeInfo.height,
      weight: pokeInfo.weight,
      flavorText: specieInfo.flavor_text_entries[0].flavor_text
    }
  }

}

module.exports.PokeAPI = PokeAPI;

