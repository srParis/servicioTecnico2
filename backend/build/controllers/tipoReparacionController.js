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
class TipoReparacionController {
    index(req, res) {
        res.json({ 'message': 'Estás en tipos_reparacion' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tipos_reparacion SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado la reparacion' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipo_reparacion = yield database_1.default.query('SELECT * FROM tipos_reparacion', [req.body]);
            res.json(tipo_reparacion);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE tipos_reparacion SET ? WHERE id_reparacion =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM tipos_reparacion WHERE id_reparacion=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoReparacion = yield database_1.default.query('SELECT * FROM tipos_reparacion WHERE id_reparacion=?', [req.params.id]);
            res.json(tipoReparacion);
        });
    }
    filter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const rep = req.body.nombre;
            const rep2 = '%' + rep + '%';
            const tipoReparacion = yield database_1.default.query("SELECT * FROM tipos_reparacion WHERE tipos_reparacion.nombre LIKE ? ", [rep2]);
            res.json(tipoReparacion);
        });
    }
}
exports.tipoReparacionController = new TipoReparacionController;
