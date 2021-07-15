import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Input from './components/Input';
import Hello from './components/Hello';
import ColorHello from './components/ColorHello';

function App() {

  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <Input path="/:id"/>
            <Hello path="/home/:word"/>
            <ColorHello path="/hello/:backgroundColor/:textColor"/>
        </Router>
    </div>
  );
}

export default App;