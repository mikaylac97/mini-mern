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


router.get('/all-playlists', (req, res, next) => {
    console.log('this is the query', req.query)
    spotifyApi
    .getFeaturedPlaylists({
         limit : 9, 
         offset: 1, 
         country: 'US', 
         locale: 'sv_SE', 
         timestamp:'2014-10-23T09:00:00' 
        })
    .then(data => {
        res.status(200).json({
            featuredPlaylists: data.body.playlists.items
        })
    })
    .catch(err => res.status(500).json({ message: "Error finding all tasks" }))
})

router.get('/playlists/:id', (req, res, next) => {
    spotifyApi
        .getPlaylist(req.params.id)
        .then(singlePlaylist => {
            res.status(200).json(singlePlaylist)
        })
        .catch(err => {
            res.status(400).json({ message: 'Error finding task' })
        })
})

module.exports = router;