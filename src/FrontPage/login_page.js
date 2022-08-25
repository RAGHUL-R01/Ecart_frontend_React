import React, { useEffect, useState } from 'react';
import "../Css_files/login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login_page = () => {
    let navigate = useNavigate();
    const [User_name, Set_user_name] = useState("");
    const [Password, Set_Password] = useState("");
    const [Message, Set_message] = useState([{ Error_message: null }, { button_message: false }]);
    const [Password_visibility, Set_PV] = useState("Password");
    // to store the IP address in server for activty purpose.
    useEffect(() => {
        axios.get("https://moonkart-bk.herokuapp.com/details/store")
    }
        , []);
    /* 
    1. First If condition will check User Name or Password should not be empty
    2. second and third if condition will check the character length of user name and passowrd.
    3. If there is no error it will reach to else, there username and password will chwck in backend.
    4. If the password is not correct 
    
    */
    const formSubmit = (e) => {
        e.preventDefault();
        if (User_name === "" || Password === "") {
            Set_message({ Error_message: "User Name or Password should not be empty" });
            alert("User Name or Password should not be empty");
        }
        else if (User_name.length < 5 || User_name.length > 13) { alert("Username must have greater than 5 characters") }
        else if (Password.length < 5 || Password.length > 13) { alert("Password must have greater than 5 characters") }
        else {
            console.log("inside good")
            axios.get(`https://moonkart-bk.herokuapp.com/login/${User_name}/${Password}`)
                .then(res => {
                    if (res.data === "Logged in Successfully") {
                        navigate('/Frontpage');
                        // here the http header should contain token.
                    }

                }).catch(err => {
                    // if (err.response.status === 403) alert(`Username ${User_name} is not found. Please check again`)
                    // else if (err.response.status === 401) alert("Incorrect Password");
                    // else if (err.response.status === 503)alert("Woops! Server busy!");
                    // else console.log(err);

                    alert(err.response.data);
                })

        }
    }
    // https://moonkart-bk.herokuapp.com/login/${User_name}/${Password}
    const user_name_verify = (e) => {
        Set_user_name(e.target.value);

    }
    const Password_verify = (e) => {
        Set_Password(e.target.value);


    }
    function Password_func() {
        if (Password_visibility == "Password") Set_PV("text");
        else Set_PV("Password");

        // alert(Password_visibility)
    }

    return (
        <div className='cont_bg'>
            <div className='Login_container'>
                <div className='login_box'>

                    <div className='Login_text'>Login</div>
                    <div>
                        <form onSubmit={formSubmit} onKeyPress={(e) => e.key === "Enter" && formSubmit()}>
                            <div> <label className='Username' id="Username">Username</label></div>
                            <div><input className='input_box' type="text" id="Username" name="User_name" value={User_name} onChange={user_name_verify} /></div>
                            <div> <label className='Password' id="Password">Password</label></div>
                            <div><input className='input_box' type={Password_visibility} id="Password" name="Password" value={Password} onChange={Password_verify} /></div>
                            <div className='show_pass'><input className='show_pass_box' type="checkbox" onClick={Password_func} /> Show Password</div>
                            <div className='button_t'><button className='Button_style' type='submit'>Submit</button></div>

                        </form>
                        <div className='Close_btn'> <button className='Register_btn' onClick={() => navigate('/Register')}>New User? Create an account</button><div>or</div><button className='Register_btn' onClick={() => navigate('/Frontpage')}>Skip</button> </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Login_page;