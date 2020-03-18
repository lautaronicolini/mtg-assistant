import React, {Component} from "react"
import CardTile from "./CardTile.js"
import "./DeckList.css"

class DeckList extends Component {
    constructor(){
        super()
        this.state = {
            selectedCard = ""
        }
    }
    
    render() {
        return(
            <div className="DeckList">
                <CardTile name="Black Lotus"></CardTile>
                <CardTile name="Panharmonicon"></CardTile>
                <CardTile name="Pacifism"></CardTile>
            </div>
        )
    }
}

export default DeckList