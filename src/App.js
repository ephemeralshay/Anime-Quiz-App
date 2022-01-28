import { Welcome } from './components/Welcome/Welcome';
import { Instruction } from './components/Instruction';
import { Question } from './components/Question';
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
            <Question />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
