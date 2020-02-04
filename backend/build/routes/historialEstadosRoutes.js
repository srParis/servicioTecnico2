"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historialEstadosController_1 = require("../controllers/historialEstadosController");
class HistorialEstadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', historialEstadosController_1.historialEstadosController.create);
        this.router.get('/', historialEstadosController_1.historialEstadosController.read);
        this.router.put('/:id', historialEstadosController_1.historialEstadosController.update);
        this.router.delete('/:id', historialEstadosController_1.historialEstadosController.delete);
        this.router.get('/:id', historialEstadosController_1.historialEstadosController.readone);
    }
}
const historialEstadosRoutes = new HistorialEstadosRoutes();
exports.default = historialEstadosRoutes.router;
