import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import './App.css';

const carinfo = { name: "Ford", model: "Mustang" };


function App() {
  return (
    <div className="App">
      <Car model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
