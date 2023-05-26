import React,{useState} from 'react'


export default function Textform(props) {
const handleUpClick = ()=>{
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
}

const handleLoClick = ()=>{
 //  console.log("lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
}

const handleClearClick = ()=>{
  //  console.log("lowercase was clicked"+ text);
     let newText = ''
     setText(newText)
}

const handleCopy = ()=>{
  //  console.log("lowercase was clicked"+ text);
     var text=document.getElementById("myBox");
     text.select();
     //navigator.clipboard.writeText(text.value);
}

const handleExtraSpace = ()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}

const handleOnChange= (event)=>{
    //console.log(onchange);
    setText(event.target.value)
}
  const [text,setText]=useState('');
  

  return (
    <> 

  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>   
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick}>convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
    <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove extra spaces</button>
</div>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>your text summary</h2>
  <p>{text.split(" ").length } words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>


    </>
)
}
