import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

  
  

const Signup = ({ signup }) => {
    // const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const { first_name, last_name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
            signup(first_name, last_name, email, password);
            <Redirect to="/Login" />
    };
    const mystyle = {
       marginTop:"12px",
       position:"absolute",
       top:"90px",

    };
   

    return (
        <div>
          <div stye={mystyle}>
            <label>First name</label>
            <input name="first_name"
                    variant="outlined"
                    type='text'
                    required
                    fullWidth
                    label="First Name"
                    value={first_name}
                    onChange={e => onChange(e)}
                    autoFocus
              />
              <br/>
            <label>last name</label>
            <input name="last_name"
                    variant="outlined"
                    type='text'
                    required
                    fullWidth
                    label="last Name"
                    value={last_name}
                    onChange={e => onChange(e)}
                    autoFocus
              />
              <br/>
                 <label>email</label>
            <input name="email"
                    variant="outlined"
                    type='text'
                    required
                    fullWidth
                    label="email"
                    value={email}
                    onChange={e => onChange(e)}
                    autoFocus
              />
              <br/>
              <label>password</label>
              <input name="password"
                      variant="outlined"
                      type='text'
                      required
                      fullWidth
                      label="email"
                      value={password}
                      onChange={e => onChange(e)}
                      autoFocus
                />
                <button type="submit"  onClick={(e)=>onSubmit(e)}> Sign Up</button>

          </div>
          
        </div>
      );
};

const mapStateToProps = state => ({
    // isAuthenticated: state.authreducer.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
