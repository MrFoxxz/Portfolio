import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  serviceWorker.unregister();
  
  /*                                
        ██                        ██    
      ▓▓▒▒▓▓                    ▓▓▒▒▓▓  
    ██▒▒░░▒▒▓▓                ▓▓▒▒░░▒▒▓▓
    ██░░▒▒░░▒▒▓▓            ▓▓▒▒░░▒▒░░██
    ██░░▒▒▒▒░░░░██        ██░░░░▒▒▒▒░░██
    ██░░▒▒▒▒░░░░██▓▓▓▓▓▓▓▓██░░░░▒▒▒▒░░██
    ██░░▒▒░░▒▒░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░██
    ██░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░██
    ██░░▒▒▒▒  ██▒▒▒▒░░░░▒▒░░  ██▒▒▒▒▒▒██
    ██░░▒▒▒▒▓▓██▒▒▒▒░░░░▒▒░░▓▓██▒▒▒▒▒▒██
    ██  ░░░░████▒▒▒▒░░░░▒▒░░████░░░░  ██
    ██  ░░░░▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒░░░░  ██
      ██    ░░▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒    ██  
      ██          ████████          ██  
        ████        ████        ████    
        ░░░░▓▓██            ▓▓██░░░░    
                ████████████            
   */