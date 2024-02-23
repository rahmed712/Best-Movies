//Necessary Imports
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/index')

//Controller functions
const movieController = require('./controllers/movieControllers')
const genreController = require('./controllers/genreControllers')
const streamingPlatformController = require('./controllers/streamingPlatformController')

//Set up for Express
const PORT = process.env.PORT || 3001;
const app = express();

//middleware here
app.use(cors()) //Necessary for some HTTP methods while working on local network
app.use(bodyParser.json()) //Allows you to use the body of requests
app.use(logger('dev')) //Better logs

//Set up and homepage
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', async (req,res) => {
    res.send("Welcome to Best MoviesDB")
})

//Endpoints
app.get('/movies', movieController.getAllMovies) 
app.get('/movies/:id', movieController.getMovieById)
app.post('/movies/create', movieController.createMovie)
app.put('/movies/:id/update',movieController.updateMovie)
app.delete('/movies/:id/delete', movieController.deleteMovie)

app.get('/genres',genreController.getAllGenres)
app.get('/genres/:id', genreController.getGenreById)
app.post('/genres/create', genreController.createGenre)
app.put('/genres/:id/update', genreController.updateGenre)
app.delete('/genres/:id/delete', genreController.deleteGenre)

app.get('/streamingplatforms',streamingPlatformController.getAllStreamingPlatforms)
app.get('/streamingplatforms/:id',streamingPlatformController.getStreamingPlatformById)
app.post('/streamingplatforms/create', streamingPlatformController.createStreamingPlatform)
app.put('/streamingplatforms/:id/update', streamingPlatformController.updateStreamingPlatform)
app.delete('/streamingplatforms/:id/delete', streamingPlatformController.deleteStreamingPlatform)
// Handle 404 errors
app.get('/*', async (req,res) => {
    res.send('An error has occurred. Try again later (404)')
})