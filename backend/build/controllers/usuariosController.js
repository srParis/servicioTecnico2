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
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MiClaveSecreta1234';
class UsuariosController {
    index(req, res) {
        res.json({ 'message': 'Estás en usuarios' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                nombre: req.body.nombre,
                email: req.body.email,
                password: req.body.password,
                direccion: req.body.direccion,
                nif: req.body.nif,
                tlf: req.body.tlf,
                rol: req.body.rol
            };
            yield database_1.default.query('INSERT INTO usuarios (nombre, email, password, direccion_id_direccion, NIF, tlf, rol) VALUES(?,?,?,?,?,?,?))', [user.nombre, user.email, user.password, user.direccion, user.nif, user.tlf, user.rol]);
            res.json({ 'message': 'Se ha creado el usuario' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('select usuarios.*, direcciones.*, poblaciones.* from usuarios, direcciones, poblaciones, provincias where usuarios.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia', [req.body]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE usuarios SET ? WHERE id_usuario=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM usuarios WHERE id_usuario =?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * from usuarios, direcciones, poblaciones, provincias where usuarios.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia and id_usuario =?', [req.params.id]);
            res.json(usuario);
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            const usuario = yield database_1.default.query('SELECT * FROM usuarios where email = ? and password = ?', [req.body.email, req.body.password]);
            console.log(usuario);
            console.log(usuario.length);
            if (usuario.length == 0) {
                res.json({ message: 'Error al loguearse' });
            }
            else {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiresIn });
                let usu;
                usu = { usuario, accessToken };
                res.json(usu);
                console.log(usu);
            }
        });
    }
    filter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query("select * from modelos where modelos.nombre like '%?%", [req.body.nombre]);
            res.json(usuario);
        });
    }
}
exports.usuariosController = new UsuariosController;
