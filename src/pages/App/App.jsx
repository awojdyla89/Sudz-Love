import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import MainPage from '../MainPage/MainPage';
import ProfilePage from "../ProfilePage/ProfilePage";
import HomePage from "../HomePage/HomePage"


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App" style={{backgroundImage: `url(/background.jpeg)`, 
    width: '100%', 
    minHeight:'100vh',
    backgroundSize: "cover" }}>
      
    
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? (
             
             <Switch>
                <Route exact path="/">
                    <HomePage user={user} handleLogout={handleLogout}/>
                </Route>
                <Route exact path="/main">
                    <MainPage user={user} handleLogout={handleLogout}/>
                </Route>
                <Route path="/:username">
                    <ProfilePage user={user} handleLogout={handleLogout} />
                </Route>
            </Switch>
            
          ):(
            <Redirect to='/login'/>
          )}
  
      </Switch>
    </div>
  );
}

export default App;
