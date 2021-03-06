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
class DireccionesController {
    index(req, res) {
        res.json({ 'message': 'Estás en direcciones' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dirUser = {
                direccion: req.body.nombre_dir,
                numDir: req.body.numero,
                piso: req.body.piso,
                numPiso: req.body.numeroPiso,
                poblacion: req.body.poblacion
            };
            const insert = yield database_1.default.query('INSERT INTO direcciones (nombre_calle, numero, piso, numero_piso, Poblaciones_id_poblacion) VALUES (?,?,?,?,?)', [dirUser.direccion, dirUser.numDir, dirUser.piso, dirUser.numPiso, dirUser.poblacion]);
            res.json({ 'message': 'Se ha creado la direccion', 'idInsert': insert.insertId });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const direcciones = yield database_1.default.query('SELECT * FROM direcciones', [req.body]);
            res.json(direcciones);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE direcciones SET ? WHERE id_direccion =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM direcciones WHERE id_direccion =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const direccion = yield database_1.default.query('SELECT * FROM direcciones WHERE id_direccion = ?', [req.params.id]);
            res.json(direccion);
        });
    }
}
exports.direccionesController = new DireccionesController;
