import React from 'react';
import './App.css';
import {Route ,Switch ,Link} from 'react-router-dom'
import Homepage from './components/homepage/homepage'

const HatsPage =(props) =>{

  console.log(props)
  
  return(
    <div>     
      <h1>Hats page Created</h1>
    </div>
    
  )
}
const App =() =>{
     
  return (
    <div >
     
     <Switch>

        <Route exact={true}  path ='/'  component={Homepage}/>
        <Route exact={true}  path ='/hats-page/'  component={HatsPage}/>

    </Switch> 
    
    </div>
  );
}


export default App;
