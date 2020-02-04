"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reparacionesController_1 = require("../controllers/reparacionesController");
class ReparacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', reparacionesController_1.reparacionesController.create);
        this.router.get('/', reparacionesController_1.reparacionesController.read);
        this.router.put('/:id', reparacionesController_1.reparacionesController.update);
        this.router.delete('/:id', reparacionesController_1.reparacionesController.delete);
        this.router.get('/:id', reparacionesController_1.reparacionesController.readone);
    }
}
const reparacionesRoutes = new ReparacionesRoutes();
exports.default = reparacionesRoutes.router;
