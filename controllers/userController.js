//delete user and its associated thoughts

//post to add a new friend to a users friend list
//delete to remove a friend from users friend list.

const { User } = require('../models');

//Get all users
module.exports = {
    async getUsers (req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Get single user
    async getUser (req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            if(!user) {
                return res.status(404).json({ message: "User not found with that ID." });
            }
            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Create new user
    async createUser (req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Update user
    async updateUser (req, res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { $set: req.body},
                {runValidators: true, new: true}
            );
            if(!user) {
                return res.status(404).json({ message: "No user found under that ID" });
            }
            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

//Delete user
 async deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({
            _id: req.params.userId,
        });

        if(!user) {
            return res.status(404).json({ message: "No user found under that ID" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}
}