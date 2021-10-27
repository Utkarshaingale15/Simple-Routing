import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import Home from './components/Home';
import About from './components/About'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Demo from './components/Demo'
import Features from './components/Features'
import Info from './components/Info'
import Login from './components/Login'
import Policies from './components/Policies'
import Services from './components/Services'
import PageNotFound from './components/PageNotFound';

function App() {

  return ( 
    <>

      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/contact' component={Contact} />
        <Route path='/demo' component={Demo} />
        <Route path='/features' component={Features} />
        <Route path='/info' component={Info} />
        <Route path='/login' component={Login} />
        <Route path='/policies' component={Policies} />
        <Route path='/services' component={Services} />
        <Route component={PageNotFound} />
      </Switch>

    </>
  );
}

export default App;