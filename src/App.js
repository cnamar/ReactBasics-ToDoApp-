import "./App.css";
import { useState } from "react";
import { Todos } from "./components/Todos";
import { Completed } from "./components/Completed";
import { Dropped } from "./components/Dropped";
function App() {
  let [toDos, setToDos] = useState([]);
  let [toDo, setToDo] = useState("");
  return (
    <div className="app" align="center">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => {
            setToDo(event.target.value);
            console.log(toDo);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => {
            setToDos([
              ...toDos,
              { id: Date.now(), name: toDo, status: false, dropped: false },
            ]);
          }}
        ></i>
      </div>
      <div className="display" align="center">
        <div className="row">
          <div className="column">
            <h3>All</h3>

            {toDos.map((object, index) => {
              if (!object.dropped) {
                return (
                  <Todos
                    key={index}
                    object={object}
                    set={setToDos}
                    todos={toDos}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className="column">
            <h3>Completed</h3>
            {toDos.map((object, index) => {
              if (!object.dropped && object.status) {
                console.log("helloo" + object.name);
                return (
                  <Completed
                    key={index}
                    object={object}
                    set={setToDos}
                    todos={toDos}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="column">
            <h3>Dropped</h3>
            {toDos.map((object, index) => {
              if (object.dropped) {
                console.log("helloo" + object.name);
                return (
                  <Dropped
                    key={index}
                    object={object}
                    set={setToDos}
                    todos={toDos}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
