import "./styles.css"
import React from "react"

export default class ImgList extends React.Component {
  state = {
    list: [],
    text: "",
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ list: res.slice(0, 50) })
      })
  }

  handleFilterChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { list, text } = this.state
    return (
      <>
        <input value={text} onChange={this.handleFilterChange} />
        <div className="container">
          {list
            .filter((item) => {
              if (item.title.toLowerCase().includes(text)) {
                return item
              }
            })
            .map((item) => {
              return (
                <div className="card">
                  <img src={item.url} width={200} alt={"test"} />
                  <br />
                  <span>ID: {item.id}</span>
                  <br />
                  <span>Description: {item.title}</span>
                </div>
              )
            })}
        </div>
      </>
    )
  }
}
