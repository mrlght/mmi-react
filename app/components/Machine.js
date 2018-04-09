/**
 *
 * Machine.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  handleClick() {
    console.log("blbl");
    console.log(this.props.name);
     this.props.handleStatusChange(this.props.index);
  }

  
  render() {
    // Dans tous les cas, afficher
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }>
          {this.props.name}
          <button onClick={(e) => this.handleClick(e)} type="button" className="btn">
          Toggle
          </button>
      
        </div>
        
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
