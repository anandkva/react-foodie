import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Components/Header";
import Fooder from "./Components/Fooder";
import ListView from "./Components/ListView";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/item" component={ListView} />
        </Switch>
        <Fooder />
      </Router>
    </>
  );
}
export default App;
