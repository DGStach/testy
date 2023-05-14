import React from "react";

class firstComponent extends React.Component{
    constructor ({lol,t}) {
        super ({});
        this.k = t;
        this.state = {
            passType : "text",
            lolA:lol
        }
    }

render (){
    console.log('this.k', this.k)
    console.log("ABC expected->>>")
    return (
        <div>
            <h1>{this.k}</h1>
            <h2>{this.props.lol}</h2>
        </div>
    )
}
}

export default firstComponent