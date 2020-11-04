import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Contact from '../components/contact/Contact';
import Inventory from '../components/inventory/Inventory';

export class RouterConfig extends React.Component{
    render(){
        return(
            <div>
               <Route path="/login" component={Login}/>
               <Route path="/register" component={Register}/>
               <Route path="/contact" component={Contact}/>
               <Route path="/inventory" component={Inventory}/>
            </div>
        )
    }
}
export default RouterConfig;