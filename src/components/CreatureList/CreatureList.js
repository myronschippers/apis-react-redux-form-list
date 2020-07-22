import React, { Component } from 'react';
import CreatureListItem from '../CreatureListItem/CreatureListItem';

class CreatureList extends Component {
  render() {
    return (
      <div className="stackBlock">
        <h2>Available Creatures</h2>
        <ul className="blocks">
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                <CreatureListItem
                  creature={item}
                  index={index}
                  deleteCallback={this.props.deleteCallback}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CreatureList;
