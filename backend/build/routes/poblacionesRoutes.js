"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const poblacionesController_1 = require("../controllers/poblacionesController");
class PoblacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', poblacionesController_1.poblacionesController.create);
        this.router.get('/', poblacionesController_1.poblacionesController.read);
        this.router.put('/:id', poblacionesController_1.poblacionesController.update);
        this.router.delete('/:id', poblacionesController_1.poblacionesController.delete);
        this.router.get('/:id', poblacionesController_1.poblacionesController.readone);
        this.router.get('/provincias/:id', poblacionesController_1.poblacionesController.readPobProvincias);
    }
}
const poblacionesRoutes = new PoblacionesRoutes();
exports.default = poblacionesRoutes.router;
