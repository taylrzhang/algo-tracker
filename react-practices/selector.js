import "./styles.css";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./modal";

export default function App() {
  const [input, setInput] = useState("");
  const [selections, setSelections] = useState([]);
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);
 

  const handleAddEvent = () => {
    if (input) {
      setSelections([...selections, input]);
      setShowModal(true);
    }
  };

  const handledelEvent = () => {
    if(selected) setShowModal(true);
    setSelections(
      selections.filter((el) => {
        return el !== selected;
      })
    );
  };

  const handleSelection = (e) => setSelected(e.target.value);

  return (
    <div className="App">
      <input value={input} onChange={handleInputChange} />
      <br />
      <button onClick={handleAddEvent}>add</button>
      {showModal && <div className="overlay"></div>}
      {showModal &&
        createPortal(
          <Modal
            input={input}
            selected={selected}
            setShowModal={setShowModal}
            setInput={setInput}
          />,
          document.body
        )}
      <button onClick={handledelEvent}>delete</button>
      <br />
      <select defaultValue='test' onChange={handleSelection}>
      <option value='test' />
        {selections.map((el, i) => {
          return (
            <option value={el} key={i}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default function Modal({ input, selected, setShowModal, setInput }) {
  const handleCloseClick = () => {
    setShowModal(false);
    setInput("")
  }
  return (
    <>
      <div className="modal">
        {input && <div>added: {input}</div>}
        {selected && <div>deleted: {selected}</div>}
        <button onClick={handleCloseClick}>Close</button>
      </div>
    </>
  );
}

/*
.App {
  font-family: sans-serif;
  text-align: center;
}

.modal {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: absolute;
  width: 250px;
  height: 100px;
  top: calc(50% - 125px);
  left: calc(50% - 125px);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #aaa; 
}

*/