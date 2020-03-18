import React, {Component} from "react"
import "./CardTile.css"
import { lightgray, white } from "color-name"

class CardTile extends Component {
    constructor(){
        super()
        this.state = {
            bgColor : 'white'
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(color){
        this.setState({bgColor : color})
    }

    render() {
        let {name} = this.props
        return(
        <div className="CardTile" onClick={() => this.changeColor('lightgray')} style={{backgroundColor : this.state.bgColor}} cardName={name}>{name}</div>
        )
    }
}

export default CardTile