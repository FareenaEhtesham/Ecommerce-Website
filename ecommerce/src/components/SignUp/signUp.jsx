import React,{useState} from 'react'
import './signUp.scss'
import FormInput from '../Form-Input/FormInput'
import MyButtons from '../Buttons/buttons'


const SignUp=() =>{

    const[ inputText ,setinputText] =useState({

        user_name : '',
        email : '',
        password : '',
        conf_password : ''

    });
   
    const submitting =(event) =>{

        event.preventDefault();

        alert("sucessfully")

    }

    const Changer =(event) =>{
    const { name, value } = event.target;

       setinputText((prevValue) => {
        return {
            ...prevValue,
            [name]: value
        };
    });


    }

        return(
            <div className="sign-up">

                <h2 className="title">I donot have an account</h2>
                <span>Sign UP with email and password</span>

                <form className="sign-up-form" onSubmit={submitting}>

                <FormInput 
                    type="text"
                    name="user_name" 
                    label="User Name:" 
                    value={inputText.user_name}
                    handleChange={Changer} required/>
                   
                    <FormInput 
                    type="email"
                    name="email" 
                    label="Email:"
                    value={inputText.email}  
                    handleChange={Changer} required/>

                   
                    <FormInput 
                    type="password"
                    name="password" 
                    label="Password:" 
                    value={inputText.password}
                    handleChange={Changer} required/>

                    <FormInput 
                    type="password"
                    name="conf_password" 
                    label="Confirm Password:" 
                    value={inputText.conf_password}
                    handleChange={Changer} required/>


                    <MyButtons> SIGN UP </MyButtons>

                </form>

            </div>
        )
    
}

export default SignUp