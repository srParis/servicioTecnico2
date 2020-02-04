"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineasFacturaController_1 = require("../controllers/lineasFacturaController");
class LineasFacturaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', lineasFacturaController_1.lineasFacturaController.create);
        this.router.get('/', lineasFacturaController_1.lineasFacturaController.read);
        this.router.put('/:id', lineasFacturaController_1.lineasFacturaController.update);
        this.router.delete('/:id', lineasFacturaController_1.lineasFacturaController.delete);
        this.router.get('/:id', lineasFacturaController_1.lineasFacturaController.readone);
    }
}
const lineasFacturaRoutes = new LineasFacturaRoutes();
exports.default = lineasFacturaRoutes.router;
