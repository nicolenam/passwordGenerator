import './App.css';
import { useState } from "react";
import Display from "./Components/Display";
import Form from "./Components/Form";

function App() {

  const [ password, setPassword ] = useState("");
  const [ isCopied, setIsCopied] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Password Generator</h1>
      </header>
      <Display password={password} setIsCopied={setIsCopied} isCopied={isCopied}/>
      <Form setPassword={setPassword} setIsCopied={setIsCopied}/>
    </div>
  );
}

export default App;
