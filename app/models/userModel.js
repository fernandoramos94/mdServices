'user strict';
var sql = require('../../db.js');

//Users object constructor
var Users = function (task) {
    this.cedula = task.cedula;
    this.password = task.password;
};
Users.create = function createUser(newTask, result) {
    sql.query("INSERT INTO user set ?", newTask, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Users.updateById = function (id, task, result) {
    sql.query("UPDATE user SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Users.remove = function (id, result) {
    sql.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Users;