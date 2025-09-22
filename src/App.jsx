import "./styles.css";
import data from "./data.json";
import { useState } from "react";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.name}>
          {node.isFolder && (
            <span
              className="name-container"
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded[node.name] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {isExpanded[node.name] && node.children && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <div className="container">
        <List list={data} />
      </div>
    </div>
  );
}
