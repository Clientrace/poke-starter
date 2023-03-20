
import type { NextPage } from 'next'
import style from './home.module.scss';
import GeneralLayout from '../layouts/generalLayout'
import TextField from '../components/textField/textField';
import Button from '../components/button/button';
import { useState } from 'react';


const Home: NextPage = () => {
  const [username, setUsername] = useState("");

  // Login user & create db record
  const login = (): void => {
    console.log(username);
  }

  return (
    <GeneralLayout>
      <div className={style['container']}>
        <div className={style['welcome']}>
          <div className={style['header']}>
            Welcome to Poké Starter!
          </div>
          <div className={style['subheader']}>
            Begin your own Pokémon Adventure
          </div>
        </div>
        <div className={style['form']}>
          <div className={style['fields']}>
            <div className={style['username']}>
              <TextField
                name="username"
                value={username}
                onChange={(e: { target: HTMLInputElement}) : void=>{
                  setUsername(e.target.value);
                }}
                header="Enter a cool username to get started:"
                placeholder="Alakazam"/>
            </div>
            <div className={style['action']}>
              <Button title="Login" onClick={():void=>login()}/>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  )
}

export default Home
