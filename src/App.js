import React from 'react';
import './App.css';
import { Homepage } from './components/Homepage';
import Forms from './components/Forms';
import Mappage from './components/Mappage'
function App() {
  return (  
      //all the views are vertically aligned on top of each other.

      <div>
        <Homepage/>
        <Forms/>
        <Mappage/>
         

          

         
        
      </div> 

  );
}

export default App;
