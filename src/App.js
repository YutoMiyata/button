import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h3>hello</h3>
      < Button buttonMessage='1button' buttonColor='red'/>
      < Button buttonMessage='2button' buttonColor='blue'/>
      < Button buttonMessage='3button' buttonColor='green'/>
    </div>
  );
}

export default App;
