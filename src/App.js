import React, { Component } from 'react';
import './styles/app.css';
import Header from './components/base/Header';
import Icons from './components/base/Icons';
import WhoAmI from './components/whoami/Whoami';
import Projects from './components/projects/Projects';
import SocialNetworks from './components/whoami/SocialNetworks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Icons />
        <Header />
        <div className="content-container grid-container">
          <WhoAmI />
          <Projects />
          <SocialNetworks />
        </div>
      </div>
    );
  }
}

export default App;
