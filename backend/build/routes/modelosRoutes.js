"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelosController_1 = require("../controllers/modelosController");
class ModelosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', modelosController_1.modelosController.create);
        this.router.get('/', modelosController_1.modelosController.read);
        this.router.put('/:id', modelosController_1.modelosController.update);
        this.router.delete('/:id', modelosController_1.modelosController.delete);
        this.router.get('/:id', modelosController_1.modelosController.readone);
        this.router.get('/marca/:id', modelosController_1.modelosController.getMarca);
    }
}
const modelosRoutes = new ModelosRoutes();
exports.default = modelosRoutes.router;
