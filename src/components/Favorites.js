import React, { Component } from 'react'

export class Favorites extends Component {
    state = {
        iconClass: 'far fa-heart fave-heart'
    }

    toggleHeart = () => {
        this.state.iconClass === 'far fa-heart fave-heart' ? 
        this.setState({
            iconClass: 'fas fa-heart fave-heart'
        }) :
        this.setState({
            iconClass: 'far fa-heart fave-heart'
        })
    }

    render() {
        return (
            <i className={this.state.iconClass} onClick={this.toggleHeart}></i>
        )
    }
}

export default Favorites
