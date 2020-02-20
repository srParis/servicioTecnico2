"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class DireccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', direccionController.create);
        this.router.get('/', direccionController.read);
        this.router.put('/:id', direccionController.update);
        this.router.delete('/:id', direccionController.delete);
        this.router.get('/:id', direccionController.readone);
    }
}
const direccionRoutes = new DireccionRoutes();
exports.default = direccionRoutes.router;
