"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoReparacionController_1 = require("../controllers/tipoReparacionController");
class TipoReparacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', tipoReparacionController_1.tipoReparacionController.create);
        this.router.get('/', tipoReparacionController_1.tipoReparacionController.read);
        this.router.put('/:id', tipoReparacionController_1.tipoReparacionController.update);
        this.router.delete('/:id', tipoReparacionController_1.tipoReparacionController.delete);
        this.router.get('/:id', tipoReparacionController_1.tipoReparacionController.readone);
        this.router.post('/filter', tipoReparacionController_1.tipoReparacionController.filter);
        this.router.post('/leer', tipoReparacionController_1.tipoReparacionController.readonename);
    }
}
const tipoReparacionRoutes = new TipoReparacionRoutes();
exports.default = tipoReparacionRoutes.router;
