import './App.css';
import A from './A'
import React from "react";


class App extends React.Component {
    constructor() {
        super({});
        this.t = 'abc'
        this.state = {
            password : "",
            lol:"ABC"
        }
    }
    pass = (data) => {
        console.log("input Val --->" + data)
    }

render () {
    return (
        <div>
            pppp
            <A t={this.t} lol={this.state.lol}/>
        </div>
    )

}
}

export default App;
