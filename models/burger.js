// require orm object
const orm = require("../config/orm");


// set up burger object using orm methods specific to burger object. sets up methods to interact wth the database

let burger = {

    // select all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // insert new burger into burgers table
    insertOne: function (burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, cb, function (res) {
            cb(res);
        });
    },
    
    // update devoured column to eaten -> default (false) to true
    updateDevoured: function (eatenBoolean, burgerID, cb) {
        orm.updateOne("burgers", "devoured", eatenBoolean, "id", burgerID, cb, function (res) {
            cb(res);
        });
    },

    // update stars rating
    updateRating: function (ratingNum, burgerID, cb) {
        orm.updateOne("burgers", "rating", ratingNum, "id", burgerID, cb, function(res){
            cb(res);
        });
    },

    // delete burger
    deleteOne: function (id, cb) {
        orm.deleteOne("burgers", "id", id, function (res) {
            cb(res);
        });
    }
};

// export burger object and methods
module.exports = burger;