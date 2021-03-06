"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', usuariosController_1.usuariosController.create);
        this.router.get('/', usuariosController_1.usuariosController.read);
        this.router.put('/:id', usuariosController_1.usuariosController.update);
        this.router.delete('/:id', usuariosController_1.usuariosController.delete);
        this.router.get('/:id', usuariosController_1.usuariosController.readone);
        this.router.post('/login', usuariosController_1.usuariosController.readlogin);
        this.router.post('/loginGF', usuariosController_1.usuariosController.readloginGoogle);
        this.router.post('/userEm', usuariosController_1.usuariosController.userEmail);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
