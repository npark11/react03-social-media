import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Nari Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus eos sint dolore quo, natus tempore similique animi quam architecto!
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;