import React from 'react';
import ClassCounter from './components/ClassCounter';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ProductArray from './components/ProductArray';
import HookCounterOne from './components/HookCounterOne';


function App() {
  return (
    <div className="App">
    
      {/*  <ClassCounter/> */}
      {/*<HookCounter /> */}
     { /*<HookCounterTwo/>*/}
     <HookCounterThree/>
     <HookCounterFour />
     {/**  <ProductArray/>*/}
     {/*<HookCounterOne/>*/}
    
  
    </div>
  );
}

export default App;
