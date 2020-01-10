import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import EditUser from './components/EditUser';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import ItemList from './components/LandingPage';
import NavBar from './components/NavBar';
import PostItems from './components/postItems';
import Edititem from './components/Edititem'; 
import UserPage from './components/UserPage';
import './App.css';


function App() {
  return (
    <div id="App">
      <NavBar/>
      <Switch>
        <PrivateRoute exact path="/userprofile/:id" component={UserPage} />
        <PrivateRoute path="/users/:id" component={EditUser} /> 
        <Route exact path="/" component={ItemList} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <PrivateRoute path="/postitems" component={PostItems}/>
        <PrivateRoute path="/edititem/:id" component={Edititem}/>
        {/* <Redirect to="/login" component={LoginForm} /> */}
      </Switch>
    </div>
  );
}

export default App;