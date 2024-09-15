import './App.css';
import NavBaar from './components/NavBaar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>    
    <NavBaar title = "TextUtilis"/>
    <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
    </div>
    
    </>
 );  
}

export default App;
