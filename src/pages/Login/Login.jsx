import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';
import { login, signUp } from '../../firebase/authService';
import './Login.css';
const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { username, email, password } = formData;
  const [authLoading, setAuthLoading] = useState(false); 

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signState === 'Sign Up') {
      try {
         await signUp(username, email, password);
         setSignState('Sign In');
         toast.success('User created!');
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
            setAuthLoading(true);
        const user = await login(email, password);
        if (user) {
          navigate('/');
          toast.success('Login Successful');
        } 
      } catch (error) {
        navigate('/login');
        toast.error(error.message);
      }finally{
            setAuthLoading(false);
      }
    }
  }
  return (
    <div className='login'>
      <img src={logo} alt="logo" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form key={signState} onSubmit={handleSubmit} className="form">
          {signState === 'Sign Up' && <input type="text" value={username} onChange={handleChange} name='username' placeholder='Username' />}
          <input type="email" value={email} onChange={handleChange} name='email' placeholder='Your Email' />
          <input type="password" name='password' value={password} onChange={handleChange} placeholder='Password' />
          <button className='btn login-btn' disabled={authLoading} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help ?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === 'Sign Up' ? <p>Already have account ? <span
            onClick={() => setSignState('Sign In')}
            role="button"
            aria-label="Switch to Sign In form">Sign In Now</span></p> :
            <p>New to Netflix ? <span role='button' aria-label='Switch to Sign Up form' onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login