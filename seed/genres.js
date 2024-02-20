const db = require('../db')
const { Genre } = require('../models')


db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const genres = [
        { name: "Comedy" },
        { name: "Adventure" },
        { name: "Horror" },
        { name: "Mystery" },
        { name: "Action" },
        { name: "SciFi" },
        { name: "Drama" }
    ]

    await Genre.insertMany(genres)
    console.log('Genres were inserted to database')
}

const run = async () => {
    await main()
    db.close()
}

run()