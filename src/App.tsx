import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Movie from "./component/Movie";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Movie} exact />
        <Route path='/:id' component={Detail} exact />
      </Switch>
    </Router>
  );
}

export default App;
