import React from 'react';
import Header from './components/Header'
import NotificationButton from './components/NotificationButton'
import SalesCard from './components/SalesCard'
import './App.css'

const App = () =>{
  return(
    <React.Fragment>
      <Header/>
      <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
        </div>
      </section>
      </main>

    </React.Fragment>
  )
}

export default App;
