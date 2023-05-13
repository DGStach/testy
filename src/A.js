import React from "react";

function firstComponent({pass}){

    return (
        <div>
            <form>
            <label>Password</label>
                <input
                    onChange={(event)=>pass(event.target.value)}/>
            </form>
        </div>
    )
}

export default firstComponent