import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'hi'
    };
  }
  render(){
    return(
      <div>
        <button onClick={()=>{this.setState({name:'test'})}}>Click me</button>
        <h1>Hello!!!!!! {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
