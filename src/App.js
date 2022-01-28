import { Welcome } from './components/Welcome/Welcome';
import { Instruction } from './components/Instruction';
import { Quiz } from './components/Quiz';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/instruction">
            <Instruction />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
