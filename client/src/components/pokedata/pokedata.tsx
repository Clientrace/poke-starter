
import { ReactElement, ReactNode, useState } from "react";
import style from './pokedata.module.scss';
import { motion } from 'framer-motion';


interface TypeBadgeProps {
  type: string,
}

const TypeBadge = (props: TypeBadgeProps) : ReactElement => {
  const getTypeColor = (type: string): string => {
    switch(type){
      case "fire":
        return "#B22222";
      case "water":
        return "#0F5E9C";
      case "grass":
        return "#567D46";
      // add more types here
    }
    return "#666";
  }
  return <div className={style['type-badge']} style={{
    backgroundColor: getTypeColor(props.type)
  }}>
    <b>{props.type}</b>
  </div>
}

interface PokedataProps {
  imageSrc: string,
  name: string,
  type: string,
  flavorText: string,
  number: string,
  height: number,
  weight: number,
}

const PokeData = (props: PokedataProps) : ReactElement => {
  const [selected, setSelected] = useState(false);
  return <motion.div
    initial={{opacity: 0.8}}
    whileHover={{scale: 1.1, opacity: 1}}
    onHoverStart={()=>setSelected(true)}
    onHoverEnd={()=>setSelected(false)}
    className={style['container']}>
    <div className={style['poke-sprite']}>
      <img src={props.imageSrc}/>
    </div>
    <div className={style['info']}>
      <b>{props.name}</b> <a className={style['poke-num']}>{props.number}</a>
      <TypeBadge type={props.type}/>
      <div className={style['flavor-text']}>
        <i>{ props.flavorText }</i>
      </div>
      <div className={style['basic-data']}>
        <a className={style['label']}>
          Height: 
        </a>
        {props.height} <br/>
        <a className={style['label']}>
          Weight
        </a>
        {props.weight}
      </div>
    </div>
    {selected && <div className={style['cursor']}>
      <motion.img
        initial={{opacity: 0, scale: 0.2}}
        animate={{opacity: 1, scale: 1}}
        src="/pokeball.svg"/> 
      <div className={style['cursor-text']}>
        Click to choose
      </div>
    </div>}
  </motion.div>
}

export default PokeData;


