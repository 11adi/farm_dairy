import logo from './logo.svg';
import './App.css';
import Farm_Dairy from './components/Farm_Dairy';
import Inspection from './components/Inspection';
import Contract from './components/Contract';
import Login from './components/Login';
import Iregister from './components/Iregister';
import Fregister from './components/Fregister';

function App() {
  return (
    <div className="App">
     <Login/>
     {/* <Iregister/> */}
     {/* <Fregister/> */}
     <Contract/>
     <Farm_Dairy/>
     <Inspection/>
    </div>
  );
}

export default App;
