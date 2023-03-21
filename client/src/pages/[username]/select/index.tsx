
import type { NextPage, NextPageContext } from "next";
import GeneralLayout from "../../../layouts/generalLayout";
import PokeData from "../../../components/pokedata/pokedata";
import style from './select.module.scss';
import { ReactElement, useEffect, useState } from "react";
import PokeService from "../../../service/pokeService";
import Button from "../../../components/button/button";
import TextField from "../../../components/textField/textField";
import { motion } from "framer-motion";


interface PageProps {
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

interface ConfirmationProps {
  pokemon: PokeStarter,
  cancelCallback: Function,
}

const Confirmation = (props: ConfirmationProps) : ReactElement => {
  return <div className={style['confirmation']}>
    <div className={style['content']}>
      <div className={style['header']}>
        Confirm your selection
      </div>
      <div className={style['subheader']}>
        Are you sure you want to select <i>{props.pokemon.name}</i> as your starter?
      </div>
      <div className={style['pokesprite']}>
        <motion.img
            animate={{scale: [1,1.2,1]}}
            transition={{duration: 4, repeat: Infinity}}
            src={props.pokemon.sprite}/>
      </div>
      <div className={style['form']}>
        <div className={style['inputs']}>
          <TextField name="pokemonNickname"
              header="Enter Nickname"
              value={props.pokemon.name}
              maxLength={25}
              placeholder={props.pokemon.name}
              onChange={()=>{}}/>
          <div className={style['confirm']}>
            <Button title="Confirm" onClick={()=>{}}/>
          </div>
          <div className={style['cancel']}>
            <Button title="Cancel" type="cancel" onClick={()=>props.cancelCallback()}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Select: NextPage<PageProps> = (props) => {

  const [starterSelection, setStarterSelection] = useState([]);
  const [starterPick, setStarterPick] = useState<PokeStarter|undefined>(undefined);
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
        starterSelection.map((data:PokeStarter, idx: number)=>{
          return <motion.a
                    onClick={()=>setStarterPick(data)}
                    initial={{opacity: 0}}
                    animate={{scale: [0.8,1.2,1], opacity: 1}}
                    transition={{duration: 0.3, delay: idx/3}}>
                    <PokeData
                      name={data.name}
                      type={data.type}
                      imageSrc={data.sprite}
                      number={'#'+data.id}
                      flavorText={data.flavorText}
                      weight={data.weight}
                      height={data.height}/></motion.a>
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
        { starterPick && 
            <Confirmation
                pokemon={starterPick} cancelCallback={()=>setStarterPick(undefined)}/> }
      </div>
    </GeneralLayout>
  )
}


interface SelectContext extends NextPageContext {
  query: {
    username: string
  }
}

Select.getInitialProps = async (ctx: SelectContext): Promise<PageProps> => {
  return {
    username: ctx.query.username,
  }
}

export default Select;


