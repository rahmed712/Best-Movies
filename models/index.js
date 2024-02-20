const mongoose = require('mongoose')
const genreSchema = require('./genre')
const movieschema = require('./movie')
const streamingplatformschema = require('./streamingplatforms')

const Genre = mongoose.model('Genre', genreSchema)
const Movie = mongoose.model('Movie', movieschema)
const StreamingPlatform = mongoose.model('StreamingPlatform', streamingplatformschema)

module.exports = {
    Genre,
    Movie,
    StreamingPlatform
}