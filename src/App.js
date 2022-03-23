import './App.css';
import FruitsCounter from './Components/FruitsCounter';
import NumberCounter from './Components/NumberCounter/NumberCounter'

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
      <div className='col-12'>
      <NumberCounter/>
      <FruitsCounter/>
      </div>
      </div>
    </div>
  );
}

export default App;
