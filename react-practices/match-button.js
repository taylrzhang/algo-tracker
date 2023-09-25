import { useEffect, useState } from "react";
import "./styles.css";

const CountryCapital = {
  Poland: "Warsaw",
  Germany: "Berlin",
  Azerbaijan: "Baku",
  "Papua New Guina": "Port Moresby"
};

export default function App() {
  const [list, setList] = useState([]);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    let tmp = Object.entries(CountryCapital)
      .reduce((acc, cur) => {
        return acc.concat(cur);
      }, [])
      .sort(() => Math.random() - 0.5);
    tmp = tmp.map((cur) => {
      return {
        text: cur,
        color: "",
        id: cur
      };
    });
    setList(tmp);
  }, []);

  const handleClick = (curr) => {
    if (!prev) {
      setPrev(curr);
      list.map((el) => {
        el.color = "";
        return el;
      });
      curr.color = "blue";
    } else {
      if (
        CountryCapital[prev.text] === curr.text ||
        CountryCapital[curr.text] === prev.text
      ) {
        setList(list.filter((el) => el !== prev && el !== curr));
      } else {
        curr.color = "red";
        prev.color = "red";
        setPrev(null);
      }
    }
  };

  return (
    <div className="App">
      {list.map((el, i) => {
        return (
          <button
            style={{ backgroundColor: el.color }}
            key={i}
            onClick={() => handleClick(el)}
          >
            {el.text}
          </button>
        );
      })}
    </div>
  );
}
