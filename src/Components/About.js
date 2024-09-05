import React from 'react'

export default function About(props) {
  return (
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Textron?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
        <strong>Textron: </strong> It is a text utility to make you editing task easy for your text based data.
        <br/>It consists of various editing tools by using you can make your text as per your desire. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How it works?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
        <strong>Guide: </strong> Copy your text to clipboard and paste it to the provided text area.
        <br/> Select the tool you would like to use to edit your text
        <br/> Copy the edited text using the COPY button.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Tools we have
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
        <strong>Upper Case: </strong> Converts the entire text to upper case.
        <br/>
        <strong>Lower Case: </strong> Converts the entire text ot lower case.
        <br/>
        <strong>Remove Extra Spaces: </strong> Replaces the extra spaces to one space.
        <br/>
        <strong>Word Count: </strong> Returns number of words in the text entered.
        <br/>
        <strong>Find and Replace</strong> This tool is use to replace a word from another in the entered text.
      </div>
    </div>
  </div>
</div>
  )
}
