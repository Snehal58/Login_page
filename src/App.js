import './App.css';
import React from 'react';
import { useState } from 'react';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = (username, password) => {
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      setUsername(username);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Contact username={username} />
      ) : (
        <Home handleSubmit={handleSubmit} />
      )}
    </div>
  );
};


//   return (
//     <div className="app">


//     </div>
//   );
// }

export default App;
