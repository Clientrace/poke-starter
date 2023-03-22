
import Service from "./service";

class PokeService extends Service {

  constructor(){
    super(process.env.NEXT_PUBLIC_POKE_SERVICE_HOST_URL)
  }

  registerUser = async (username: string) => {
    const resp = await this.post('/user/register', {}, {
      'username': username
    });
    return resp;
  }

  getUser = async (username: string|undefined) => {
    const resp = await this.get(`/user/info/${username}`, {});
    return resp;
  }

  getStarterPokemons = async () => {
    const resp = await this.get(`/pokemon/starters`, {});
    return resp;
  }

  addPokemon = async (username: string, pokemonNameId: string,
    pokemonNickname: string) => {
    const resp = await this.post(`/user/info/${username}`, {}, {
      'pokemonId': pokemonNameId,
      'pokemonNickname': pokemonNickname
    });
    return resp;
  }

  getPokemon = async (nameId: string) => {
    const resp = await this.get(`/pokemon/info/${nameId}`, {});
    return resp;
  }

}

export default PokeService;




