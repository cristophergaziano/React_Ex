import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { Container } from "./Container";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  render() {
    return (
      <Container title="My not-so-awesome App">
        <div>
          <Welcome name="Bernard" />
          <TodoList
            render={( items,index, handleRemoveItem ) => (
              <div>
                {" "}
                <ul>
                  {items.map((item) => (
                    <li key={index}>
                      {item}{" "}
                      <button onClick={() => handleRemoveItem(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          ></TodoList>
        </div>
      </Container>
    );
  }
}
