
import React from 'react'
import Home from "./students/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Edit from "./students/Student/Edit";
import View from "./students/Student/View";
export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>      
  <Route exact path= "/" element= {<Home/>}/>

  <Route exact path= "/view/:id" element= {<View/>}/>
  <Route exact path= "/edit/:id" element= {<Edit/>}/>
  </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;























/*import Header from "./components/Header";
import Form from "./components/Form";
import FormList from "./components/FormList"
function App() {
 
 
  return (
    <div className="container ">
      <Header/>
      <Form/>
      <FormList/>
      <h1> hello world</h1>
      
    </div>
  );
}

export default App;
*/
/*
function App() {
  const [name, setNAme] =useState("world");
  const[count, setcount] = useState(10);
  const clickhandler=()=>{
    setNAme("hello NEW");
    setcount(count+1)
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button type="button" onClick={clickhandler}>click ME</button>
    </div>
  );
}

export default App;*/
