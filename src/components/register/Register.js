import React from 'react';
import axios from 'axios';

export class Register extends React.Component{

    constructor(){
        super();
        this.state= {
                       
                       firstName:'',
                        lastName:'',
                        emailId:'',
                        password:'',
                        mobileNumber:'',
                    }
          this.onInputChange= this.onInputChange.bind(this);
         //this.formSubmit= this.onInputChange.bind(this);
         this.loginUser= this.loginUser.bind(this);
    }

    onInputChange(event){
      var name=event.target.name // password
       var value=event.target.value;
       this.setState({ [name]: value});

    }
    loginUser(event){
            event.preventDefault();
            console.log(this.state);
            axios.post("http://localhost:3019/api/register",this.state);
    }

    render(){
     // console.log("Values here",this.state.username + "  " + this.state.password + " "+ this.state.emailId);
       return(
           <div>
             
             <form className="form-group" onSubmit={this.loginUser}>
             firstName: <input className="form-control" onChange={this.onInputChange} type="text" name="firstName"></input><br></br>
            <br></br>
            lastName: <input  className="form-control" onChange={this.onInputChange} type="text" name="lastName"></input> <br></br>
            <br></br>
            emailId: <input className="form-control" onChange={this.onInputChange} type="text" name="emailId"></input><br></br>
            <br></br>
            Password: <input  className="form-control" onChange={this.onInputChange} type="password" name="password"></input> <br></br>
            <br></br>
            mobileNumber: <input  className="form-control" onChange={this.onInputChange} type="text" name="mobileNumber"></input> <br></br>
            <br></br>
         
            <button>Register</button>
              
             </form>

           </div>
       )

    }
}

export default Register;