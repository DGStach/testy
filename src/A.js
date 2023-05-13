import React from "react";

class firstComponent extends React.Component{
    constructor (prop) {
        super (prop);
        this.state = {
            passType : "text"
        }
    }

// czy pomiedzy klasami da się przekazywac funkcje bez tworzenia komponentu matki

render (){
        const {passType} = this.state
    return (
        <div>
            <form>
                <label>Password</label>
                <input
                    type = {passType}
                    onChange={(event)=>pass(event.target.value)}/>
            </form>
        </div>
    )
}
}

export default firstComponent