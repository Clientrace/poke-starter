
import { ReactElement } from 'react';
import style from './textField.module.scss';

interface InputProps {
  header: string,
  name: string,
  value: string,
  maxLength: number,
  onChange: Function,
  placeholder: string,
}

const TextField = (props: InputProps): ReactElement => {
  return (
    <>
      <div className={style['header']}>
        { props.header }
      </div>
      <input
        onChange={(e)=>props.onChange(e)}
        maxLength={props.maxLength}
        name={props.name}
        className={style['input']}
        value={props.value}
        placeholder={props.placeholder}/>
    </>
  )
}

export default TextField;

