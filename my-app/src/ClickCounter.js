import { useState } from "react";

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <p>
        <button onClick={handleCounterIncrement}>Increment</button> {counter}
      </p>
    </div>
  );
}

// import React from "react";

// export class ClickCounter extends React.Component {
//   state = { count: 0 };

//   handleCounterIncrement() {
//     this.setState((state) => {
//       return {
//         count: state.count + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <p>
//           <button onClick={this.handleCounterIncrement.bind(this)}>
//             Increment
//           </button>{" "}
//           {this.state.count}
//         </p>
//       </div>
//     );
//   }
// }
