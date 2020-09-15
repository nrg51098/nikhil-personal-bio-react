import React from 'react';
import 'firebase/auth';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Nikhil NSS Projects</h1>
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
