
import type { ReactElement, ReactNode } from "react"
import TopNav from "../components/navs/topnav"
import GeneralHeaders from '../components/headers/general'

interface GeneralLayoutProps {
  children: ReactNode
}

const GeneralLayout = (props: GeneralLayoutProps) : ReactElement => {
  return (
    <>
      <TopNav/>
      <GeneralHeaders/>
      <div>
        { props.children }
      </div>
    </>
  )
}

export default GeneralLayout


