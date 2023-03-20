
import type { ReactElement } from "react"
import style from './topnav.module.scss'

const TopNav = () : ReactElement => {
  return (
    <div className={style['container']}>
      <div className={style['brand']}>
        <img src="/pokeball.svg"/>
        Poke Starter
      </div>
    </div>
  )
}

export default TopNav



