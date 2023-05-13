import './App.css';
import A from './A'
import React, {useState} from "react";


function App() {
    const [data, setData] = useState("")

    const pass = (a) => {
        setData(a);
        console.log("data" + data)
        console.log("a->>>" + a)
    }

    return (
    <div>
        <A pass = {pass}/>
    </div>
  )
}

export default App;
