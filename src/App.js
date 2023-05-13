import './App.css';
import A from './A'
import React from "react";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            password : ""
        }
    }
 /*  pass = (data) => {
        this.setState({password : data})
       console.log("data ---" + data)
       setTimeout(console.log("this.state.password ---" + this.state.password),1)
    }*/

    pass = (data) => {
        console.log("input Val --->" + data)
    }

render () {
    return (
        <div>
            <A pass={this.props.pass}/>
        </div>
    )

}
}

export default App;
