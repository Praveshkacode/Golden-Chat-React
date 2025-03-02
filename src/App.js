import socketIO from "socket.io-client";
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Join from "./component/Join/join";
import Chat from "./component/Chat/chat";


function App() {

  
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/" Component={Join}/>
      <Route path="/chat" Component={Chat}/>

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
