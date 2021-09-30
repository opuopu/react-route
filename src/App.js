import logo from './logo.svg';
import './App.css';
import Home from './component/home/Home';
import { BrowserRouter,Switch,Route, Link } from 'react-router-dom';
import About from './component/about/About';
import Notfound from './component/notufound/Notfound';
import Friends from './component/friends/Friends';
import Header from './component/header/Header';
import Details from './component/details/details';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 
       <Header/>
 <Switch>
<Route path ="/home">
<Home></Home>
</Route>
<Route path ="/friends">
<Friends></Friends>
</Route>
<Route path ='/Friend/:userid'>
<Details/>
</Route>
<Route exact path ="/">
<Home></Home>

</Route>


<Route>
  <Notfound/>
</Route>

 </Switch>
 </BrowserRouter>

    </div>
  );
}

export default App;
