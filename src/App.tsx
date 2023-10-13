import React from 'react';
import './App.css';
import Bridge from './patterns/structural/Bridge';
import DecoratedList from './patterns/structural/Decorator';
import FacadeComponent from './patterns/structural/Facade';
import Strategy from './patterns/behaviors/Strategy';
import Memento from './patterns/behaviors/Memento';
import Command from './patterns/behaviors/Command';
import State from './patterns/behaviors/State';
import Template from './patterns/behaviors/Template';

function App() {
  return (
    <div className="App">
        <Bridge />
        <DecoratedList />
        <FacadeComponent />
        <Strategy />
        <Memento />
        <Command />
        <State />
        <Template />
    </div>
  );
}

export default App;
