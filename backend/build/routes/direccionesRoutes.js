"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccionesController_1 = require("../controllers/direccionesController");
class DireccionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', direccionesController_1.direccionesController.create);
        this.router.get('/', direccionesController_1.direccionesController.read);
        this.router.put('/:id', direccionesController_1.direccionesController.update);
        this.router.delete('/:id', direccionesController_1.direccionesController.delete);
        this.router.get('/:id', direccionesController_1.direccionesController.readone);
        this.router.post('/dir1/', direccionesController_1.direccionesController.readoneByNom);
    }
}
const direccionesRoutes = new DireccionesRoutes();
exports.default = direccionesRoutes.router;
