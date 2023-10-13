import React from 'react';
import './App.css';
import Bridge from './patterns/Bridge';
import DecoratedList from './patterns/Decorator';
import FacadeComponent from './patterns/Facade';
import Strategy from './patterns/Strategy';
import Memento from './patterns/Memento';
import Command from './patterns/Command';
import State from './patterns/State';
import Template from './patterns/Template';

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
