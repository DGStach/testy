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
   pass = (data) => {
        this.setState({password : data})
       console.log("data ---" + data)
       setTimeout(console.log("this.state.password ---" + this.state.password),1)
    }

render () {
    return (
        <div>
            <A pass={this.pass}/>
        </div>
    )

}
}

export default App;
