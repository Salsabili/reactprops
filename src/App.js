import React from 'react';
import './App.css';
import Pro from './profile/Profile'
function App() {
  return (
    <div className="App">
      <Pro Fullname='salsabil idriss omar '/>
      <Pro bio="blabla"/>
      <Pro profession="data scientist"/>
      <Pro>
        <img src='https://images.hdqwalls.com/wallpapers/thumb/spiderman-red-suit-4k-mi.jpg' alt=""/>
      </Pro>
    </div>
  );
}

export default App;

