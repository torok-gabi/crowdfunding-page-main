import React, {useState} from "react";
import './App.scss';
import About from './components/About/About';
import Bamboo from './components/Bamboo/Bamboo';
import Header from './components/Header/Header';
import Stand from "./components/Stand/Stand";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [select, setSelect] = useState(false); 

  const clickSelect = () => {
      setSelect(!select)
  }
  const clickHandler = () => {
    setSidebar(!sidebar)
  }
  const clickBookmark = () => {
    setBookmark(!bookmark)
  }
  
  return (
    <div className="App">
      <Header sidebar={sidebar} clickHandler={clickHandler}/>
      <Bamboo sidebar={bookmark} clickHandler={clickBookmark} select={select} clickSelect={clickSelect}/>
      <About/>
      <Stand clickSelect={clickSelect}/>
    </div>
  );
}

export default App;
