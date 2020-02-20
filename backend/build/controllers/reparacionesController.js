"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReparacionesController {
    index(req, res) {
        res.json({ 'message': 'Estás en reparaciones' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reparaciones SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado la reparacion' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reparaciones = yield database_1.default.query('SELECT * FROM reparaciones', [req.body]);
            res.json(reparaciones);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE reparaciones SET ? WHERE id_reparaciones =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM reparaciones WHERE id_reparaciones =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reparacion = yield database_1.default.query('SELECT * FROM reparaciones WHERE id_reparaciones =?', [req.params.id]);
            res.json(reparacion);
        });
    }
}
exports.reparacionesController = new ReparacionesController;
