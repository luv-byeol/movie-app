import { Switch, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Movie from "./component/Movie";

function App() {
  return (
      <Switch>
        <Route path='/' component={Movie} exact />
        <Route path='/:id' component={Detail} exact />
      </Switch>
  );
}

export default App;
