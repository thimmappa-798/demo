import logo from './logo.svg';
import './App.css';
import ReducerRoot from './ReducerHook/ReducerRoot';
import Navbar from './component/Navbar';
import RouterComp from './component/RouterComp';



function App() {
 
  return (
    <div className="App">
    <Navbar />
    <RouterComp />
    

    </div>
  );
}

export default App;
