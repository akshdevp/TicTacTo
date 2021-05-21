import './App.css';
import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super() 
      this.state = {
        player_turn : 'X',
        board : ["","","","","","","","",""]
    }
  }

  squareClicked(index) {
    let player_turn = this.state.player_turn
    let board = this.state.board
    board[index] = player_turn;

    let winning_combinations = [
      [0,1,2],
      [3,4,5],
      [4,5,6],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<winning_combinations.length;i++) {
      let winner = winning_combinations[i]

      let p1 =  winner[0]
      let p2 = winner[1]
      let p3 = winner[2]

      if(board[p1]!=""&& board[p1]==board[p2] && board[p2]==board[p3]&&board[p1]==board[p3]) {
        alert(`winner ${player_turn} has won the game`)
      }
    }

    player_turn = (player_turn === 'X') ? "O" : "X" 
    console.log("playerTurn" , player_turn)
    this.setState({
      player_turn:player_turn,
      board:board
    })
   
  }

  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:'center'}}>Tic tac To</h1>
       <div className="board">
        {this.state.board.map((square , index)=>{
          return (<div onClick={()=>this.squareClicked(index)} style={{fontSize:'50px', textAlign:"center"}} className="square">{square}</div>)
        })}
       </div>
      </div>

    );
  }
}



export default App;
