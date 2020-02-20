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
class ProvinciasController {
    index(req, res) {
        res.json({ 'message': 'Estás en provincias' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO provincias SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado la provincia' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincias = yield database_1.default.query('SELECT * FROM provincias', [req.body]);
            res.json(provincias);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE provincias SET ? WHERE id_provincia=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM provincias WHERE id_provincia =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincia = yield database_1.default.query('SELECT * FROM provincias WHERE id_provincia=?', [req.params.id]);
            res.json(provincia);
        });
    }
}
exports.provinciasController = new ProvinciasController;
