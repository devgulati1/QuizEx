// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React,{useState} from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "../LandingPage/LandingPage";
import ShowData from "../ShowData/ShowData";
import "./App.css";

function App() {
  const [val,setVal]=useState(false);
 
 
  const btnClickedHandler=(value)=>{
    setVal(value);
    console.log(value);
    

  }
  
  return (
    <div  className="app">
    {val? <ShowData/>:<LandingPage  btnClicked={btnClickedHandler}/>}

    </div>
  );
}

export default App;
