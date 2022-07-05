import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Config from "./config";

class App extends Component {
    render(){
        return(
            <BrowserRouter basename={Config.BASE_URL}>
                <div>
                    <Header/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;