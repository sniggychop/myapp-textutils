//import About from "./Components/About";
import React ,{ useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Route,
  Switch} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light'); //for dark mode
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      
    }
  }

  return (
    <>
    <Router> 

    <Navbar Title="TextUtils" mode={mode}  toggleMode={toggleMode} />
    <div className="container my-3">
    <Switch> 
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Textform heading="Analyze the text" mode={mode}/>
          </Route>
    </Switch>
    
    </div>
    </Router>
    </>

  );
}
export default App;
