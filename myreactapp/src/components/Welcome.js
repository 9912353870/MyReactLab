import React, { Component } from 'react'

class Welcome extends Component {
    constructor(){
        super();
        this.state={
            msg:"Welcome ra bodko"
        }
        this.fun=this.fun.bind(this)
    }
    fun(){
        alert("hello opo")
    }
    render() {
        return (
            <div>
                {this.state.msg}
            
            <button onClick={this.fun}>
            SubmitButton
            </button>
            
            </div>
        )
    }
}
export default Welcome;