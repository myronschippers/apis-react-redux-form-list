import React, { Component } from 'react';

class CreatureListItem extends Component {
  handleClickDelete = () => {
    this.props.deleteCallback(this.props.index);
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

export default CreatureListItem;
