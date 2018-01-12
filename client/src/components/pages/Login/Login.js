import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="main-container center-align valign-wrapper">
            <div className="container">
                <br /><br /><br /><br /><br />
                <form className="form-login" action="/submit" method="post">
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <input className="btn" type="submit" placeholder="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;