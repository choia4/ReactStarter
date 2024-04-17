import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

//react hook needed to use state and invoke functions more than once
import {useState} from 'react';

function App() {
  //first element is the current data snapshot of execution cycle
  //second element is updated value of execution cycle

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
