import { Component } from 'react';
import Mycars from './components/MyCars';
import Welcome from "./components/Welcome";
import './App.css';

class App extends Component {

  // state = {
  //   titre: 'Mon Catalogue Voitures'
  // }

  render() {
    return (
      <div className='App'>
        <Mycars 
        // title={this.state.titre} 
        />
        <Welcome/>

      </div>
    )
  }
}

export default App;