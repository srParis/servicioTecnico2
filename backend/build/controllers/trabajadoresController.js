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
class TrabajadoresController {
    index(req, res) {
        res.json({ 'message': 'Estás en trabajadores' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO trabajadores SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado el trabajador' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trabajadores = yield database_1.default.query('select * from trabajadores, direcciones, poblaciones, provincias where trabajadores.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia', [req.body]);
            res.json(trabajadores);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE trabajadores SET ? WHERE id_trabajador =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM trabajadores WHERE id_trabajador =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trabajador = yield database_1.default.query('select * from trabajadores, direcciones, poblaciones, provincias where trabajadores.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia and  id_trabajador =?', [req.params.id]);
            res.json(trabajador);
        });
    }
    filter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trabajador = yield database_1.default.query('');
            res.json(trabajador);
        });
    }
}
exports.trabajadoresController = new TrabajadoresController;
