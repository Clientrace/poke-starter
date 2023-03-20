
import type { NextPage, NextPageContext } from "next";
import GeneralLayout from "../../../layouts/generalLayout";
import PokeData from "../../../components/pokedata/pokedata";
import style from './select.module.scss';


interface Props {
  username?:string
}

const Select: NextPage<Props> = (props) => {

  return (
    <GeneralLayout>
      <div className={style['container']}>
        <div className={style['intro']}>
          Hi {props.username}! Select your starter pokemon:
        </div>
        <div className={style['starters']}>
          <PokeData
            weight={9}
            height={8}
            type="fire"
            flavorText="The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly."
            number="#0004"
            name="Charmander"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>
        </div>
      </div>
    </GeneralLayout>
  )
}


interface SelectContext extends NextPageContext {
  query: {
    username: string
  }
}

Select.getInitialProps = async (ctx: SelectContext): Promise<Props> => {
  return {
    username: ctx.query.username,
  }
}

export default Select;


