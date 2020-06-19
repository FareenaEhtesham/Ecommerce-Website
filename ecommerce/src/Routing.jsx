import React from 'react';
import './App.css';
import {Route ,Switch ,Link} from 'react-router-dom'
import Homepage from './components/homepage/homepage'


const HatsPage = (props) =>{

    console.log(props)
    return(
    <div>
      <Link to='/'> <h1>HATS PAGE {props.match.params.id}</h1></Link>
      <h1 onClick={ () => {props.history.push('/')}}>HATS PAGE</h1> 
    </div>
    )
  
  };

  

const Routing =() =>{

    return(
        <div>
        <Switch>

        <Route exact={true}  path ='/'  component={Homepage}/>
        <Route exact={true}  path ='/hats-page/'  component={HatsPage}/>
        <Route exact={true}  path ='/hats-page/:id'  component={HatsPage}/>

        </Switch> 
      </div>
    )

    {/* if you remove exact then switch render only that route that first matches */}

}

export default Routing