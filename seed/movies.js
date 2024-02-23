const db = require('../db')
const {Movie} = require('../models')


db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    // Fetch genres and platforms to use their IDs
    // Example: let comedyGenre = await Genre.findOne({ name: "Comedy" });
    // Example: let huluPlatform = await StreamingPlatform.findOne({ name: "Hulu" });
    // Use the fetched IDs in the movies array below
    
    const movies = [
        {
            name: "Shrek",
            image: "https://static.wikia.nocookie.net/shrek/images/8/85/Shrek_2001_poster.jpg/revision/latest?cb=20201020072731", // Placeholder, replace with actual image paths
            durationInMinutes: 90,
            rating: 8,
            genres: ['65d4c3c4939ed0c691f40269','65d4c3c4939ed0c691f4026a'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bb']
        },
        // Add other movies following the same structure


        {
            name: "Finding Nemo",
            image: "https://cdn.mobygames.com/covers/1342880-disneypixar-finding-nemo-playstation-3-front-cover.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 100,
            rating: 8.7,
            genres: ['65d4c3c4939ed0c691f40269','65d4c3c4939ed0c691f4026a'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bc']
        },


        {
            name: "Madagascar",
            image: "https://i.ebayimg.com/images/g/4mUAAOSw4-xghuQE/s-l600.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 86,
            rating: 7.5,
            genres: ['65d4c3c4939ed0c691f40269','65d4c3c4939ed0c691f4026a'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bd']
        },

        {
            name: "Shark Tales",
            image: "https://store.rare-t.com/_next/image?url=https%3A%2F%2Fmedias.rare-t.com%2FSharkTale-script-9.jpg&w=3840&q=90", // Placeholder, replace with actual image paths
            durationInMinutes: 90,
            rating: 6,
            genres: ['65d4c3c4939ed0c691f40269','65d4c3c4939ed0c691f4026a'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bd']
        },


        {
            name: "Stephen King’s IT 2017",
            image: "https://1.bp.blogspot.com/-5ET0D6BQs5E/WbU9ZZ2Ry1I/AAAAAAABPfM/hDw5dxA1zyIp1yHYaDMXJUYs7eblOLhUQCLcBGAs/s1600/it1.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 135,
            rating: 7.4,
            genres: ['65d4c3c4939ed0c691f4026b'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7be']
        },


        {
            name: "Smile",
            image: "https://m.media-amazon.com/images/M/MV5BYzczMDk1MDktMTgxNC00Zjc3LWI2YzUtZWRhNmRkZDIzZDQyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 115,
            rating: 6.5,
            genres: ['65d4c3c4939ed0c691f4026b','65d4c3c4939ed0c691f4026c'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bf']
        },

        {
            name: "Spiderman",
            image: "https://i.ebayimg.com/images/g/FQUAAOSwt9JgOARA/s-l1600.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 121,
            rating: 7.3,
            genres: ['65d4c3c4939ed0c691f4026d','65d4c3c4939ed0c691f4026e'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bc']
        },


        {
            name: "Evil Dead Rise",
            image: "https://usmfreepress.org/wp-content/uploads/2023/05/images-2.jpeg", // Placeholder, replace with actual image paths
            durationInMinutes: 99,
            rating: 6.8,
            genres: ['65d4c3c4939ed0c691f4026b'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bf']
        },


        {
            name: "Creed",
            image: "https://m.media-amazon.com/images/M/MV5BNmZkYjQzY2QtNjdkNC00YjkzLTk5NjUtY2MyNDNiYTBhN2M2XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_FMjpg_UX1000_.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 133,
            rating: 7.6,
            genres: ['65d4c3c4939ed0c691f4026d','65d4c3c4939ed0c691f4026f'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bd']
        },

        {
            name: "Creed II",
            image: "https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg", // Placeholder, replace with actual image paths
            durationInMinutes: 130,
            rating: 7.1,
            genres: ['65d4c3c4939ed0c691f4026d','65d4c3c4939ed0c691f4026f'],
            streamingPlatforms: ['65d4c46caa2cc534f18bf7bd']
        },
    ]

    await Movie.insertMany(movies)
    console.log('Movies were inserted to database')
}

const run = async () => {
    await main()
    db.close()
}

run()