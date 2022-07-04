import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/react2/public/" element={<Home/>}/>
                    <Route path="/react2/public/sobre" element={<Sobre/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;