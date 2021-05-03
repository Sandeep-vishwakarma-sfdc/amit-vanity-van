import './App.css';
import Home from './components/home';
import Header from './components/header';
import Services from './components/ourServices';
import Address from './components/address';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div>
      <Router>
      <ToastProvider placement="top-center">
      <Switch>
      <Route exact strict path="/">
        <Header />
        <Home/>
        <Services/>
        <Address/>
      </Route>
      <Route exact strict path="/home">
        <Header />
        <Home/>
        <Services/>
        <Address/>
      </Route>
      <Route exact strict path="/contact">
        <Header />
        <Address/>
      </Route>
      </Switch>
      </ToastProvider>
      </Router>
    </div>
  );
}

export default App;
