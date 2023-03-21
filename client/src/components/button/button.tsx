
import type { ReactElement, FormEvent } from "react";
import LoadingSpinner from "../spinner/spinner";
import style from './button.module.scss';
import { motion } from 'framer-motion';

interface ButtonProps {
  title: string,
  onClick: Function,
  loading?: boolean,
  type?: string,
  disabled?: boolean
}

const Button = (props: ButtonProps) : ReactElement => {
  const getStyle = () => {
    if(props.type === 'cancel'){
      return {'borderColor': '#ED4337', 'color': '#ED4337'}
    }
    return {'backgroundColor': '#205556'}
  }
  return (
    <motion.button
      whileHover={!props.disabled?{
        scale: 1.05,
        opacity: 0.9
      }:{}}
      style={getStyle()}
      disabled={props.disabled}
      className={style['button']}
      onClick={():void=>props.onClick()}>
      { props.loading? <LoadingSpinner/> :  props.title }
    </motion.button>
  )
}

export default Button;

