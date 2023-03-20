
import type { ReactElement, ReactNode } from "react"
import TopNav from "../components/navs/topnav"
import GeneralHeaders from '../components/headers/general'
import style from "./generalLayout.module.scss"

interface GeneralLayoutProps {
  children: ReactNode
}

const GeneralLayout = (props: GeneralLayoutProps) : ReactElement => {
  return (
    <>
      <TopNav/>
      <GeneralHeaders/>
      <div className={style['container']}>
        { props.children }
      </div>
    </>
  )
}

export default GeneralLayout


