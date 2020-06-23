import React,{useState} from 'react'
import './signIn.scss'
import FormInput from '../Form-Input/FormInput'
import MyButtons from '../Buttons/buttons'


//In order to style input elements of form we make another component 
const SignIn =() =>{

    const[ inputText ,setinputText] =useState({

        email : '',
        password : ''

    });
   
    const submitting =(event) =>{

        event.preventDefault();

        alert("sucessfully")

    }

    const Changer =(event) =>{

        const {name , value} = event.target

       setinputText((prevValue) => {
        return {
            ...prevValue,
            [name]: value
        };
    });


    }

        return(
            <div className="sign-in">

                <h2 className="title">I already have an account</h2>
                <span>Sign IN with email and password</span>

                <form onSubmit={submitting}>
                   
                    <FormInput 
                    type="email"
                    name="email" 
                    label="Email" 
                    value={inputText.email}
                    handleChange={Changer} required/>

                   
                    <FormInput 
                    type="password"
                    name="password" 
                    label="Password" 
                    value={inputText.password}
                    handleChange={Changer} required/>


                    <MyButtons> SIGN IN </MyButtons>

                </form>

            </div>
        )
    
}

export default SignIn