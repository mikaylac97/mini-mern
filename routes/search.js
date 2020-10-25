require('dotenv').config()

const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.get('/playlist-search', (req, res, next) => {
        spotifyApi.searchPlaylists(req.query.playlistSearch)
        .then(data => res.json({ searchResults : data.body.playlists.items }))
        .catch(err => console.log(err))
})

module.exports = router;