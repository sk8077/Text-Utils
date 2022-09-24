import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success")
  };
  const handleClrClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Text Copied to Clipboard!", "success")
  };

  const capitalize = () => {
    let firstchar = text.charAt(0); 
    let newText = firstchar.toUpperCase(); 
    setText(newText + text.slice(1))
    props.showAlert("Text Capatilized!", "success")
  }

 
  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:")
    let tobereplaced = new RegExp(repval, 'g');
    let toreplace = prompt("Enter the text that you want to replace with:");
    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
    props.showAlert("String Replaced!", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed!", "success")
  }


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value); //this will set the value of content =content+added content
  };


  return (
    <>
    
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#052227" }}>
        <h2 >{props.heading}</h2>
        <div className=" my-1">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "rgb(0, 51, 51)" : "white", color: props.mode === "dark" ? "white" : "#052227" }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <div className="button">
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={handleClrClick}>
            Clear
          </button>
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={capitalize}>
            Capitalize
          </button>
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={replaceString}>
            Replace-String
          </button>
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces}>
            Remove Extra-Spaces
          </button>
          <button disabled={(text.split(' ').filter(a => a.trim()).length)===0} className="btn btn-dark mx-2 my-2" onClick={handleCopyClick}>
            Copy
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#052227" }} >
        <h3>Text-Summury</h3>
        <p> <b>{text.split(' ').filter((a) => { return a.length !== 0 }).length} Words</b> and <b>{text.length} Characters</b> </p>
        <p> <b>{0.008 * (text.split(' ').filter(a => a.trim()).length)} Minutes to Read</b></p>
        <h3>Preview Text</h3>
        <p>{text.length > 0 ? text: "Nothing to preview right now!" }</p>
      </div>
    </>
  );
}

