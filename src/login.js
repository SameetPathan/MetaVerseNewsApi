import React from 'react';
import {auth , provider} from './firebase.js';
import LoginPage from './LoginInPage.js';
import RegisterPage from './RegisterPage.js';

const Login = () => {

	// Sign in with google
	const signin = () => {
		auth.signInWithPopup(provider).catch(alert);
	}
    
	return (
		<div>
		<LoginPage></LoginPage>
		<RegisterPage></RegisterPage>
			<center>
				<button style={{"marginTop" : "200px"}}
				onClick={signin}>Sign In with Google</button>
			</center>
		</div>
	);
}

export default Login;
