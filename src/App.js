import './App.css';
import React from "react";
import { CalcButtons } from './components/calc-buttons';
// https://www.youtube.com/watch?v=T7Cxu10Kln4
const App = () => {
    return(
      <div className='container'>
        <div className='calculator'>
          <CalcButtons/>
        </div>
      </div>
    )
}

export default App;
