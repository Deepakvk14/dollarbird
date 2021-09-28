
import './App.css';
import Sidebar from "./Sidebar";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import Machine from './Machine';
import Categorey from './Categorey';
import Permission from "./Permission";
import Role from './Role';
import Site from './Site';
import SubCategorey from './SubCategorey';
import Ticket from './Ticket';
import Zone from './Zone';
import Country from './Country';
import Leveis from './Leveis';
function App() {
  return (
    
    <div className="App">
    <Router>
      <Sidebar/>
    
    <Switch>
      <Route exact path="/" component={Machine}></Route>
    </Switch>
    <Switch>
      <Route  path="/Categorey" component={Categorey}></Route>
    </Switch>
    <Switch>
      <Route  path="/Role" component={Role}></Route>
    </Switch>
    <Switch>
      <Route  path="/Permission" component={Permission}></Route>
    </Switch>
    <Switch>
      <Route  path="/Site" component={Site}></Route>
    </Switch>
    <Switch>
      <Route  path="/SubCategorey" component={SubCategorey}></Route>
    </Switch>
    <Switch>
      <Route  path="/Ticket" component={Ticket}></Route>
    </Switch>
    <Switch>
      <Route  path="/Zone" component={Zone}></Route>
    </Switch>
    <Switch>
      <Route  path="/Country" component={Country}></Route>
    </Switch>
    <Switch>
      <Route  path="/Leveis" component={Leveis}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
