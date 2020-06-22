import React from 'react';
import './App.css';
import {Route ,Switch ,Link} from 'react-router-dom'
import Homepage from './components/homepage/homepage'
import Shop from './components/shop/shop'
import Header from './components/Header/header_file'
import SignInUp from './components/page/SignIn-&-SignUp/signIn-signUp'


const App =() =>{
     
  return (
    <div >

     <Header/>
     
     <Switch>
  
        <Route exact={true}  path ='/'  component={Homepage}/>
        <Route exact={true}  path ='/shop/'  component={Shop}/>
        <Route exact={true}  path ='/sign-in/'  component={SignInUp}/>
        

    </Switch> 
    
    </div>
  );
}


export default App;
