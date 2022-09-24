import React, { useState } from 'react'
import Alert from './component/Basics/Alert'
import About from './component/Basics/About'
import Navbar from './component/Basics/Navbar'
import TextForm from './component/Basics/TextForm'

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")//tells wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (messege, type) => {

    setAlert({
      msg: messege,
      msg_type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#052227"
      showAlert("Dark-Mode has been Enabled", "success")
      // document.title = "TextUtils-Dark Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light-Mode has been Enabled", "success")
      // document.title = "TextUtils-Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils-Word/Character Counter, Lowercase/Uppercase Converter, Replace string" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  )
}

export default App