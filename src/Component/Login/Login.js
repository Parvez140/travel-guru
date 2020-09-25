import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import facebook from '../../Image/Icon/fb.png';
import google from '../../Image/Icon/google.png';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confarmPassword: '',
        photo: '',
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation(); 
    let { from } = location.state || { from: { pathname: "/" } };
// google & fb singin mathod
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, photoURL, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            console.log(displayName, email, photoURL);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }
    const handleFbSingIn = () =>{
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('fb user', user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error);
            // ...
          });
    }
    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res => {
            const signOutUser ={
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '', 
                success: false
            }
            setUser(signOutUser);
        })
        .catch( err => {
            
        })
    }
    const handleBlur = (e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length >= 6;
            const passwordNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordNumber;
        } 
        if(isFieldValid){
            // [...cart, newItem]
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    // from submit
    const handleSubmit = (e) =>{
        console.log(user.name, user.email, user.password);
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
                console.log(res)    
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                console.log(error);
              });
            }

            if(!newUser && user.email && user.password){
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then( res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('Sing in user info', res.user);  
                })
                .catch(function(error) {
                    // Handle Errors here.
                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(error);
                  });
            }
            e.preventDefault();
        }
        const updateUserName = name =>{
            var user = firebase.auth().currentUser;

            user.updateProfile({
            displayName: name,
            }).then(function() {
                console.log('User name updated sucsessfully')
            // Update successful.
            }).catch(function(error) {
                console.log(error)
            // An error happened.
            });
        }


    return (
        <div>
            <Form onSubmit={handleSubmit} className="from">
                <Form.Label>Create an Account</Form.Label>
                    {newUser && <Form.Control type="name" name="name" onBlur={handleBlur} placeholder="First name" required/>}<br/>
                    {newUser && <Form.Control onBlur={handleBlur} type="name" name="lastName" placeholder="Last name" required/>}<br/>
                    <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" name="email" onBlur={handleBlur} placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" name="password" onBlur={handleBlur}placeholder="Password" required/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    {newUser && <Form.Control type="password" name="confarmPassword" placeholder="Confirm Password" required/>}<br/>
                    {!newUser && <div className="d-flex justify-content-between">
                    <Form.Check type="checkbox" label="Remember Me" />
                    <Button variant="link" >Forgot Password</Button></div>}  
                          {/*Sinhup & login button  */}
                    {
                        newUser ? <button onClick={handleSubmit} className="btn btn-warning button">Create an account</button> : <button onClick={handleSubmit} className="btn btn-warning button">Login</button>
                    }
            </Form.Group>
            <h6>Don't have an account ?</h6>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
                <label htmlFor="newUser">Create an account</label><br/><br/>
                {/* goole & fb signin button */}
            </Form>
            <div className="optonal-button">
                <h5>.....................or.....................</h5>
            <button onClick={handleFbSingIn} className="icon-button"><img src={facebook} className="icon" alt=""/> Continue with Facebook</button><br/><br/>
            <button onClick={handleGoogleSignIn} className="icon-button"><img src={google} className="icon" alt=""/>Continue with Google</button>
            </div>
            {/* Successfull & error massage */}
            <h6 style={{color: 'red',textAlign: 'center'}}>{user.error}</h6>
            { user.success && <h6 style={{color: 'green',textAlign: 'center'}}>Account { newUser ? 'created' : 'logged in' } successfully</h6> }
        </div>
    );
};

export default Login;