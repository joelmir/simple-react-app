import React from 'react';
import ImgLogo from './components/imgLogo/ImgLogo'
import DefaultParagraph from './components/defaultParagraph/DefaultParagraph'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ImgLogo/>
        <DefaultParagraph/>
      </header>
    </div>
  );
}

export default App;
