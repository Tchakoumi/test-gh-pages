import { Component } from 'react';
import MyCars from './components/MyCars';
import Welcome from "./components/Welcome";
import './App.css';

class App extends Component {

  // state = {
  //   titre: 'Mon Catalogue Voitures'
  // }

  render() {
    return (
      <div className='App'>
        <MyCars 
        // title={this.state.titre} 
        />
        <Welcome/>

      </div>
    )
  }
}

export default App;