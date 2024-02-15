const { Thought } = require('../models');

//Get all thoughts
module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            return res.status(200).json(thoughts);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Get single thought
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
        
            if(!thought) {
                return res.status(404).json({ message: "Thought not found with this ID." });
            }
            return res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Create thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValudators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: "No thought found with this ID." });
            }
            return res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({
                _id: req.params.thoughtId,
            });

            if(!thought) {
                return res.status(404).json({ message: "No thought found with this ID." });
            }
            return res.status(200).json({ message: "Thought deleted successfully." });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
}