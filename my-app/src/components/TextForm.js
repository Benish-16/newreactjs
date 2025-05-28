import React,{useState} from 'react';


export default function TextForm(props) {
    const[text,settext]=useState("Enter text here");
    //correct way to setext for text is settext("avvvv")
    const handleUpClick = () => {
 
    settext(text.toUpperCase());
   
  }    
    const handleLoClick = () => {
 
    settext(text.toLowerCase());
   
  }   
  const handleOnChange = (event) => {
    
    settext(event.target.value);
   
  }

  return (
    <>
    <div>

<div   className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea style={{ background: props.mode === 'light' ? 'white' : 'grey',color:props.mode === 'light' ? 'black' : 'white'}}  className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-2">
        <h1> your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}  characters</p>
          <p>{0.008*text.split(" ").length} minutest to read words</p>
          <h2>Previw</h2>
       

           <p>{text.trim().length > 0 ? text : "Enter something to preview it"}</p>


    </div>
    </>
  )
}
