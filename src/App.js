import './App.css';
import List from "./components/List"
import {Route, Link, BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from "./components/Create";
import Edit from "./components/Edit";


function App() {
    return (

        <Router>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to={"/list"}>Sistema <span className="sr-only">(current) </span> </Link>
                    <Link className="nav-item nav-link" to={"/create"}> Crear empleado  </Link>

                </div>
            </nav>

            <div className="container">
                <br/>

                <Route path="/list" > <List /> </Route>
                <Route path="/create" > <Create /> </Route>
                <Route path="/edit/:id" > <Edit /> </Route>


            </div>
        </Router>
    );
}

export default App;
