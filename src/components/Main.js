import React from "react";
import "./Main.css";
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router";
function Main(props){
  
      return (
         <div className="div1">
        <div className="head">
        Indian Cupid
        <Button variant="outline-secondary" className="btnn" onClick={()=>props.history.push('/login')}>Login</Button>
        </div>
 
        <div className="center"> 
       
         “Love is on every side, Cupid said. 
         And no one's side. Don't ask what Love can do for you.
         Love means attachment of two souls that means connect with 
         emotion .
 
 
 
        </div>
       
 
        <div className="foot">
        ©  2020 Copyright: Indiancupid.com
        </div>
          
 
      </div>
      );
    }
    
    export default withRouter(Main);
