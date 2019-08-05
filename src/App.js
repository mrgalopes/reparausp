import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Reparos from './components/reparos/Reparos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReparoInfo from './components/reparos/ReparoInfo';
import ReparoForm from './components/reparos/ReparoForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Reparos} />
            <Route path='/add' exact component={ReparoForm} />
            <Route path='/:id' component={ReparoInfo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
