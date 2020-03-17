import React , {Component} from "react"
import './App.css';

class App extends Component {
  state = {
    cardImage: ""
  }
}

function App() {
  return (
    <div className="App">
      <input id="cardName" type="text"></input>
      <button id="searchCard" onclick="searchCard()">Buscar</button>
    </div>
  );
}

function searchCard(){
  fetch('https://api.scryfall.com/cards/search',{
    method: 'GET',
    body: JSON.stringify({
      q: document.getElementById('cardName').nodeValue
    })
  })
        .then(res => res.json())
        .then((data) => {
          this.setState({ cardImage: data })
        })
        .catch(console.log)

}

export default App;
