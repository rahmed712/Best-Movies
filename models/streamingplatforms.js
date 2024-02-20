const { Schema } = require('mongoose')

const StreamingPlatform = new Schema(
    {
        name: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = StreamingPlatform