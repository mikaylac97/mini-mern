import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import '../Landing.css'

export class Landing extends Component {
    render() {
        return (
        <div>
        {/* <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to='/' className="navbar-brand home-btn"><h3>Mini Project</h3></Link>
                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2">
                    <i className="fas fa-search" aria-hidden="true"></i>
                        <input className='search-bar' type='text' value={this.state.search} onChange={this.getSearchedPlaylists} placeholder='Search'></input>
                    </form>
                    
                </nav> */}
        <nav class='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
            <div className='container'>
                <a href='/' className='navbar-brand'>Mini Project</a>
                <span>Spotify API</span>
            </div>
        </nav>
            <header className='masthead'>
                <div className ='container h-100'>
                
                    <div className='row h-100'>
                    
                        <div className='col-lg-7 my-auto'>
                            <div className='header-content mx-auto'>
                                <h1 className='mb-5'>Use the Spotify API to search for playlists by name, creators, and number of tracks!</h1>
                                <Link to='/playlists' style={{ textDecoration: 'none' }}>
                                <button className='landing-btn'>
                                
                                    CLICK HERE TO START
                                
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-5 my-auto'>
                        <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                            {/* <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! --> */}
                            <img src='../../pngfind.com-spotify-png-576303.png' alt="spotify-iphone" className='img-fluid'/>  
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='powered-spotify bg-primary text-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 mx-auto'>
                                <h2 className='section-heading'>Mini Project powered by Spotify API and Spotify Node NPM package</h2>
                                <p>Ironhack PTWD 2020 project to practice using APIs with React and implementing search and filter functionality.</p>
                                <div className='logos'>
                                    <a href='https://developer.spotify.com/documentation/web-api/'>
                                        <img src='../../Daco_4711911.png' alt='spotify-logo' />
                                    </a>
                                    <a href='https://www.npmjs.com/package/spotify-web-api-node'>
                                        <img src='../../npm-logo.png' alt='npm logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className='features'>
                <div className='container'>
                    <div className='section-heading text-center'>
                        <h2>Application Features</h2>
                        <p className='text-muted'>User is able to search playlists from the home page, filter search by number of songs and playlist creator, and access external urls through the details page.</p>
                        <hr />
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 my-auto'>
                            <div className='device-container'>
                                <div className='device-mockup iphone6_plus portrait white'>
                                <div className="device">
                            <div className="screen">
                            {/* <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! --> */}
                            <img src='../../pngfind.com-reggaeton-png-3915334.png' alt="spotify-iphone" className='img-fluid'/>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 my-auto'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='feature-item'>
                                            <i class="fab fa-spotify"></i>
                                            <h3>Spotify API</h3>
                                            <p className='text-muted'>App uses Spotify API to retrieve playlist, artist, album, and track information</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='feature-item'>
                                        <i class="fab fa-npm"></i>
                                        <h3>Node API package</h3>
                                        <p className='text-muted'>Utilizes NPM's Spotify API Node package for search feature</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='feature-item'>
                                        <i class="fab fa-react"></i>
                                        <h3>React</h3>
                                        <p className='text-muted'>Practice with using React components</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='feature-item'>
                                        <i class="fas fa-external-link-alt"></i>
                                        <h3>External URLs</h3>
                                        <p className='text-muted'>App features external links to Spotify playlists, artists, albums, and tracks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='cta'>
            <div className='overlay'></div>
                <div className='cta-content'>
                    <div className='container'>
                        <h2>Start searching.</h2>
                        <Link to='/playlists' style={{ textDecoration: 'none' }}>
                                <button className='landing-btn'>
                                    ENTER THE SITE
                                </button>
                        </Link>
                    </div>
                </div> 
            </section>
            <section className='contact bg-primary' id='contact'>
                <div className='container'>
                    <h2>Extra Links</h2>
                    <ul className='list-inline list-social'>
                        <li className='list-inline-item social-github'>
                            <a href='https://github.com/mikaylac97/mini-project'>
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li className='list-inline-item social-linkedin'>
                            <a href='https://www.linkedin.com/in/mikaylacastro/'>
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <footer>
                <div className='container'>
                    <p>Ironhack PTWD June 2020 Cohort. Mikayla Castro.</p>
                </div>
            </footer>
        </div>
        )
    }
}

export default Landing
