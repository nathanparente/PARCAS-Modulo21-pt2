import React, {Component} from "react";
import{Link} from "react-router-dom";

class Home extends Component {
    render(){
        return(
            <div>
                <h1>Página Home </h1>
                <Link to="/sobre">Ir para a página Sobre</Link>

                <hr/>
            </div>
        )
    }
}

export default Home;