import React, { Component } from 'react'

export class ClassComponentCounter extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            name:''
        }
    }
    componentDidMount(){
        document.title= `count ${this.state.count} Times` ;
    }
    componentDidUpdate(){
        document.title = `count ${this.state.count} Times`;
    }

  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({count:this.state.count+1})
        }}>
            click {this.state.count} times
        </button>
        
      </div>
    )
  }
}

export default ClassComponentCounter