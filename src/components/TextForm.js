import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }

    const handleLowClick= ()=>{
        //console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    
    const handleClear= ()=>{
        let newText="";
        setText(newText)
        props.showAlert("Cleared text!","success")
    }

    const handleCap= ()=>{
        let newText=text.split(" ").map((currentValue)=>{
            let newText=currentValue[0].toUpperCase()+currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Converted to Capitalize!","success")
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
    }

    const handleOnChange= (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

  const [text, setText] = useState("");
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCap}>Capitalise case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{text.length===0 ? 0 : 0.008 * text.trim().split(" ").length} Minutes is avg time for someone to read the given content</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Your entered text will be previewed here"}</p>
    </div>
    </>
  );
}
