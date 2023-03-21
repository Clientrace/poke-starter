
import type { NextPage, NextPageContext } from "next";
import GeneralLayout from "../../../layouts/generalLayout";
import PokeData from "../../../components/pokedata/pokedata";
import style from './select.module.scss';
import { ReactElement, useEffect, useState } from "react";
import PokeService from "../../../service/pokeService";

const Confirmation = () : ReactElement => {
  return <div>

  </div>
}


interface Props {
  username?:string
}

interface PokeStarter {
  id: string,
  type: string,
  sprite: string,
  name: string,
  weight: number,
  height: number,
  flavorText: string
}

const Select: NextPage<Props> = (props) => {

  const [starterSelection, setStarterSelection] = useState([]);
  const service = new PokeService();
  
  useEffect(()=>{
    // getUser();

    getStarterPokemons();
  }, []);

  const getUser = async () => {
    const user = await service.getUser(props.username);
    console.log(user);
  }

  const getStarterPokemons = async () => {
    const resp = await service.getStarterPokemons();
    setStarterSelection(resp.data.starters);
  }


  const renderPokeStarers = () => {
    return <>
      {
        starterSelection.map((data:PokeStarter)=>{
          return <PokeData
                    name={data.name}
                    type={data.type}
                    imageSrc={data.sprite}
                    number={'#'+data.id}
                    flavorText={data.flavorText}
                    weight={data.weight}
                    height={data.height}/>
        })
      }
    </>
    
  }

  return (
    <GeneralLayout>
      <div className={style['container']}>
        <div className={style['intro']}>
          <div className={style['header']}>
            Hi {props.username}! Select your starter pokemon:
          </div>
          <div className={style['subheader']}>
            You can only choose your starter once so choose wisely.
          </div>
        </div>
        <div className={style['starters']}>
          { renderPokeStarers() }
        </div>
      </div>
      <div>

      </div>
    </GeneralLayout>
  )
}


interface SelectContext extends NextPageContext {
  query: {
    username: string
  }
}

Select.getInitialProps = async (ctx: SelectContext): Promise<Props> => {
  return {
    username: ctx.query.username,
  }
}

export default Select;


