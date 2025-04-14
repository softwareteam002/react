import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello {user ? user.name : 'Loading...'}</h1>
    </div>
  );
}

export default App;
