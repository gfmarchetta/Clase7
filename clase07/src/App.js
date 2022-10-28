import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons/Button';
import Video from './components/Videos/Video';
import Audio from './components/Audio/Audio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button />
        <img src={logo} className="App-logo" alt="logo" />
        <Video />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Audio />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
