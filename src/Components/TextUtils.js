import React, {useState} from 'react'

export default function TextUtils(props) {
  const mystyle = {
    width: 500,
    height: 200,
    marginLeft: '400px'
  };
  const [text, setText] = useState('');
  const getText = (event) =>{
    setText(event.target.value);
  }
  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed', 'Success: ');
  }
  const copyText = () => {
    let txt = document.getElementById('textarea');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert('Text Copied', 'Success: ');
  }
  const lowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase', 'Success: ');
  }
  const upperCase = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase', 'Success: ');
  }
  return (
    <div>
      <textarea value={text} onChange={getText} id='textarea' style={mystyle}/>
      <br/>
      <button style={{marginLeft: '450px'}} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      <button onClick={copyText}>Copy</button>
      <button onClick={lowerCase}>Lower Case</button>
      <button onClick={upperCase}>Upper Case</button>
    </div>
  )
}