import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Password Generator</h1>
      </header>
      <Display />
      <Form />
    </div>
  );
}

export default App;
