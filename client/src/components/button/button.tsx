
import type { ReactElement, FormEvent } from "react";
import LoadingSpinner from "../spinner/spinner";
import style from './button.module.scss';
import { motion } from 'framer-motion';

interface ButtonProps {
  title: string,
  onClick: Function,
  loading?: boolean,
  disabled?: boolean
}

const Button = (props: ButtonProps) : ReactElement => {
  return (
    <motion.button
      whileHover={!props.disabled?{
        scale: 1.05,
        opacity: 0.9
      }:{}}
      disabled={props.disabled}
      className={style['button']}
      onClick={():void=>props.onClick()}>
      { props.loading? <LoadingSpinner/> :  props.title }
    </motion.button>
  )
}

export default Button;

