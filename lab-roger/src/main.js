'use strict';

import style from './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(() => ({content: say({text: faker.random.words(5)}) }))
  }
  
 
  render() {
    return (
      <div className="app">
     
        
        <h1>Generate Cowsay Lorem</h1>
        <div id='container'>
        <pre> {this.state.content}
        </pre>
        <button onClick={this.handleClick}>click me</button>
        </div>
        
        
        
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
