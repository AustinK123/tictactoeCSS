import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

var XorO = 0

function Square({value, onSquareClick}){

  return <button className="square"> onClick={onSquareClick}
    {value}
    </button>;


//const [value, setValue] = useState(null);

// console.log('boom')

//   function handleClick(){


//     console.log("ouch you hit me");
//     if(XorO === 0){
//       setValue('X');

// XorO = 1
//     }
//     else{
//       setValue('O');
//       XorO = 0
//   }
//   }
//   console.log()
  
//   return <button className="square" onClick={handleClick}>{value}</button>
}

export default function Board(){
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  
return(<>

<div className="board-row">
  <Square value={squares[0]}/>
  <Square value={squares[1]}/>
  <Square value={squares[2]}/>
</div>

<div className="board-row">
  <Square value={squares[3]}/>
  <Square value={squares[4]}/>
  <Square value={squares[5]}/>
</div>

<div className="board-row">
  <Square value={squares[6]}/>
  <Square value={squares[7]}/>
  <Square value={squares[8]}/>
</div>

    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;
