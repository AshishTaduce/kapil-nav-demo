import './App.scss';
import React, { useState } from "react";

function App() {

  const [navbarActive, changeNavState] = useState(false);


  function openDrawer (){
    changeNavState(!navbarActive);
  }

  return (
    <div className="App">
      <header className="App-header" />
        <div className = 'burger' onClick = {openDrawer}>button</div>
        <div className={navbarActive ? "nav-active" : "navbar"}>
        <li >Home </li>
        <li >Home </li>
        <li >Home </li>
        <li >Home </li>
        <li >Home </li>
        </div>
    </div>
  );
}

export default App;
