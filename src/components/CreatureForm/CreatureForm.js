import React, { Component } from 'react';

class CreatureForm extends Component {
  state = {
    enteredName: '',
    enteredOrigin: '',
  }

  handleClickAdd = () => {
    this.props.addCreature({
      name: this.state.enteredName,
      origin: this.state.enteredOrigin,
    });

    this.setState({
      enteredName: '',
      enteredOrigin: '',
    })
  }

  handleChangeName = (event) => {
    this.setState({
      enteredName: event.target.value
    })
  }

  handleChangeOrigin = (event) => {
    this.setState({
      enteredOrigin: event.target.value
    })
  }

  render() {
    return (
      <div className="stackBlock">
        <h2>Add a New Creature</h2>
        <div className="formWrap">
          <input
            className="field"
            type="text"
            placeholder="Creature Name"
            onChange={this.handleChangeName}
            value={this.state.enteredName}
          />
          <input
            className="field"
            type="text"
            placeholder="Creature Origin"
            onChange={this.handleChangeOrigin}
            value={this.state.enteredOrigin}
          />
          <button
            className="btn"
            onClick={this.handleClickAdd}
          >
            ADD CREATURE
          </button>
        </div>
      </div>
    );
  }
}

export default CreatureForm;
