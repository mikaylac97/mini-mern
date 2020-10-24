import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Favorites from './Favorites'
// import Navbar from './Navbar'
// import Search from './Search';


export default class ShowAll extends Component {
    state = {
        playlists: [],
        search: '',
        boxIsChecked: false,
        // savedFeatState: {},
        // savedSearchState: {},
        savedPrevState: {}
    }

    componentDidMount() {
        this.getFeaturedPlaylists();
    }

    getFeaturedPlaylists = () => {
        axios.get(`http://localhost:4000/api/all-playlists`)
            .then(responseFromAPI => {
                this.setState({
                    playlists: responseFromAPI.data.featuredPlaylists,
                    savedPrevState: responseFromAPI.data.featuredPlaylists
                })
            })
            .catch(err => console.log(err))
    }

    getSearchedPlaylists = async (event) => {
        const { value } = event.target;

        await this.setState({
            search: value.toLowerCase()
        });
        axios
            .get(`http://localhost:4000/api/playlist-search?playlistSearch=${this.state.search}`)
            .then(searchFromAPI => {
                this.setState({
                    playlists: searchFromAPI.data.searchResults,
                    savedPrevState: searchFromAPI.data.searchResults
                })
            })
            .catch(err => console.log(err))
    }


    filterByNumberOfTracks = ((event, min, max) => {
        const filteredByTracks = this.state.playlists.filter(playlist => playlist.tracks.total >= min && playlist.tracks.total <= max)
        
        this.setState({
            playlists: event.target.checked ? filteredByTracks : this.state.savedPrevState,
        })
    })

    filterByPlaylistCreators = ((event, creator) => {
        const filteredByCreator = this.state.playlists.filter(playlist => playlist.owner.display_name === creator)
        
        this.setState({
            playlists: event.target.checked ? filteredByCreator : this.state.savedPrevState,
            boxIsChecked: !this.state.boxIsChecked
        })
    })


    

    
    render() {
        const playlistCreators = this.state.playlists.map(playlist => playlist.owner.display_name)
        const creatorsNoDuplicates = playlistCreators.filter((creator, i) => playlistCreators.indexOf(creator) === i)
        console.log(creatorsNoDuplicates)    
        return (
            <div container>
                <nav class='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
                    <div className='container'>   
                    <Link to='/playlists' className="navbar-brand home-btn" onClick={() => window.location.reload()}><h3>Home</h3></Link>
                        <div className='search-bar'>
                    <i className="fas fa-search" aria-hidden="true"></i>
                        <input className='search-input' type='text' value={this.state.search} onChange={this.getSearchedPlaylists} placeholder='Search'></input>
                        </div>
                    </div>
                </nav>
            <div className='row'>
                <div className='col-sm-3'>
                <div className='filter-sidebar'>
                        <h5>Refine by</h5>
                        
                    <div>
                        <h6 className='text-info'>Number of Tracks</h6>
                        <ul className='list-group'>
                            <li className='form-check'>
                                <input type="checkbox" class="form-check-input" id="0-20" onClick={(e) => this.filterByNumberOfTracks(e, 0, 20)}/>
                                <label class="form-check-label" for="0-20">0-20</label>
                            </li>
                            <li className='form-check'>
                                <input type="checkbox" class="form-check-input" id="21-50" onClick={(e) => this.filterByNumberOfTracks(e, 21, 50)} />
                                <label class="form-check-label" for="21-50">21-50</label>
                            </li>
                            <li className='form-check'>
                                <input type="checkbox" class="form-check-input" id="51-99" onClick={(e) => this.filterByNumberOfTracks(e, 51, 99)}/>
                                <label class="form-check-label" for="51-99">51-99</label>
                            </li>
                            <li className='form-check'>
                                <input type="checkbox" class="form-check-input" id="100" onClick={(e) => this.filterByNumberOfTracks(e, 100, 300)} />
                                <label class="form-check-label" for="100">100+</label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='text-info'>Created By</h6>
                        <ul className='list-group'>
                        {creatorsNoDuplicates.map((creator, i) => {
                            return(
                                <li className='form-check'>
                                    <input type="checkbox" checked={this.state.boxIsChecked} class="form-check-input" id={`exampleCheck${i}`} onClick={(e) => this.filterByPlaylistCreators(e, creator)}/>
                                    <label class="form-check-label" for={`exampleCheck${i}`}>{creator}</label>
                                </li> 
                            )
                        })}
                        </ul>
                    </div>

                </div>
                </div>
                <div className='col-sm-9'>
        <div className='container featured-playlists'> 
                <div className='row'>
                {this.state.playlists.map(playlist => {
                    const descriptionNoCover = playlist.description.split('Cover')
                    return(
            <div key={playlist.id} className='col-4 each-playlist'>     
                
                    <div className='container'>
                        <div className='hover-ctrl'>
                        <Link to={`/playlists/${playlist.id}`} style={{ textDecoration: 'none' }}>
                            <img src={playlist.images[0].url} alt='playlist-cover' className='image ft-playlist-imgs'/>
                        </Link>    
                            <Favorites />
                        </div>
                    </div>
                
                        
                        <div className='container'>
                        <Link to={`/playlists/${playlist.id}`} className='playlist-link'><h4>{playlist.name}</h4></Link>
                                <p>{descriptionNoCover[0]}</p>
                                <p>Created by <b>{playlist.owner.display_name}</b></p>
                        </div>
                    </div>
                    )
                })}
                </div>
            </div>
            </div>
            </div>
        </div>
        )
    }
}

