import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const [err, setErr] = useState(null)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const { login } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate('/')
    } catch (error) {
      setErr(error.response.data)
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus eos sint dolore quo, natus tempore similique animi quam architecto!
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            
            {err && <p style={{color: 'red'}}>{err}</p>}
            <button onClick={handleLogin}>Login</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;