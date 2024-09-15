import React, {useState} from 'react'
import { syllable } from 'syllable';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        setResult(0)
    }

    const handleCompClick = () => {
        const words = text.split(/\s+/).filter(word => word.length > 0);
        const syllables = words.reduce((total, word) => total + syllable(word), 0);
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length || 1;
        const fleschKincaid = 206.835 - (1.015 * (words.length / sentences)) - (84.6 * (syllables / words.length));

        setResult(fleschKincaid.toFixed(2));
    }

    const [text, setText] = useState('')
    const [result, setResult] = useState(0);

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCompClick}>Calculate readibility score</button>
        </div> 

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length - 1} words and {text.length} characters</p>
            <p>Your text can be read in {0.008 * text.split(' ').length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>

            <h2>Readablility Score</h2>
            <p>The Flesch-Kincaid readability score of this text is {result}</p>
            
        </div>
        </>
  )
}
