import React, { useState } from 'react';
import "../Css_files/login.css";
const Login_page = () => {
    // var Password_visibility = "Password";
    const [User_name, Set_user_name] = useState("");
    const [Password, Set_Password] = useState("");
    const [Message, Set_message] = useState([{ Error_message: null }, { button_message: false }]);
    const [Password_visibility, Set_PV] = useState("Password");
    const formSubmit = (e) => {
        e.preventDefault();
        if (User_name === "" || Password === "") {
            Set_message({ Error_message: "User Name or Password should not be empty" });
            alert(Message.Error_message);
        }
        else if (User_name.length < 5 || User_name.length > 13) { alert("Username must have greater than 5 characters") }
        else if (Password.length < 5 || Password.length > 13) { alert("Password must have greater than 5 characters") }
        else if (Message.button_message == true) {
            alert("no");
        }
        else {
            alert(Message.Error_message);
            Set_message("Some error accured")
        }
    }
    const user_name_verify = (e) => {
        let user_name_ = e.target.value;
        Set_user_name(e.target.value);
        if (user_name_.match(/[A-Za-z0-9]*[^\s]{5,12}/s)) {
            Set_message({ button_message: true });
        }
        else {
            Set_message({ Error_message: "Please check your User Name", button_message: true });
        }

    }
    const Password_verify = (e) => {
        let Password_ = e.target.value;
        Set_Password(e.target.value);
        if (Password_.match(/[A-Za-z0-9]*[^\s]{5,12}/s)) {
            Set_message({ button_message: true });
        }
        else {
            Set_message({ Error_message: "Please check your Password", button_message: true });
        }

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
                        <form onSubmit={formSubmit}>
                            <div> <label className='Username' id="Username">Username</label></div>
                            <div><input className='input_box' type="text" id="Username" name="User_name" value={User_name} onChange={user_name_verify} /></div>
                            <div> <label className='Password' id="Password">Password</label></div>
                            <div><input className='input_box' type={Password_visibility} id="Password" name="Password" value={Password} onChange={Password_verify} /></div>
                            <div className='show_pass'><input className='show_pass_box' type="checkbox" onClick={Password_func} /> Show Password</div>
                            <div className='button_t'><button className='Button_style' type='submit'>Submit</button></div>

                        </form>
                     <div className='Close_btn'> <button className='Register_btn'>New User? Create an account</button><div>or</div><button className='Register_btn'>Skip</button> </div> 
                      </div>
                </div>
            </div>
        </div>)
}

export default Login_page;