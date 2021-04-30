import React from "react"

import { ImgZika, DivPrincipal } from './style'

const CardPequeno = (props) => {

    const { icone, desciption, string } = props
    // console.log(icone)
    return (
        <DivPrincipal>
            <ImgZika src={icone} />
            {desciption}
            {string}
        </DivPrincipal>
    )
}

export default CardPequeno