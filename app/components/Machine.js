/**
 *
 * Machine.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class Machine extends React.Component {
  handleClick() {
    console.log("blbl");
    console.log(this.props.name);
     this.props.handleStatusChange(this.props.index);
     console.log(this.props.isActive);
  }

  
  render() {
    // Dans tous les cas, afficher
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }>
          {this.props.name}
          <Toggle onClick={(e) => this.handleClick(e)} type="button"/>
          
      
        </div>
        
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
