import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{

  render(){    
    return (
      <div>App</div>
    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)