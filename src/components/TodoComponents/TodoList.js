// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from "react";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            items: []
          };
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
        }
     
      }
      
    
    
 
export default TodoList;

