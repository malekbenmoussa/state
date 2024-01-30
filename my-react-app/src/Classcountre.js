import React, { Component } from 'react'

export class Classcountre extends Component {
    constructor(){
        super();
        this.state={
            countre:0,
            time:0,
            intervall:null
        }
    }
ajout=()=>{
    this.setState({

        countre:this.state.countre +1
    })

}
moins=()=>{
    this.setState({
        countre:this.state.countre -1
    })
}
//life cycle 
componentDidMount(){
    console.log('this is for the first render');
    this.setState({
       intervall:setInterval(
        ()=> this.setState({time : this.state.time +1}),1000)
    })

}
  render() {
    return (
      <div>
         
  <div className='body'>  <h1>{this.state.time}</h1>     <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />
  </div>
</a>

<a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
  </div>
</a>
         
   
  </div>
    </div>
    )
  }
}

export default Classcountre
