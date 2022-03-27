// communicate between front-end and back-end (act like interface)

const User = require("../models/user");

// getAllUsers -> GET
exports.getAllUsers = (req, res, next) => {
    const users = User.fetchAll((users) => {
        res.send(users);
    });
};

// addUser -> POST
exports.addUser = (req, res, next) => {
    const user_command = req.body.user_command;
    const user_register = req.body.user_register;
    const user_memory = req.body.user_memory;
    // form model
    const user = new User(
        null, // assign this later for sort by command
        user_command,
        user_register,
        user_memory,
    );
    user.save();
    res.sendStatus(200);
};