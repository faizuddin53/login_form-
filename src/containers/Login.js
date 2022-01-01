import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'





const Login = ({login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const {email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
        
    };

   

    return (
          <div>
         <div>
  
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
                      label="password"
                      value={password}
                      onChange={e => onChange(e)}
                      autoFocus
                />
                <button    type="submit"  onClick={onSubmit}>login</button>

          </div>
          {isAuthenticated ?<h1>Hi, you are logged in!</h1>:""}
          {isAuthenticated==false  ?<h1> “Invalid Login Details” </h1>:""}

          </div>
      );
    
    
};

const mapStateToProps = state => ({
    isAuthenticated: state.authreducer.isAuthenticated
});

export default connect(mapStateToProps, { login})(Login);

