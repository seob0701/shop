import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Nav,Home,Diary, Notice, Shop} from './components/index'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/diary" component={Diary}/>
        <Route exact path="/notice" component={Notice}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
