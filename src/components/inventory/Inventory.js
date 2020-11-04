import React from 'react';
import axios from 'axios';

export class Inventory extends React.Component{
    items;
    constructor(){
        super();
        this.state= {
            "itemId" : '',
            "name" : '',
            "price" : '',
            "assignedTo" : ''
        }
        
          this.onInputChange= this.onInputChange.bind(this);
         
         this.addInventory= this.addInventory.bind(this);
    }

    onInputChange(event){
      var name=event.target.name
       var value=event.target.value;
       this.setState({ [name]: value});
    }
    addInventory(event){
            event.preventDefault();
            console.log(this.state);
            axios.post("http://localhost:8777/addItem",this.state).then(
                (postresponse) => {
                    console.log(postresponse);
                    if(postresponse.status === 200){
                        axios.get('http://localhost:8777/getItems').then(
                         (getresponse) => {    
                        this.items=getresponse.data;
                         }
                        )
                    }
                }
            );
    }
    render(){
     // console.log("Values here",this.state.username + "  " + this.state.password + " "+ this.state.emailId);
       return(
           <div>
             
             <form className="form-group" onSubmit={this.addInventory}>
             ItemId: <input className="form-control" onChange={this.onInputChange} type="text" name="itemId"></input><br></br>
            <br></br>
            Name: <input  className="form-control" onChange={this.onInputChange} type="text" name="name"></input> <br></br>
            price: <input  className="form-control" onChange={this.onInputChange} type="text" name="price"></input> <br></br>
            assignedTo: <input  className="form-control" onChange={this.onInputChange} type="text" name="assignedTo"></input> <br></br>
            <button>Add Inventory</button>
              
             </form>

           </div>

       )

    }
}

export default Inventory;