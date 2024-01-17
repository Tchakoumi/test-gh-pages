import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "peugeat", color: "green", year: 2018 },
    ],
    titre: "Mon Catalogue Voitures2",
    valeurInput:'',
    name: '',
      age: '',
      color: '',
  };

  addTenYears = () => {
    // console.log('bien')

    const updateSate = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });
    this.setState({
      updateSate,
    });
  };

  
  
  
  handleChange = (e)=>{
    this.setState({valeurInput:e.target.value});
    // console.log(e.target.value)
    console.log(this.state.valeurInput);
  }
  DeleteCar = ()=>{

    console.log(this.state.newtable) ;
    const newtable = this.state.voitures.slice(1);
    this.setState({
      voitures:newtable
    })
  }
  DeleteSpecificCar=()=>{
    const newTable = this.state.voitures.splice(this.state.valeurInput, 1)
    console.log(newTable)
    this.setState({
      voiture:newTable
    })

  }


  handleChangeForm = (e) => {
    // Mettez à jour l'état avec les valeurs des champs de formulaire
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const nouvelleVoiture = {
      name: this.state.name,
      color: this.state.color,
      year:this.state.year,
      // year: new Date().getFullYear(), // Supposons que l'année est l'année actuelle
    };

    this.setState((prevState) => ({
      voitures: [...prevState.voitures, nouvelleVoiture],
      name: '',
      age: '',
      color: '',
    }));

    // Affichez les valeurs des champs dans la console (remplacez par votre logique d'enregistrement)
    // console.log('name:', this.state.name);
    // console.log('year:', this.state.year);
    // console.log('color:', this.state.color);
  };
  
  render() {
    const year = new Date().getFullYear();

    return (
      <div>
        <h1>{this.state.titre}</h1>

        <button onClick={this.addTenYears}>+ 10 ans</button>


        <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeForm}
          />
        </label>
        <br />
        <label>
          Annee:
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChangeForm}
          />
        </label>
        <br />
        <label>
          color:
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.handleChangeForm}
          />
        </label>
        <br />
        <button type="submit">Valider</button>
      </form>


        <input type="text" placeholder="entrer 1 2 ou 3"  onChange={this.handleChange}/>
        <button onClick={this.DeleteSpecificCar}>Supprimer une voiture</button>
        
        {this.state.voitures.map((voitures, index) => {
          return (
            <div key={index}>
              <Car color={voitures.color} year={year - voitures.year + " ans"}>
                {voitures.name}
              </Car>
            </div>
          );
        })}
        {/* <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year +'ans'} >{this.state.voitures[0].name}</Car>
                <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year +'ans'}>{this.state.voitures[1].name}</Car>
                <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year +'ans'}>{this.state.voitures[2].name}</Car> */}
      </div>
    );
  }
}


export default Mycars;
