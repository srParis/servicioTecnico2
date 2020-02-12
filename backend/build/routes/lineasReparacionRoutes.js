"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineasReparacionController_1 = require("../controllers/lineasReparacionController");
class LineasReparacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', lineasReparacionController_1.lineasReparacionController.create);
        this.router.get('/', lineasReparacionController_1.lineasReparacionController.read);
        this.router.put('/:id', lineasReparacionController_1.lineasReparacionController.update);
        this.router.delete('/:id', lineasReparacionController_1.lineasReparacionController.delete);
        this.router.get('/:id', lineasReparacionController_1.lineasReparacionController.readone);
    }
}
const lineasReparacionRoutes = new LineasReparacionRoutes();
exports.default = lineasReparacionRoutes.router;
