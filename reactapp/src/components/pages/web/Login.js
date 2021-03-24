import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import AppContext from '../../../context/AppContext';

const Login = () => {
  const {setFirstName, setUserName, setIsLoggedIn} = useContext(AppContext);
  
  const history = useHistory();

  const login = () => {

    // const loginTestPerson = {
    //   email: 'robert@test.com',
    //   password: '1111'
    // };
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    
    const loginPerson = {
        email: email,
        password: pass
      };

    return axios.post('http://localhost:5000/api/Auth', loginPerson)
    .then(resp => {
      const success = resp.data.success;
      console.log(success);
      if (success === true) {
        const fname = resp.data.firstName;
        const uname = resp.data.username;

        setFirstName(fname);
        setUserName(uname);
        setIsLoggedIn(true);

        history.push('/account');
    }
      console.log('response is: ', resp);
    });
  } 

  return (
    <div className="my-flex-container">
      <div>
        <h1>Login</h1>
        {/* Change first name */}
        
        <div className="main">
          <p className="sign">Sign in</p>
          <form className="form1" />
          <div>
          <input id="email" className="un" type="text" placeholder="Email" />
          </div>
          <div>
          <input id="pass" className="pass" type="password" placeholder="Password" />
          </div>
          <div>
          <button onClick={login} className="submit">
            Sign In
          </button>
          </div>
          <div>
          <p className="forgot"><Link to='/forgot'>Forgot Password?</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
