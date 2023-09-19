import "./styles.css";
import React, {useState} from 'react'

export default function App() {
  const [input,setInput] = useState("")
  const [selections, setSelections] = useState([]);
  const [selected, setSelected] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)

  }
  
 
  const handleAddEvent = () => {
    setSelections([...selections, input]);
    setInput("")
  }

  console.log(selected)
  const handledelEvent = () => {
    setSelections(selections.filter((el) => {
      return el !== selected
    }))
  }

  console.log(input, selections)
  return (
    <div className="App">
      <input value={input} onChange={handleInputChange}/>
      <br />
      <button onClick={handleAddEvent}>add</button>
      <button onClick={handledelEvent}>delete</button>
      <br />
      <select onChange={(e) => setSelected(e.target.value)}>
        {selections.map((el) => {
          return <option value={el}>{el}</option>
        })}
      </select>
    </div>
  );
}
