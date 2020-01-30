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
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
