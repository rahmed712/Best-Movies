const container=document.querySelector(".container")
const listing=document.querySelector(".jar")
const images=document.querySelectorAll(".posters")
let movies 
const moviec=document.querySelector("#moviec")
const title=document.querySelector(".movie-title")
const rating=document.querySelector(".rating")
const duration=document.querySelector(".duration")
const genre=document.querySelector(".genre")
const streamingPlatform=document.querySelector(".streamingplatform")

const getMovies = async ()=>{
    const response = await axios.get("http://localhost:3001/movies")
    movies=response.data
}
const gettingMovies = async()=>{

    await getMovies()
    
  
    for(let i=0;i<movies.length;i++){
        const img=document.createElement("img")
        img.src=movies[i].image
        img.id=movies[i]._id
        img.class="posters"
        listing.appendChild(img)
        img.addEventListener("click",async()=>{
            const movieInfo=await axios.get(`http://localhost:3001/movies/${img.id}`)
            const titleValue=document.createElement("p")
            titleValue.innerHTML=movieInfo.data.name
            title.after(titleValue)
            const ratingInfo=document.createElement("p")
            ratingInfo.innerHTML=movieInfo.data.rating
            rating.after(ratingInfo)
            const durationInfo=document.createElement("p")
            durationInfo.innerHTML=movieInfo.data.durationInMinutes
            duration.after(durationInfo)
    
            moviec.src=movieInfo.data.image
            for(let n=0;n<movieInfo.data.genres.length;n++){
                const genreInfo=document.createElement("p")
                genreInfo.innerHTML=movieInfo.data.genres[n].name
                genre.after(genreInfo)
            }
            for(let n=0;n<movieInfo.data.streamingPlatforms.length;n++){
                const streamingPlatformsInfo=document.createElement("p")
                streamingPlatformsInfo.innerHTML=movieInfo.data.streamingPlatforms[n].name
                streamingPlatform.after(streamingPlatformsInfo)
            }
        })
    }
}
gettingMovies()
// for(let i=0;i<images.length;i++){
//     console.log(images[i].id)
//     images.addEventListener("click",async()=>{
//         const id=images[i].id
//         console.log(id)
//         const response = await axios.get(`http://localhost:3001/movies/${id}`)
//         console.log(response)
//     })
// }







//getting movies displayed on the website



//"hello Abe"

//1. How to find an HTML object in the DOM using Javascript.
//2. How to write HTML code inside of a DIV inside of the DOM using Javascript.
//3. How do you interpolate data into strings in Javascript.
//4. In order to make HTML elements and insert them to the DOM.

