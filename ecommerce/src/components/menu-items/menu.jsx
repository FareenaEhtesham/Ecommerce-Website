import React from 'react'
import './menu.scss'
import {withRouter} from 'react-router-dom'

const Menu = (props) => (

  <div className={`${props.size} menu-item`} 
  
  onClick={() => {props.history.push(`${props.match.url}${props.link}`)}}>

    <div
      className='background-image'
      style={{
        backgroundImage: `url(${props.image})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{props.title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);



export default withRouter(Menu)

// props.match.url matches the exact url of page and props.link takes link from which page navigates