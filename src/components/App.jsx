import React from "react";

// declaritive programming
// function Strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }

// function unStrike() {
//   document.getElementById("root").style.textDecoration = null;
// }

// function App() {
//   // var isDone = true;
//   // const strikeThrough = { textDecoration: "line-through" };
//   // return <p style={isDone ? strikeThrough : null}>Buy milk</p>;
//   return (
//     <div>
//       <p>Buy milk</p>
//       <button onClick={Strike}>Change to strike through</button>
//       <button onClick={unStrike}>Unstrike</button>
//     </div>
//   );
// }

// imperative programming

var isDone = false;
function Strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  // var isDone = true;
  // const strikeThrough = { textDecoration: "line-through" };
  // return <p style={isDone ? strikeThrough : null}>Buy milk</p>;
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={Strike}>Change to strike through</button>
      <button onClick={unStrike}>Unstrike</button>
    </div>
  );
}

export default App;
