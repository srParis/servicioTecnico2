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
class LineasFacturaController {
    index(req, res) {
        res.json({ 'message': 'Estás en lineasFactura' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO lineas_factura SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado la linea_factura' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lineasFactura = yield database_1.default.query('SELECT * FROM lineas_factura', [req.body]);
            res.json(lineasFactura);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE lineas_factura SET ? WHERE id_lineas_factura=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM lineas_factura WHERE id_lineas_factura =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lineaFactura = yield database_1.default.query('SELECT * FROM lineas_factura WHERE id_lineas_factura =?', [req.params.id]);
            res.json(lineaFactura);
        });
    }
}
exports.lineasFacturaController = new LineasFacturaController;
