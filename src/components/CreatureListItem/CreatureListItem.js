import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureListItem extends Component {
  handleClickDelete = () => {
    // this.props.deleteCallback(this.props.index);
    this.props.dispatch({
      type: 'DELETE_CREATURE_FROM_LIST',
      payload: this.props.index,
    });
  }

  render() {
    const {
      creature,
    } = this.props;

    return (
      <div className="card">
          <div className="card-bd">
            <h4 className="cardHdg">{creature.name}</h4>
            <p className="cardSubHdg">Origin: {creature.origin}</p>
          </div>
          <div className="card-action">
            <button
              className="btn"
              onClick={this.handleClickDelete}
            >
              DELETE
            </button>
          </div>
      </div>
    );
  }
}

export default connect()(CreatureListItem);
