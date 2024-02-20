const { Schema } = require('mongoose')

const Genre = new Schema(
    {
        name: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = Genre