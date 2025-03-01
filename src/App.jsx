import { useState } from 'react'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

  // rcc- shortcut to import class based components
export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={20}/>
        
      </div>
    )
  }
}
