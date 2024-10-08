import './App.css';
import Alert from './components/Alert';
import About from './components/About'; // Re-enable the About component import
import NavBaar from './components/NavBaar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Router components are imported

function App() {
  const [mode, setMode] = useState('light'); // To check dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00008b';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <Router>
      <NavBaar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode = {mode}/>} />
          <Route exact path="/" element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
