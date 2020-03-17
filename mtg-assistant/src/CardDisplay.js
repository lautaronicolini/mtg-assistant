import React, {Component} from "react"

class CardDisplay extends Component {
    render() {
        let {displaySrc} = this.props
        return(
            <img id="cardDisplay" width="80" height="100" src={displaySrc}></img>
        )
    }
}

export default CardDisplay