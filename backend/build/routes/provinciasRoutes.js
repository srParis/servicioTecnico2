"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provinciasController_1 = require("../controllers/provinciasController");
class ProvinciasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', provinciasController_1.provinciasController.create);
        this.router.get('/', provinciasController_1.provinciasController.read);
        this.router.put('/:id', provinciasController_1.provinciasController.update);
        this.router.delete('/:id', provinciasController_1.provinciasController.delete);
        this.router.get('/:id', provinciasController_1.provinciasController.readone);
    }
}
const provinciasRoutes = new ProvinciasRoutes();
exports.default = provinciasRoutes.router;
