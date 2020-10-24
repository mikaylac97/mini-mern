import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    state = {
        search: '',
        searchResult: []
    }

    handleSearch = async (event) => {
        const { value } = event.target
        await this.setState({
            search: value.toLowerCase()
        });
        axios
            .get(`http://localhost:4000/api/playlist-search?playlistSearch=${this.state.search}`)
            .then(searchFromApi => {
                console.log({ searchResponse: searchFromApi.data })
                this.setState({
                    searchResult: searchFromApi.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.search} onChange={this.handleSearch} placeholder='search'></input>
            </div>
        )
    }
}
