import React from 'react'
import './button.scss'

const myButtons =({children , ...otherProps}) =>{

    return(
        <button className="custom-button" {...otherProps}>

            {children}

        </button>
    )


}


export default myButtons