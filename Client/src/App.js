import './bootstrap-5-dark-theme-main/css/mdb.dark.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Home from './home/home.jsx';
import Login from './login/login.jsx';
import Register from './register/register.jsx';
import Test from './test/test.jsx';


const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Test">
          <Test />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:path" component={Home}/>
      </Switch>
    </Router>
  );
};



export default App;
