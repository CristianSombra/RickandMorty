import { useState } from "react";
import Validate from "../../utils/validations/Validations.js";
import "./Forms.css";

function Form ({login}) {
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const [errors, setErrors] = useState({
        email:"",
        password:"",
    })

    function handleChange(e) {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
        
        setErrors(
            Validate({
            ...user,
            [e.target.name]:e.target.value,
        })
        );

    };


    function handleSubmit(e) {
        e.preventDefault();
        login(user);
      }


    return (
        <div className="form-container">
        <div className="form-title">
            <h1>Fill your credentials</h1>
        </div>
            <form type="submit">
                <div className="credentials">
                    <label>Username</label>
                    <input 
                    placeholder="user@example.com" 
                    name="email" 
                    value={user.email}
                    onChange={handleChange}/>
                        {errors.email ? <span>{errors.email}</span>: null}
                </div>
                <div className="credentials">
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password"
                    value={user.password} 
                    onChange={handleChange}/>
                       {errors.password ? <span>{errors.password}</span>: null}
                </div>
                <button className="submit-butom" onClick={handleSubmit}>LOGIN</button>
            </form>

        </div>

    ) 

}

export default Form;