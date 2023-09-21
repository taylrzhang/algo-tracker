import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./styles.css"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      list: [],
    }
  }

  handleAddClick = () => {
    const { list, input } = this.state
    const tempList = [
      ...list,
      {
        text: input,
        id: uuidv4(),
        isEdit: false,
        preText: input,
      },
    ]
    this.setState({ list: tempList, input: "" })
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleEditClick = (id) => {
    let tempList = [...this.state.list]
    tempList = tempList.map((ele) => {
      if (ele.id === id) {
        ele.isEdit = true;
        ele.preText = ele.text
      }
      return ele
    })
    this.setState({ list: tempList })
  }

  handleDeleteClick = (id) => {
    let tempList = [...this.state.list]
    tempList = tempList.filter((ele) => {
      return ele.id !== id
    })
    this.setState({ list: tempList })
  }

  handleItemTextChange = (event, id) => {
    let tempList = [...this.state.list]
    tempList = tempList.map((ele) => {
      if (ele.id === id) {
        ele.text = event.target.value
      }
      return ele
    })
    this.setState({ list: tempList })
  }

  handleEnsureClick = (id) => {
    let tempList = [...this.state.list]
    tempList = tempList.map((ele) => {
      if (ele.id === id) {
        ele.isEdit = false
      }
      return ele
    })
    this.setState({ list: tempList })
  }

  handleCancelClick = (id) => {
    let tempList = [...this.state.list]
    tempList = tempList.map((ele) => {
      if (ele.id === id) {
        ele.isEdit = false
        ele.text = ele.preText
      }
      return ele
    })
    this.setState({ list: tempList })
  }

  render() {
    const { list, input } = this.state
    return (
      <div>
        <input value={input} onChange={this.handleInputChange} />
        <button onClick={this.handleAddClick}>submit</button>
        <ul>
          {list.map((ele) => {
            return ele.isEdit ? (
              <li key={ele.id}>
                <input
                  value={ele.text}
                  onChange={(e) => this.handleItemTextChange(e, ele.id)}
                />
                <button onClick={() => this.handleEnsureClick(ele.id)}>
                  sure
                </button>
                <button onClick={() => this.handleCancelClick(ele.id)}>
                  cancel
                </button>
              </li>
            ) : (
              <li key={ele.id}>
                {ele.text}
                <button onClick={() => this.handleEditClick(ele.id)}>
                  edit
                </button>
                <button onClick={() => this.handleDeleteClick(ele.id)}>
                  delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
