function Header(){
  return(
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">soccer:1</span>
  </header>
  );
}
const Game =() =>{
  return(
    <div className ="player">
      <span className="player-name">
        Guil
      </span>
      
      <div className="counter"> 
      <button className="counter-action decrement">-</button>
      <span className="counter-action">35</span>
      <button className="counter-action increment">+</button>
      </div>
    </div>

  );
}

ReactDOM.render(
  <Player/>
  document.getElementById('root')
);