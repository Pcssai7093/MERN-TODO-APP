// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import axios from 'axios';
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Desc from './components/Desc';
import Addtask from './components/Addtask';

function App() {


  const [taskdata,settaskdata]=useState('');
  // console.log('im in home component');
  useEffect(()=>{
      axios.get('http://localhost:3001/data')
      .then((res)=>{
          settaskdata(res.data);       
          console.log('task data fetched');    
      }).catch((err)=>{
      console.log(err);
      });
  },[taskdata]);
  // console.log(taskdata);

  return (

    <Router>
      <div className="App">
        
        <Switch>
      
          <Route exact path="/">
          <Link to='/'>Home</Link>
          <Home taskdata={taskdata}/>
          </Route>

          <Route exact path="/data/:id">
          <Link to='/'>Home</Link>
              <Desc taskdata={taskdata} />
          </Route>

          <Route exact path="/addtask">
          <Link to='/'>Home</Link>
             <Addtask/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
