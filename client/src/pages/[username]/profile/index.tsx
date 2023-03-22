import { NextPage, NextPageContext } from "next";
import { ReactElement, useEffect, useState } from "react";
import GeneralLayout from "../../../layouts/generalLayout";
import PokeService from "../../../service/pokeService";
import UserInfo from "../../../interfaces/userInfo";
import PokeInfo from "../../../interfaces/pokeinfo";
import style from './profile.module.scss';
import Button from "../../../components/button/button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";



interface PageProps {
  username:string
}


interface PokePreviewProps {
  starterNickname: string,
  pokemon: PokeInfo
}

const PokePreview = (props: PokePreviewProps): ReactElement => {
  const stat = (label:string, value:string): ReactElement => {
    return <div className={style['statVal']}>
      <div className={style['label']}>
        { label }
      </div>
      <div className={style['value']}>
        { value }
      </div>
    </div>
  }
  return <div className={style['poke-preview']}>
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.2}}
      className={style['sprite']}>
      <img src={props.pokemon.sprite}/>
    </motion.div>
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.4}}
      className={style['nickname']}>
      { props.starterNickname }
    </motion.div>
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.6}}
      className={style['description']}>
      { props.pokemon.flavorText }
    </motion.div>
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.8}}
      className={style['stats']}>
      { stat('SPECIE:', props.pokemon.name) }
      { stat('TYPE:', props.pokemon.type) }
      { stat('HEIGHT:', props.pokemon.height.toString()) }
      { stat('WEIGHT:', props.pokemon.weight.toString()) }
    </motion.div>
  </div>
}

const Profile:NextPage<PageProps> = (props) => {
  const service = new PokeService();
  const [starter, setStarter] = useState<PokeInfo|undefined>(undefined);
  const [user, setUser] = useState<UserInfo|undefined>(undefined);
  const router = useRouter();

  useEffect(()=>{
    if(props.username){
      getUser(props.username);
    }
  },[props.username]);

  useEffect(()=>{
    const pokemonId = user?.pokemonId || "";
    if(user){
      getPokemon(pokemonId);
    }
  },[user])

  const getUser = async (username:string) => {
    const resp = await service.getUser(username);
    setUser(resp.data);
  }

  const getPokemon = async (nameId:string) => {
    const resp = await service.getPokemon(nameId);
    setStarter(resp.data);
  }

  return (
    <GeneralLayout>
      <div className={style['container']}>
        <motion.div
          initial={{y: -15, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          className={style['profile-header']}>
          <div className={style['header']}>
            Trainer Profile
          </div>
          <div className={style['subheader']}>
            Good luck on your adventure into the world of pokemon, {props.username}!
          </div>
        </motion.div>
        <div className={style['content']}>
          {
            starter && 
              <PokePreview
                  pokemon={starter}
                  starterNickname={user?.pokemonNickname||""}/>
          }
        </div>
        <div className={style['actions']}>
          <motion.div
            initial={{y: -15, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 1}}
            className={style['logout']}>
            <Button title="Log Out" onClick={()=>router.push('/')}/>
          </motion.div>
        </div>
      </div>
    </GeneralLayout>
  )
}

interface SelectContext extends NextPageContext {
  query: {
    username: string
  }
}

Profile.getInitialProps = async (ctx: SelectContext): Promise<PageProps> => {
  return {
    username: ctx.query.username,
  }
}



export default Profile;


