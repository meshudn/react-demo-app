import React from 'react';

class App extends React.Component{
   constructor(){
     super();  
     this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: ""
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event){
    //  console.log(event.target.value);
    const {name, value} = event.target;
      this.setState ({
          [name]: value,
    });
   

  }
    render(){
    
      return (
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input 
             type="text" 
             onChange={this.handleChange} 
             name="firstName"  
          /><br/>
          <label>Last Name:</label>
          <input 
             type="text" 
             onChange={this.handleChange} 
             name="lastName"  /><br/>
          <label>Age:</label>
          <input 
             type="number" 
             onChange={this.handleChange} 
             name="age" /><br/>
          
          <label>Gender:</label><br/>
          <input 
             type="radio" 
             checked={this.state.gender === "male"} 
             onChange={this.handleChange} 
             value="male"
             name="gender" /><label>Male</label><br/>
          <input 
             type="radio" 
             checked={this.state.gender === "female"}
             value="female"
             onChange={this.handleChange} 
             name="gender" /><label>Female</label><br/>
          
          <div>
              <h3>{this.state.firstName} {this.state.lastName} is {this.state.age} years old</h3>
          </div>
        </form>
      );
    }
}

export default App;
