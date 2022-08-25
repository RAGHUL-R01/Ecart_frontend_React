import React, { useState } from "react";
import "../Css_files/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const RegistrationPage = () => {
    let navigate = useNavigate();
    const [State_, Set_state_] = useState([{ User_name: "", Password: "", Contact: "", name: "" }]);
    const [Message, Set_message] = useState([{ Error_message: null }, { button_message: false }]);
    const [Password_visibility, Set_PV] = useState("Password");
    function regex(text) {
        if ((text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) || text.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) return false;
        else return true;
    }
    const formSubmit = (event) => {
        event.preventDefault();
        // console.log(State_.User_name)
        // console.log(State_.Password)
        // console.log(State_.Phonenumber)
        // console.log(State_.name)
        if (State_.User_name === undefined || State_.Password === undefined || State_.Contact === undefined || State_.name === undefined) {
            // Set_message({ Error_message: "All fields are Mandatory" });
            alert("All fields are Mandatory");
        }
        else {
            if (State_["User_name"].length < 5 || State_.User_name.length > 13) { alert("Username must have greater than 5 characters") }
            else if (State_.Password.length < 5 || State_.Password.length > 13) { alert("Password must have greater than 5 characters") }
            else if (regex(State_.Contact)) alert(State_.Contact + " is not a valid Email or Phonenumber")
            else {
                // alert("no")
                let data_post = { UserName: State_.User_name, 
                    Password: State_.Password, Contact: State_.Contact, 
                    address: State_.name }

                axios.post(" https://moonkart-bk.herokuapp.com/login", data_post)
                    .then(res => 
                        alert(res.data)
                        // console.log(res)
                    )
                    .catch(err => {
                        // if (err.response.status === 403) alert("User name has already taken");
                        // if (err.response.status === 400) alert("Mail Id or Phonenumber is already Existing");
                        // else alert("Server Busy!!");
                        // console.log(1+err.response)
                        // console.log(2+err.response.status)
                        // console.log(err)
                        alert(err.response.data)
                    })
            }
        }

        // https://moonkart-bk.herokuapp.com/login
    }
    function Password_func() {
        if (Password_visibility == "Password") Set_PV("text");
        else Set_PV("Password");

        // alert(Password_visibility)
    }
    // Redirecting to loginpage
    function Login_page_redirect() {
        navigate("/login");
    }
    // Redirect to front page
    function front_page_redirect() {
        navigate("/Frontpage");
    }
    return (
        <div className='cont_bg_reg'>
            <div className='Login_container'>
                <div className='login_box_reg'>

                    <div>
                        <div className='Login_text'>Register</div>
                        <form onSubmit={formSubmit} onKeyPress={(e) => e.key === "Enter" && formSubmit()}>
                            <div> <label className='Username' id="Username">Username</label></div>
                            <div><input className='input_box' type="text" id="Username" name="User_name" value={State_.User_name || ""} onChange={(e) => Set_state_({ ...State_, User_name: e.target.value })} /></div>
                            <div> <label className='Password' id="Password">Password</label></div>
                            <div><input className='input_box' type={Password_visibility} id="Password" name="Password" value={State_.Password || ""} onChange={(e) => Set_state_({ ...State_, Password: e.target.value })} /></div>

                            <div> <label className='Username' id="mail">Phonenumber or e-mail</label></div>
                            <div><input className='input_box' type="text" id="mail" name="mail" value={State_.Contact || ""} onChange={(e) => Set_state_({ ...State_, Contact: e.target.value })} /></div>
                            <div> <label className='Username' id="name">Delivery Address</label></div>
                            <div><textarea className='input_box' type="text" id="name" name="name" value={State_.name || ""} onChange={(e) => Set_state_({ ...State_, name: e.target.value })} /></div>
                            <div className='show_pass'><input className='show_pass_box' type="checkbox" onClick={Password_func} /> Show Password</div>
                            <div className='button_t'><button className='Button_style' type='submit'>Submit</button></div>
                        </form>

                        <div className='Close_btn'> <button className='Register_btn' onClick={() => Login_page_redirect()}>Already a User? Login</button><div>or</div><button className='Register_btn' onClick={() => front_page_redirect()}>Skip</button> </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default RegistrationPage;