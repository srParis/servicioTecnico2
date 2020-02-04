"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trabajadoresController_1 = require("../controllers/trabajadoresController");
class TrabajadoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', trabajadoresController_1.trabajadoresController.create);
        this.router.get('/', trabajadoresController_1.trabajadoresController.read);
        this.router.put('/:id', trabajadoresController_1.trabajadoresController.update);
        this.router.delete('/:id', trabajadoresController_1.trabajadoresController.delete);
        this.router.get('/:id', trabajadoresController_1.trabajadoresController.readone);
    }
}
const trabajadoresRoutes = new TrabajadoresRoutes();
exports.default = trabajadoresRoutes.router;
