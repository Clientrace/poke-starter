
import { ReactElement } from 'react';
import style from './textField.module.scss';

interface InputProps {
  header: string,
  placeholder: string,
}

const TextField = (props: InputProps): ReactElement => {
  return (
    <>
      { props.header }
      <input className={style['input']} placeholder={props.placeholder}/>
    </>
  )
}

export default TextField;

