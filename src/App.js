import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Un repetidor</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Empieza a escribir algo" />
      <p className="repeater">{text}</p>
    </div>
  );
}

export default App;
