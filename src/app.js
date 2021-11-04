import React from 'react'
import './assets/css/style.css'

export default class App extends React.Component{

    state={
        x : 0
    }

    handleInc = () =>{
        this.setState({
            x : this.state.x+1
        })
    }

    handleDec = () => {
        this.setState({
            x : this.state.x-1
        })

        if(this.state.x == 0){
            this.setState({
                x: 0
            })
        }

    }

    render(){
        console.log(this.state,"test")
        return(
            <div className='mainDiv'>
                <h1 className='heading'>Digital Tasbeeh</h1>
                <div className='counterDiv'>
                    <h2>{this.state.x}</h2>
                    
                    <div className='btnContainer'>

                        <button className='fas fa-minus' onClick={this.handleDec}>Dec</button>
                        <button className='fas fa-plus' onClick={this.handleInc}>Inc</button>

                    </div>

                </div>
                
            </div>
        )
    }
}

// class App2 extends React.Component{
//     render(){
//         return(
//             <div>App2</div>
//         )
//     }
// }

// export {App,App2}
