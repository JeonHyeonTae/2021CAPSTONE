import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { signIn,signUp } from './auth';
import AuthRoute from './AuthRoute';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
/*import LogoutButton from './LogoutButton';*/
import Grouplist from './Grouplist';
import Sign_up from"./Sign_up";
import Group from"./Group";
import Header from"./Header";

import './index.css';


function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const [Groupnumber,setGn] = useState('1');;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const su = ({ email, password, c_password, name }) => signUp({ email, password, c_password, name });
  const Cgn = ({number}) => setGn(number);
  const logout = () => setUser(null);


  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/a" component={About} />
          <Route
            path="/sign_up"
            render={props => (
              <Sign_up authenticated={authenticated} component={Sign_up} sup={su} {...props} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => (<Profile user={user} logout={logout} {...props} />)}
          />
          <Route exact path="/group"
            render={props => (<Grouplist path="/group" Cgn={Cgn} user={user} {...props} />)}
          />
          <Route path="/group/"
            render={props => (<Group  Groupnumber={Groupnumber} user={user} authenticated={authenticated} {...props} />)}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
