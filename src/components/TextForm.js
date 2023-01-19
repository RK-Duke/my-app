import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLowClick = ()=>{
        // console.log("Lowercase was Clicked: " + text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to LowerCase!", "success");
    }
    const handleClearClick = ()=>{
        // console.log("Clear was Clicked: " + text);
         let newText = '';
         setText(newText);
         props.showAlert("Text Cleared!", "success");
    }
    const handleInverseClick = ()=>{
        // console.log("Reverse was Clicked: " + text);
        setText(text.split('').reverse().join(''));
        props.showAlert("Inveresd!", "success");
    }
    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Inverse Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>

    )
}