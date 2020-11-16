import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Nav,Home} from './components/index'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
