import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled","success");
      document.title="TextUtils | Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      document.title="TextUtils | Light Mode";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
          <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>    
      </div>
    </>
  );
}

export default App;
