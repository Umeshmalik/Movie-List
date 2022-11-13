import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Toolbar from "./components/Toolbar";
import Login from "./components/Login";

function App() {

  return (
    <div className="App">
      <Router>
      <Toolbar />
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route path="/" element={<></>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
