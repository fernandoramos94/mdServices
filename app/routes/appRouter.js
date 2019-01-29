'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/appController.js');
    var login = require('../controllers/loginController.js');
    var usuarios = require('../controllers/userController.js');
    var puntos = require('../controllers/puntosController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};