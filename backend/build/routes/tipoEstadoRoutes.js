"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoEstadoController_1 = require("../controllers/tipoEstadoController");
class TipoEstadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', tipoEstadoController_1.tipoEstadoController.create);
        this.router.get('/', tipoEstadoController_1.tipoEstadoController.read);
        this.router.put('/:id', tipoEstadoController_1.tipoEstadoController.update);
        this.router.delete('/:id', tipoEstadoController_1.tipoEstadoController.delete);
        this.router.get('/:id', tipoEstadoController_1.tipoEstadoController.readone);
    }
}
const tipoEstadoRoutes = new TipoEstadoRoutes();
exports.default = tipoEstadoRoutes.router;
