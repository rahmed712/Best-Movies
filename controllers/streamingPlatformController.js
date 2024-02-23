const {StreamingPlatform} = require('../models');


const getAllStreamingPlatforms = async (req, res) => {
    try {
        const streamingPlatforms = await StreamingPlatform.find()
        res.json(streamingPlatforms)
       
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getStreamingPlatformById = async (req, res) => {
    try {
        const { id } = req.params;
        const streamingPlatform = await StreamingPlatform.findById(id)
        if (streamingPlatform) {
            return res.json(streamingPlatform);
        }
        return res.status(404).send('StreamingPlatform with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const createStreamingPlatform = async (req, res) => {
    try {
        const streamingPlatform = await new StreamingPlatform(req.body)
        await streamingPlatform.save()
        return res.status(201).json({
            streamingPlatform,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateStreamingPlatform = async (req, res) => {
    try {
        let { id } = req.params;
        let streamingPlatform = await StreamingPlatform.findByIdAndUpdate(id, req.body, { new: true })
        if (streamingPlatform) {
            return res.status(200).json(streamingPlatform)
        }
        throw new Error("StreamingPlatform not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteStreamingPlatform = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await StreamingPlatform.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("StreamingPlatform deleted");
        }
        throw new Error("StreamingPlatform not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createStreamingPlatform,
    getAllStreamingPlatforms,
    getStreamingPlatformById,
    updateStreamingPlatform,
    deleteStreamingPlatform
}