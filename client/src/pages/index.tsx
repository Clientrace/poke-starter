
import type { NextPage } from 'next'
import style from './home.module.scss';
import GeneralLayout from '../layouts/generalLayout'
import TextField from '../components/textField/textField';
import Button from '../components/button/button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import PokeService from '../service/pokeService';


const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const router = useRouter();
  const service = new PokeService();
  const animationProps = {
    initial: {opacity: 0, scale: 1.1},
    animate: {opacity: 1, scale: 1},
  };

  // Login user & create db record
  const login = async (): Promise<void> => {
    setFormLoading(true);
    const resp = await service.registerUser(username);
    console.log(resp);
    setFormLoading(false);
    router.push(`/${username}/select`)
  }

  return (
    <GeneralLayout>
      <div className={style['container']}>
        <div className={style['welcome']}>
          <motion.img
            initial={{opacity: 0.6, scale: 0.8}}
            animate={{opacity: 1, scale: [1.3, 1]}}
            transition={{duration: 0.4}}
            src="/banner.png" className={style['banner']}/>
          <motion.div
            {...animationProps}
            transition={{delay: 0.2}}
            className={style['header']}>
            Welcome to Poké Starter!
          </motion.div>
          <motion.div
            {...animationProps}
            transition={{delay: 0.4}}
            className={style['subheader']}>
            Begin your own Pokémon Adventure
          </motion.div>
        </div>
        <motion.div
          {...animationProps}
          transition={{delay: 0.6}}
          className={style['form']}>
          <div className={style['fields']}>
            <div className={style['username']}>
              <TextField
                name="username"
                maxLength={255}
                value={username}
                onChange={(e: { target: HTMLInputElement}) : void=>{
                  setUsername(e.target.value);
                }}
                header="Enter a cool username to get started:"
                placeholder="Alakazam"/>
            </div>
            <div className={style['action']}>
              <Button
                loading={formLoading}
                disabled={username.length===0}
                title="Login" onClick={():void=>login()}/>
            </div>
          </div>
        </motion.div>
      </div>
    </GeneralLayout>
  )
}

export default Home
