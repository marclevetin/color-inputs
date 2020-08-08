import React, {useState} from "react";
import ColorContext from './ColorContext';

import Input from './Input';

const {Provider: Giraffe} = ColorContext;
// don't randomly name things Giraffe unless it's funny

const allTheInputs = [
  {id: 1, label: 'One', name: 'one'},
  {id: 2, label: 'Two', name: 'two'},
  {id: 3, label: 'Three', name: 'three'},
  {id: 4, label: 'Four', name: 'four'},
]

export default function App() { 
  const [colors, setColors] = useState({})

  function handleChange(event) {
    const {name, value} = event.target;
    const newState = {...colors, [name]: value};
    setColors(newState);
  }

  return (
    <>
      <Giraffe value={colors}>
      <h1>Welcome to React Parcel Micro App!</h1>
      <p>Hard to get more minimal than this React app.</p>

      <h1>All of the colors</h1>
      {allTheInputs.map(input => 
        <Input 
          handleChange={handleChange}
          key={input.id}
          label={input.label}
          name={input.name}
          // value={colors[input.name]}
        />
      )}
      <hr/>
      <button>Get some data!</button>
      <label>Filter the data
        <input type="text" placeholder="Filter the data"/>
      </label>
      <p>Data goes here</p>
      </Giraffe>
    </>
  )
};