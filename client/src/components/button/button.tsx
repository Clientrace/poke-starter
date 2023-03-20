
import type { ReactElement, FormEvent } from "react";
import LoadingSpinner from "../spinner/spinner";
import style from './button.module.scss';

interface ButtonProps {
  title: string,
  onClick: Function,
  loading?: boolean,
  disabled?: boolean
}

const Button = (props: ButtonProps) : ReactElement => {
  return (
    <button
      disabled={props.disabled}
      className={style['button']}
      onClick={():void=>props.onClick()}>
      { props.loading? <LoadingSpinner/> :  props.title }
    </button>
  )
}

export default Button;

