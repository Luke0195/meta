import React from 'react';
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import SalesCard from './components/SalesCard'
import {ContextProvider} from './context/MainContext'

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
  return(
    <React.Fragment>
      <ContextProvider>
        <Header/>
        <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
        </main>
        <ToastContainer/>
      </ContextProvider>
    </React.Fragment>
  )
}

export default App;
