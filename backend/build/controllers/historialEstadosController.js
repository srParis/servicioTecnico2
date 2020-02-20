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
class HistorialEstadosController {
    index(req, res) {
        res.json({ 'message': 'Estás en historial_estados' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO historial_estados SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado el historial_estado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const historialEstados = yield database_1.default.query('SELECT * FROM historial_estados', [req.body]);
            res.json(historialEstados);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE historial_estados SET ? WHERE id_historial =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM historial_estados WHERE id_historial=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const historialEstado = yield database_1.default.query('SELECT * FROM historial_estados WHERE id_historial =?', [req.params.id]);
            res.json(historialEstado);
        });
    }
}
exports.historialEstadosController = new HistorialEstadosController;
