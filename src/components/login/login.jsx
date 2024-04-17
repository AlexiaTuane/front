import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import FundoLogin from '../../assets/fundologin.png';
import Exodus from '../../assets/exodus.png';
import { loginUser } from '../../services/user';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIncorrectCredentials(false); // Reset the incorrectCredentials flag when the username changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIncorrectCredentials(false); // Reset the incorrectCredentials flag when the password changes
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(username, password);
      console.log('Usuário autenticado:', userData);

      // Armazenar os dados do usuário autenticado no estado local
      userData(userData);

      navigate('/exodus/inicio');
    } catch (error) {
      console.error('Erro durante o login:', error);
      setIncorrectCredentials(true);
    }
  };

  return (
    <div className="login-container" id="login" style={{ backgroundImage: `url(${FundoLogin})` }}>
      <div className="background-container">
        <div className="black-gradient"></div>
      </div>
      <div className="form-container glass-form-container">
        <img src={Exodus} alt="Exodus Logo" className="Exodus" />
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" value={username} onChange={handleUsernameChange} />
          <input type="password" placeholder="Password" className="login-input" value={password} onChange={handlePasswordChange} />
          <button className="login-button" onClick={handleLogin}>Login</button>
        </form>
        {incorrectCredentials && (
          <div className="alert alert-danger" role="alert" style={{ marginTop: '10px', width: '100%' }}>
            Usuário ou senha incorretos. Tente novamente.
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
