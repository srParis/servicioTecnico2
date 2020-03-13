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
class ModelosController {
    index(req, res) {
        res.json({ 'message': 'Estás en modelos' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO modelos SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado el modelo' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelos = yield database_1.default.query('SELECT * FROM modelos', [req.body]);
            res.json(modelos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE modelos SET ? WHERE id_modelo =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM modelos WHERE id_modelo=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelo = yield database_1.default.query('SELECT * FROM modelos WHERE id_modelo=?', [req.params.id]);
            res.json(modelo);
        });
    }
    readonename(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newModelo = req.body.nombre;
            const modelo = yield database_1.default.query('SELECT * FROM modelos WHERE nombre = ?', [newModelo]);
            res.json(modelo);
        });
    }
    getMarca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelo = yield database_1.default.query('select * from modelos where id_marca = ?', [req.params.id]);
            res.json(modelo);
        });
    }
}
exports.modelosController = new ModelosController;
