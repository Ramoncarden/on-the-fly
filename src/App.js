import React, { useState, useEffect } from 'react';
import './tailwind.output.css';
// import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/auth/Form';
import SignIn from './components/auth/SignIn';
import Home from './pages';
import About from './pages/About';
import Dropdown from './components/Dropdown';
import ProfilePage from './components/dashboard/ProfilePage';

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <main className="h-screen">
          <Route path="/" exact component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <Form />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <ProfilePage />
          </Route>
          <Footer />
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
