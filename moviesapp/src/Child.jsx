import React from 'react';
class Child extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructed");
    this.state = {
      on:false
    };
  }
  state = {
    
  };
  componentDidMount() {
    console.log("mount");
    
  }
  componentDidUpdate(){
    console.log("update")
  }
  componentWillUnmount(){
    console.log("unmount");
  }
  render() {
    console.log("render");
    return <div>

    <button  className="btn btn-primary"onClick={
      ()=>{
        this.setState({on:!(this.state.on)})
      }
    }
    >Click</button>
    </div>

  }
}

export default Child;
