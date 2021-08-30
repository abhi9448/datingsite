import  {BrowserRouter,Route} from 'react-router-dom';
import  Main from './components/Main';
import Login from "./components/Login";
import Home from './Home';




function App() {

 
  return (
    <BrowserRouter>
    
    
    <Route exact path="/login" component={Login}/>
    <Route exact path="/" component={Main}/>
    <Route exact path="/home" component={Home}/>
    </BrowserRouter>
    
  );
}

export default App;
