import style from './App.module.css'
import {Home , Landing, Form, Detail, About, User} from "./views"
import { Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  const location = useLocation()
  

  return (
     <div className={style.App}>
      {location.pathname !== "/" && <NavBar/>}
      {location.pathname !== "/welcome" && <NavBar/>}
      <Route exact path = "/" component={User}/>
      <Route exact path ="/welcome" component={Landing}/>
      <Route path ="/home" render={() => <Home /> }/>
      <Route path ="/create" render={() => <Form />}/>
      <Route path ="/detail/:id" component={Detail}/>
      <Route path ="/about" component={About}/>
    </div>
  );
 }

export default App;