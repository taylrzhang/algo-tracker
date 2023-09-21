//App Component
import "./styles.css";
import MenuItem from "./MenuItem";

// const menuConfig = [
//   {
//     title: "Home"
//   },
//   {
//     title: "Services",
//     subItems: ["Cooking", "Cleaning"]
//   },
//   {
//     title: "Contact",
//     subItems: ["Phone", "Mail"]
//   }
// ];

const menuConfig = [
  {
    title: "Home"
  },
  {
    title: "Services",
    subItems: [
      "Cooking",
      "Cleaning",
      {
        title: "Contact",
        subItems: ["Phone", "Mail"]
      }
    ]
  }
];

function Menu({ items }) {
  return (
    <ul className="topmenu">
      {items.map((el, i) => (
        <MenuItem item={el} key={i} />
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="App">
      <Menu items={menuConfig} />
    </div>
  );
}


//menuItem Component
import { useState } from "react";

export default function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <li>
      {item.title}
      {item.subItems &&
        (isOpen ? (
          <>
            <button onClick={handleExpand}>close</button>
            <ul>
              {item.subItems.map((sub, i) => {
                return typeof sub === "string" ? (
                  <li key={i}>{sub}</li>
                ) : (
                  <MenuItem item={sub} key={i} />
                );
              })}
            </ul>
          </>
        ) : (
          <button onClick={handleExpand}>expand</button>
        ))}
    </li>
  );
}