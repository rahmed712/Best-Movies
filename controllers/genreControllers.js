const {Genre} = require('../models');


const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.json(genres)
       
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGenreById = async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await Genre.findById(id)
        if (genre) {
            return res.json(genre);
        }
        return res.status(404).send('Genre with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const createGenre = async (req, res) => {
    try {
        const genre = await new Genre(req.body)
        await genre.save()
        return res.status(201).json({
            genre,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateGenre = async (req, res) => {
    try {
        let { id } = req.params;
        let genre = await Genre.findByIdAndUpdate(id, req.body, { new: true })
        if (genre) {
            return res.status(200).json(genre)
        }
        throw new Error("Genre not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Genre.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Genre deleted");
        }
        throw new Error("Genre not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    deleteGenre
}