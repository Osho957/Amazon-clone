import React,{useState} from 'react';
import './Login.css';
import { Link ,useHistory} from 'react-router-dom';
import { register } from './serviceWorker';
import { auth } from 'firebase';
function Login() {
    const history = useHistory();
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const login =(event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
              history.push("/");
        })
        .catch(e=>alert(e.message));
    };
    const register =(event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
         .then(auth=>{
            history.push("/");
        })
        .catch(e=>alert(e.message));
    };
    return (
        <div className ="login">
            <Link to ="/">
                <img
                className ="login_logo"
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt =""
                />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event =>setEmail(event.target.value)} type ="email"/>
                    <h5>Password</h5>
                    <input value ={password} onChange={event =>setPassword(event.target.value)} type ="password"/>
                    <button onClick={login} type = "submit" className="login_signin">Sign in</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login_register">Create New Account</button>
            </div>
        </div>
    )
}

export default Login
