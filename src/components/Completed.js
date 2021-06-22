import React from "react";
import "../App.css";
export const Completed = ({ object, set, todos }) => {
  return (
    <div className="todos">
      <div className="todo">
        <div className="left">
          <p>{object.name}</p>
        </div>

        <div className="right">
          <i
            className="fas fa-trash"
            onClick={() => {
              const confirmbox = window.confirm(
                "Do you want to delete this activity???"
              );
              if (confirmbox) {
                set(
                  todos.filter((toDo) => {
                    if (toDo.id === object.id) {
                      return null;
                    } else {
                      return toDo;
                    }
                  })
                );
              }
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
