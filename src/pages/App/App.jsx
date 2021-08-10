import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import MainPage from "../MainPage/MainPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout();
    setUser({ user: null });
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(/background.jpeg)`,
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Switch>
        <Route exact path="/login">
          <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route path="/search">
          <SearchPage user={user} handleLogout={handleLogout} />
        </Route>

        {userService.getUser() ? (
          <Switch>
            <Route exact path="/">
              <HomePage user={user} handleLogout={handleLogout} />
            </Route>
            <Route exact path="/main">
              <MainPage user={user} handleLogout={handleLogout} />
            </Route>
            <Route path="/:username">
              <ProfilePage user={user} handleLogout={handleLogout} />
            </Route>
          </Switch>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </div>
  );
}

export default App;
