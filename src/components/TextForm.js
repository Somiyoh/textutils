import React, { useState } from 'react'
import { syllable } from 'syllable'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Changed to Uppercase', 'success')
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Changed to Lowercase', 'success')
  }

  const handleClearClick = () => {
    let newText = ''
    setText(newText)
    setResult(0)
    props.showAlert('Text cleared', 'success')
  }

  const handleCompClick = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0)
    const syllables = words.reduce((total, word) => total + syllable(word), 0)
    const sentences =
      text.split(/[.!?]+/).filter((sentence) => sentence.length > 0).length || 1
    const fleschKincaid =
      206.835 -
      1.015 * (words.length / sentences) -
      84.6 * (syllables / words.length)

    setResult(fleschKincaid.toFixed(2))
    props.showAlert('The result is shown', 'success')
  }

  const [text, setText] = useState('')
  const [result, setResult] = useState(0)

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCompClick}
        >
          Calculate readibility score
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0
            }).length} words and {text.replace(/\s+/g, '').length} characters
        </p>
        <p>
          Your text can be read in{' '}
          {0.008 *
            text.split(' ').filter((element) => {
              return element.length !== 0
            }).length}{' '}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text === '' ? 'Enter your text to preview here' : text}</p>

        <h2>Readablility Score</h2>
        <p>The Flesch-Kincaid readability score of this text is {result}</p>
      </div>
    </>
  )
}
