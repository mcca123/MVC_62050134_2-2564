// model -> handle data-related logic
const fs = require("fs");
const path = require("path");

// global path
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "users.json"
);

// utility function
// readFile -> callback
const getUsersFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class User {
    constructor(
        user_sort,
        user_command,
        user_register,
        user_memory,
        user_first_binary,
        user_last_binary

    ) {
        this.user_sort = user_sort;
        this.user_command = user_command;
        this.user_register = user_register;
        this.user_memory = user_memory;
        this.user_first_binary = user_first_binary;
        this.user_last_binary = user_last_binary;
    }

    save() {
        getUsersFromFile(user => {
            // if id is already exist -> update user
            // *define but not used (no update data api)
            if (this.user_sort) {
                const existingUser = user.findIndex(
                    prod => prod.user_sort === this.user_sort
                )
                console.log(existingUser)
                const updateusers = [...user];
                updateusers[existingUser] = this;
                fs.writeFile(p, JSON.stringify(updateusers), (err) => {
                    console.log(err);
                });
            } else {
                // if id is null / not exist -> generate one

                if (this.user_command == 'Load') {
                    this.user_sort = 1;
                    this.user_first_binary = '00';
                    this.user_last_binary = '00';
                } else if (this.user_command == 'Store') {
                    this.user_sort = 2;
                    this.user_first_binary = '01';
                    this.user_last_binary = '00';
                } else if (this.user_command == 'Add Register') {
                    this.user_sort = 3;
                    this.user_first_binary = '10';
                    this.user_last_binary = '0000000';
                } else if (this.user_command == 'Add Immediate') {
                    this.user_sort = 4;
                    this.user_first_binary = '11';
                    this.user_last_binary = '';
                }
                user.push(this);
                fs.writeFile(p, JSON.stringify(user), (err) => {
                    console.log(err);
                });
            }
        });
    }

    static fetchAll(cb) {
        getUsersFromFile(cb);
    }

};