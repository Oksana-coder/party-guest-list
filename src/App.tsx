import React, { useState } from 'react';
import PeopleList from './components/PeopleList';
import AddToList from './components/AddToList';
import './App.css';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron Lames",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Allergic to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <PeopleList people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
