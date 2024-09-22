import React from 'react';

export default function About(props) {

  let myStyle = {
    color: props.mode === 'light' ? '#042743' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#042743',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  }


  return (
    <div className="container mt-5" style={myStyle}>
      <h1 className="mb-4" style={{ borderBottom: '2px solid gray' }}>About TextUtils</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Welcome to <strong>TextUtils</strong>, your go-to solution for all your text manipulation needs.
        Our web application is designed to make text processing easy, efficient, and accessible to everyone.
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <strong>Features:</strong>
        <ul>
          <li><strong>Text Transformation:</strong> Convert your text to uppercase, lowercase, or capitalize it with just a click.</li>
          <li><strong>Text Analysis:</strong> Get instant insights into word count, character count, and more.</li>
          <li><strong>Dark/Light Mode:</strong> Toggle between dark and light modes for a comfortable reading experience.</li>
        </ul>
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        At <strong>TextUtils</strong>, our mission is to streamline your text editing experience with tools that are easy to use and save you time.
        Whether you're drafting an essay, editing a blog post, or simply tinkering with some text, we've got you covered.
      </p>
    </div>
  );
}
