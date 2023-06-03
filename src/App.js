import './App.css';
import { useState } from 'react';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {

  const [ password, setPassword ] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Password Generator</h1>
      </header>
      <Display password={password} />
      <Form setPassword={setPassword}/>
    </div>
  );
}

export default App;
