"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcasController_1 = require("../controllers/marcasController");
class MarcasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', marcasController_1.marcasController.create);
        this.router.get('/', marcasController_1.marcasController.read);
        this.router.put('/:id', marcasController_1.marcasController.update);
        this.router.delete('/:id', marcasController_1.marcasController.delete);
        this.router.get('/:id', marcasController_1.marcasController.readone);
        this.router.post('/filter', marcasController_1.marcasController.filter);
        this.router.post('/leer', marcasController_1.marcasController.readonename);
    }
}
const marcasRoutes = new MarcasRoutes();
exports.default = marcasRoutes.router;
