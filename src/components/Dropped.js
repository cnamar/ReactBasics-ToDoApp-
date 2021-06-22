import React from "react";

export const Dropped = ({ object, set, todos }) => {
  return (
    <div className="todos">
      <div className="todo">
        <div className="left">
          <i
            className="fas fa-upload"
            onClick={() => {
              const confirmbox = window.confirm(
                "Do you want to regain this activity to the uncompleted list???"
              );
              if (confirmbox) {
                set(
                  todos.filter((toDo) => {
                    if (toDo.id === object.id) {
                      toDo.status = false;
                      toDo.dropped = false;
                    }
                    return toDo;
                  })
                );
              }
            }}
          ></i>
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
