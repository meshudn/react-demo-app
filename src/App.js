import React from 'react';

class App extends React.Component{
   constructor(){
     super();  
     this.state = {
          isLoggedIn: false
      };
      this.handleClickEvent = this.handleClickEvent.bind(this);
   }
   handleClickEvent(){
     this.setState(prevState => {
       return {
         isLoggedIn: !prevState.isLoggedIn
       };
     });
   }
    render(){
      let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
      return (
        <div>
          <button onClick={this.handleClickEvent}>{buttonText}</button>
        </div>
      );
    }
}

export default App;
