import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
