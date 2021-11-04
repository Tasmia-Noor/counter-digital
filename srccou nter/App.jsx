import React,{useState} from "react"
import "./App.css"

let App=()=>{
    const [count,setcount]=useState(0)

    let countInc=()=>{
        setcount(count+1)
    }

    let countDec=()=>{
        setcount(count-1)
    }

    let Reset=()=>{
        setcount(0)
    }

    console.log(count)

    return(
        <div>
            <div className="main">
            <h1>{count}</h1>
            <button onClick={countInc}>Inc</button>
            <button onClick={countDec}>Dec</button>
            <button onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}
export default App