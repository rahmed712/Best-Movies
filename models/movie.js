const { Schema } = require('mongoose')


const Movie = new Schema(
    {
        name: { type: String, required: true },
        image: {type: String, required: true },
        durationInMinutes: {type: Number, required: true},
        rating: {type: Number, required: true},
        genres: [{type:Schema.Types.ObjectId,ref:"Genre"}],
        streamingPlatforms: [{type:Schema.Types.ObjectId,ref:"StreamingPlatform"}]
    },
    { timestamps: true },
)

module.exports = Movie