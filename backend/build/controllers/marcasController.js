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
class MarcasController {
    index(req, res) {
        res.json({ 'message': 'Estás en marcas' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO marcas SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado la marca' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marcas = yield database_1.default.query('SELECT * FROM marcas', [req.body]);
            res.json(marcas);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE marcas SET ? WHERE id_marca =?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM marcas WHERE id_marca =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marca = yield database_1.default.query('SELECT * FROM marcas WHERE id_marca =?', [req.params.id]);
            res.json(marca);
        });
    }
    readonename(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marca = yield database_1.default.query('SELECT * FROM marcas WHERE nombre = ?', [req.body.nombre]);
            res.json(marca);
        });
    }
    filter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const marc = req.body.marca;
            const marc2 = '%' + marc + '%';
            const marca2 = yield database_1.default.query('SELECT * FROM marcas WHERE marcas.nombre LIKE ? ', [marc2]);
            res.json(marca2);
        });
    }
}
exports.marcasController = new MarcasController;
