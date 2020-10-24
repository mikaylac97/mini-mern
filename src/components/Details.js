
import React, { Component } from 'react'
import axios from 'axios'
import Favorites from './Favorites'
import '../App.css'
import {  Link  } from 'react-router-dom'

export default class Details extends Component {

    state = {
        image_url: '',
        tracks: [],
        description: '',
        name: '',
        owner: '',
        total_songs: 0,
        playlist_link: ''
    }

    componentDidMount() {
        this.getSinglePlaylist();
    }

    getSinglePlaylist = () => {
        const { params } = this.props.match;
        axios
            .get(`http://localhost:4000/api/playlists/${params.id}`)
            .then(responseFromAPI => {
                console.log(responseFromAPI.data.body)
                this.setState({
                    image_url: responseFromAPI.data.body.images[0].url,
                    tracks: responseFromAPI.data.body.tracks.items,
                    description: responseFromAPI.data.body.description,
                    name: responseFromAPI.data.body.name,
                    owner: responseFromAPI.data.body.owner.display_name,
                    total_songs: responseFromAPI.data.body.tracks.total,
                    playlist_link: responseFromAPI.data.body.external_urls.spotify
                })
            })
            .catch(err => console.log(err))
    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }





    render() {
        const descriptionNoCover = this.state.description.split('Cover')
        return (
        <div className='container-desktop'>
                <nav class='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
                    <div className='container'>
                    <Link to='/playlists' className="navbar-brand home-btn"><h3>Home</h3></Link>
                    </div>
                </nav>
        <div className='details-body'>
            <div className='playlist-details'>
                <div className='hover-ctrl container'>
                    <img src={this.state.image_url} alt='playlist-cover' className='image'/>
                    <Favorites />
                </div>
                <div className='playlist-details-txt'>
                <a href={this.state.playlist_link} className='playlist-link'><h2>{this.state.name}</h2></a>
                    <p>{descriptionNoCover[0]}</p>
                    <p>Created by <b>{this.state.owner}</b> - {this.state.total_songs} Tracks</p>
                </div>
            </div>  
<div className='details-table'>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Artist</th>
      <th scope="col">Album</th>
      <th scope='col'>Time</th>
    </tr>
  </thead>
  <tbody>
   {this.state.tracks.map((track, i) => {
       return (
           
               <tr key={i} className='table-rows'>
                   <th scope='row'>{i+1}</th>
                   <td><a href={track.track.external_urls.spotify} className='playlist-links'>{track?.track?.name}</a></td>
                   <td><a href={track.track.artists[0].external_urls.spotify} className='playlist-links'>{track?.track?.album?.artists[0]?.name}</a></td>
                   <td><a href={track.track.album.external_urls.spotify} className='playlist-links'>{track?.track?.album?.name}</a></td>
                   <td>{this.millisToMinutesAndSeconds(track.track.duration_ms)}</td>
               </tr>
           
       )
   })}
  </tbody>
</table>
                    </div>
                </div>
            </div>
        )
    }
}
