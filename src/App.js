import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Buat method handleClick
  handleClickPlus (){
    this.setState({count : this.state.count + 1})
  }
  
  handleClickMin (){
    this.setState({count : this.state.count - 1})
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* tambahkan event onClick di tag <button> */}
        <button onClick = {() => {this.handleClickPlus()}}>+</button>
        <button onClick = {() => {this.handleClickMin()}}>-</button>
        
      </div>
    );
  }
}

export default App;
