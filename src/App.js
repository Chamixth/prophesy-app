import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import Home from './components/NavBar';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Temp from './components/Temp';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Temp />
    </div>
  );
}

export default App;
