require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 8080;



// MIDDLEWARE SETUP

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(
  cors({
      credentials: true,
      origin: ['http://localhost:3000', process.env.FRONTEND_POINT]
  })
);

// const allowedOrigins = process.env.FRONTEND_POINT
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       let msg = 'The CORS policy for this site does not ' +
//         'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
})

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
   
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );

app.use('/', require('./routes/index'))
app.use('/api', require('./routes/playlists'))
app.use('/api', require('./routes/search'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client-side/build'))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client-side', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app; 