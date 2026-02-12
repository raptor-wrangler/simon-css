import React from 'react';
import { registerUser , loginUser} from '../../service.js';

export function Login() {
  const [user, setUser] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function register (event) {
    event.preventDefault();
    registerUser(email, password);
  }

  function login() {
    const user = loginUser(email, password);
    setUser(user);
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h1>Welcome to Simon</h1>
        <form onSubmit={register}>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={login}>Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}