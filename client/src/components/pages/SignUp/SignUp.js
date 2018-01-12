import React from "react";
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="main-container center-align valign-wrapper">
        <div className="container">
            <br /><br /><br /><br /><br />
            <form action="/submit" method="post">
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <input type="text" name ="email" placeholder="email" />
                <input className="btn" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default SignUp;