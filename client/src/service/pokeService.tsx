
import Service from "./service";

class PokeService extends Service {

  constructor(){
    super(process.env.NEXT_POKE_SERVICE_HOST_URL)
  }

  registerUser = () => {

  }

}

export default PokeService;


