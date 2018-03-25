/**
 *
 * Machine.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }>
          {this.props.name}
        </div>
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
