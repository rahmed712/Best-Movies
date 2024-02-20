const db = require('../db')
const {StreamingPlatform} = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const platforms = [
        { name: "Hulu" },
        { name: "Disney+" },
        { name: "Peacock" },
        { name: "Netflix" },
        { name: "YouTube" }
    ]

    await StreamingPlatform.insertMany(platforms)
    console.log('Streaming platforms were inserted to database')
}

const run = async () => {
    await main()
    db.close()
}

run()