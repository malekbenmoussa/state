import React, { Component } from 'react'
import "./App.css"
import Classcountre from './Classcountre'
export class App extends Component {

  constructor(){
    super()
    this.state={show:true}

  }
  handershow=()=>{
    this.setState({
      show:!this.state.show
    })
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.handershow()} >hide</button>
        {this.state.show&&<Classcountre/>}
      </div>
    )
  }
}

export default App
