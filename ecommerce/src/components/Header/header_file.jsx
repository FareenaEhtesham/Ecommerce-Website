import React from 'react'
import './header_file.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as LogoWeb} from '../../assets/crown.svg'


const Header =() =>{

    return(
        <div className="header"> 

        <Link to='/' className="logo-container">

            <LogoWeb className="logo"/>
        </Link>

        <div className="options">
        <Link className="option" to='/shop' >

        SHOP

        </Link>

        <Link className="option" to='/sign-in/'>

        SIGN IN 
        
        </Link>

        
        <Link className="option" to='/contact'>

        CONTACT
        
        </Link>

       
        </div>  
        </div>
    )

}

export default Header