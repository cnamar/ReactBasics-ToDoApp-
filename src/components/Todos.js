import React from "react";
import "../App.css";
export const Todos = ({ object, set, todos }) => {
  return (
    <div className="todos">
      <div className="todo">
        <div className="left">
          <input
            type="checkbox"
            onChange={(event) => {
              console.log(event.target.checked);
              set(
                todos.filter((toDo) => {
                  if (toDo.id === object.id) {
                    toDo.status = event.target.checked;
                  }
                  return toDo;
                })
              );

              console.log(todos);
              console.log(object.status);
            }}
            checked={object.status}
            name=""
            id=""
          />
          <p>{object.name}</p>
        </div>
        <Dropview object={object} set={set} todos={todos} />
      </div>
    </div>
  );
};
const Dropview = ({ object, set, todos }) => {
  if (object.status) {
    return null;
  } else {
    return (
      <div className="right">
        <i
          className="fas fa-times"
          onClick={() => {
            const confirmbox = window.confirm(
              "Do you want to drop this activity???"
            );
            if (confirmbox) {
              set(
                todos.filter((toDo) => {
                  if (toDo.id === object.id) {
                    toDo.dropped = true;
                  }
                  return toDo;
                })
              );
            }
          }}
        ></i>
      </div>
    );
  }
};
