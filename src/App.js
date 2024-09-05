import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import TextUtils from './Components/TextUtils';
import Alert from './Components/Alert';
import About from './Components/About';
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, tp) => {
    setAlert({
      message: msg,
      type: tp
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const getMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert('Changed to dark mode', 'Success: ')
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert('Changed to light mode', 'Success: ')
    }
  };
  return (
    <>
      <Router>
        <div className="App">
          <Navbar mode={mode} getMode={getMode}></Navbar>
          <Alert alert={alert}/>
        </div>
        <Routes>
          <Route exact path='/about' element={<About mode={mode}/>}>
          </Route>
          <Route exact path='/' element={<TextUtils showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
