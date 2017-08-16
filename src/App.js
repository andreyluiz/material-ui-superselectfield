import React from 'react'
import { Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import logo from './assets/logo.svg'
import Nav from './Nav'
import Home from './Home'
import CodeExample1 from './CodeExample1'
import CodeExample2 from './CodeExample2'
import CodeExample3 from './CodeExample3'
import CodeExample4 from './CodeExample4'
import CodeExample5 from './CodeExample5'
import './App.css'

export default () => (
  <div className='App'>

    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>SuperSelectField</h2>
      <h4>a Material-UI based dropdown component</h4>
    </div>

    <Nav />

    <section className='App-content'>
      <Switch>
        <Route path='/example1' component={CodeExample1} />
        <Route path='/example2' component={CodeExample2} />
        <Route path='/example3' component={CodeExample3} />
        <Route path='/example4' component={CodeExample4} />
        <Route path='/example5' component={CodeExample5} />
        <Route component={Home} />
      </Switch>
    </section>

  </div>
)
