"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestosController_1 = require("../controllers/puestosController");
class PuestosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', puestosController_1.puestosController.create);
        this.router.get('/', puestosController_1.puestosController.read);
        this.router.put('/:id', puestosController_1.puestosController.update);
        this.router.delete('/:id', puestosController_1.puestosController.delete);
        this.router.get('/:id', puestosController_1.puestosController.readone);
    }
}
const puestosRoutes = new PuestosRoutes();
exports.default = puestosRoutes.router;
