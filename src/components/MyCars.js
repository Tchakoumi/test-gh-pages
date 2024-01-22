import { useState } from "react";
import Car from "./Cars";

export default function MyCars() {
  const [state, setState] = useState({
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Mercedes", color: "blue", year: 2020 },
      { name: "peugeat", color: "green", year: 2018 },
    ],
    titre: "Mon Catalogue Voitures2",
    valeurInput: "",
    name: "",
    age: "",
    color: "",
  });

  const addTenYears = () => {
    const updateSate = state.voitures.map((param) => {
      return { ...param, year: param.year - 10 };
    });
    setState({
      updateSate,
    });
  };

  const handleChange = (e) => {
    setState({ valeurInput: e.target.value });
    console.log(state.valeurInput);
  };
  const DeleteSpecificCar = () => {
    const newTable = state.voitures.splice(state.valeurInput, 1);
    console.log(newTable);
    setState({
      voiture: newTable,
    });
  };

  const handleChangeForm = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelleVoiture = {
      name: state.name,
      color: state.color,
      year: state.year,
    };

    setState((prevState) => ({
      voitures: [...prevState.voitures, nouvelleVoiture],
      name: "",
      age: "",
      color: "",
    }));
  };

  const year = new Date().getFullYear();

  return (
    <div>
      <h1>{state.titre}</h1>

      <button onClick={addTenYears}>+ 10 ans</button>

      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChangeForm}
          />
        </label>
        <br />
        <label>
          Annee:
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={handleChangeForm}
          />
        </label>
        <br />
        <label>
          color:
          <input
            type="text"
            name="color"
            value={state.color}
            onChange={handleChangeForm}
          />
        </label>
        <br />
        <button type="submit">Valider</button>
      </form>

      <input
        type="text"
        placeholder="entrer 1 2 ou 3"
        onChange={handleChange}
      />
      <button onClick={DeleteSpecificCar}>Supprimer une voiture</button>

      {state.voitures.map((voitures, index) => {
        return (
          <div key={index}>
            <Car color={voitures.color} year={year - voitures.year + " ans"}>
              {voitures.name}
            </Car>
          </div>
        );
      })}
    </div>
  );
}
