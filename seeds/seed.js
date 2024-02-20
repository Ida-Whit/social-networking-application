const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
    {
        username: "Janet" ,
        email: "janet@gmail.com",
        thought: []
    },
    {
        username: "Bily" ,
        email: "billy@gmail.com",
        thought: []
    },
    {
        username: "Susan" ,
        email: "susan@gmail.com",
        thought: []
    },
];

connection.once('open', async () => {
    console.log('Connected');

    await User.deleteMany({});

    await User.collection.insertMany(users);
    
    console.info("Seeding complete!");
    process.exit(0);
})