import React, {Component} from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <p>
                    Testando 1,2,3...
                </p>
                <Home/>
            </div>
        )
    }
}

export default App;