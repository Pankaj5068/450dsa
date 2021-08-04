import logo from './logo.svg';
import './App.css';
import HeaderComponent from '../src/Component/HeaderComponent/HeaderComponent';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import ArrayComponent from '../src/Component/ArrayComponent/ArrrayComponent'
import TopicsComponent from '../src/Component/TopicsComponent/TopicsComponent'
import TopicDetail from '../src/Component/TopicsComponent/TopicDetail'
function App() {
  return (
    <div className="App">
      
      <Router>
      <HeaderComponent/>
   
        <Switch>
          <Route path="/:topicSlug" component ={TopicDetail} />
           
          <Route path="/">
              <TopicsComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
