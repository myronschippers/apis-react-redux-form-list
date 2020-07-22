import React from 'react';
import './App.css';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';
import CreatureList from '../CreatureList/CreatureList';
import CreatureForm from '../CreatureForm/CreatureForm';

class App extends React.Component {
  // state = {
  //   creatureList: [
  //     {
  //       name: 'Dragon',
  //       origin: 'China',
  //     },
  //     {
  //       name: 'Kitsune',
  //       origin: 'Japan',
  //     },
  //   ],
  // }

  // addCreature = (newCreature) => {
  //   this.setState({
  //     creatureList: [
  //       ...this.state.creatureList,
  //       newCreature,
  //     ],
  //   })
  // }

  // deleteCreature = (creatureIndex) => {
  //   const listWithoutCreature = this.state.creatureList.filter((item, index) => {
  //     return creatureIndex !== index;
  //   });

  //   this.setState({
  //     creatureList: listWithoutCreature,
  //   });
  // }

  render() {
    // toggle things
    return (
      <AppLayout>
        {/* ADDITIONAL CONTENT */}
        <CreatureForm />
        <CreatureList />
      </AppLayout>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    secondReducer: store.secondReducer,
  }
};
export default connect(mapStoreToProps)(App);
