import React , {Component} from "react"
import CardDisplay from "./CardDisplay"
import DeckList from "./DeckList"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        cards : [],
        cardName : "Black Lotus",
        displaySrc : "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/f/f8/Magic_card_back.jpg"
    }
    this.searchCard = this.searchCard.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    // let id = e.target.id
    // let value = e.target.value
    // let campo = {}
    // campo[id] = value //Se pone el id entre corchetes para que la prop del obejto 'campo' se llame como el valor de 'id'.
    // this.setState(campo)

    this.setState({[e.target.id] : e.target.value})
  }

  searchCard(){
    fetch('https://api.scryfall.com/cards/search?q=' + this.state.cardName,{
      method: 'GET'
    })
    .then(res => res.json())
    .then((data) => {
      if(data.data != undefined){
        this.setState({cards: data.data})
      }else{
        this.setState({cards: []})
      }

      let correctCard = this.state.cards.find(card => card.name === this.state.cardName)
      if(correctCard != undefined){
        this.setState({displaySrc : correctCard.image_uris.normal})
      }
      else{
        if(this.state.cards != []){
          this.setState({displaySrc : this.state.cards[0].image_uris.normal})
        }else{
          this.setState({displaySrc : "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/f/f8/Magic_card_back.jpg"})
        }
      }
    })
    .catch(console.log)
  }
  
  render(){
    return(
      <div className="App">
        <div>
          <select><option value="1">Mazo 1</option></select>
          <DeckList></DeckList>
        </div>
        <input id="cardName" onChange={this.handleChange} type="text" value={this.state.cardName}></input>
        <button id="searchCard" onClick={this.searchCard}>Buscar</button>
        <CardDisplay displaySrc={this.state.displaySrc}></CardDisplay>
      </div>
    )
  }
}

export default App;