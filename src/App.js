import './App.css';
import Home from './components/home';
import Header from './components/header';
import Services from './components/ourServices';
import Address from './components/address';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Aboutus from './components/aboutus';
import Gallary from './components/galllery';
import OurPartner from './components/ourpartner';
import Contact from './components/contact';
import News from './components/news';
import Vanity from './components/vanityvan';
import { useState } from "react";
const GSheetReader = require('g-sheets-api');

function App() {
  const [vanities,setVanities] = useState([]);

  return (
    <div>
      <Router>
      <ToastProvider placement="top-center">
      <Switch>
      <Route exact strict path="/">
        <Header />
        <Home/>
        <Gallary/>
        <Services/>
        <Address/>
        <Contact/>
      </Route>
      <Route exact strict path="/home">
        <Header />
        <Home/>
        <Gallary/>
        <Services/>
        <Address/>
        <Contact/>
      </Route>
      <Route exact strict path="/about">
        <Header />
        <Aboutus/>
        <Contact/>
      </Route>
      <Route exact strict path="/gallery">
        <Header />
        <Gallary/>
        <Contact/>
      </Route>
      <Route exact strict path="/contact">
        <Header />
        <Address/>
        <Contact/>
      </Route>
      <Route exact strict path="/partner">
        <Header />
        <OurPartner/>
        <Contact/>
      </Route>
      <Route exact strict path="/news">
        <Header />
        <News/>
        <Contact/>
      </Route>
      <Route exact strict path={`/vanityvan/:imgid`}>
        <Header />
        <Vanity/>
      </Route>
      </Switch>
      </ToastProvider>
      </Router>
    </div>
  );
}

export default App;
