import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [mode, setMode] = useState('signin');

  return (
    <section className={`login-card ${mode}`}>
      {/* Left side */}
      <aside className="side">
        <span className="dot" />
        <p>
          {mode === 'signin'
            ? 'Quiet access to your space'
            : 'Create your quiet space'}
        </p>

        <button
          className="ghost"
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
        >
          {mode === 'signin' ? 'Sign Up →' : '← Sign In'}
        </button>
      </aside>

      {/* Right side */}
      <div className="content">
        <h1>{mode === 'signin' ? 'Welcome Back' : 'Join the Space'}</h1>
        <span className="subtitle">
          {mode === 'signin' ? 'Enter your credentials' : 'Create your account'}
        </span>

        {mode === 'signup' && <input type="email" placeholder="Email" />}

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="primary">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </section>
  );
}
