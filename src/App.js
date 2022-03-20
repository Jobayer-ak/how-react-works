import logo from './logo.svg';
import './App.css';
import Device from './component/Device/Device';
import Watch from './component/Device/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="uphone" price="15000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
