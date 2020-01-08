import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import StyledButton from "./Button";

const axios = axiosWithAuth();

const LoginForm = props => {
    let history = useHistory();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const submitForm = event => {
        event.preventDefault()
        axios.post('https://african-marketplace-1.herokuapp.com/api/login', {
            username: user.username,
            password: user.password
          }).then(function (response) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
            history.push("/item");
          }).catch(function (error) {
            console.log(error);
          });
    };

    return(
        <AuthContainer>
            <form onSubmit={submitForm}>
                <img className="logo" src={require('./logo.png')} />
                <fieldset>
                <legend>Login</legend>
                        <label htmlFor = "username">Username</label>
                        <input id="username"
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={handleChanges}
                        value={user.username}/>
                        <label htmlFor = "password">Password</label>
                        <input id="password"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChanges}
                        value={user.password}/>
                </fieldset>
                <StyledButton type="submit">Login</StyledButton>
                <Link className="form-button" to="/register">
                    <StyledButton renderas="button">
                        Need an account?
                    </StyledButton>
                </Link>
            </form>
        </AuthContainer>
    )
};

export default LoginForm;