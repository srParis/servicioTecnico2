"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dispositivosController_1 = require("../controllers/dispositivosController");
class DispositivosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', dispositivosController_1.dispositivosController.create);
        this.router.get('/', dispositivosController_1.dispositivosController.read);
        this.router.put('/:id', dispositivosController_1.dispositivosController.update);
        this.router.delete('/:id', dispositivosController_1.dispositivosController.delete);
        this.router.get('/:id', dispositivosController_1.dispositivosController.readone);
    }
}
const dispositivosRoutes = new DispositivosRoutes();
exports.default = dispositivosRoutes.router;
