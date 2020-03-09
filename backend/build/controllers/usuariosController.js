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
const bcrypt = require('bcryptjs');
class UsuariosController {
    index(req, res) {
        res.json({ 'message': 'Estás en usuarios' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                nombre: req.body.nombre,
                email: req.body.email,
                password: req.body.password1,
                direccion: req.body.direccion,
                nif: req.body.dni,
                tlf: req.body.tlf,
                rol: req.body.rol
            };
            console.log(user);
            const hash = bcrypt.hashSync(user.password, 10);
            yield database_1.default.query('INSERT INTO usuarios (nombre, email, password, direccion_id_direccion, NIF, tlf, rol) VALUES(?,?,?,?,?,?,?)', [user.nombre, user.email, hash, user.direccion, user.nif, user.tlf, user.rol]);
            res.json({ 'message': 'Se ha creado el usuario' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios', [req.body]);
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
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE id_usuario =?', [req.params.id]);
            res.json(usuario);
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            // const hash = bcrypt.hashSync(copiaUsuario.password, 10);
            // console.log(hash);
            const usuario = yield database_1.default.query('SELECT * FROM usuarios where email = ?', [req.body.email]);
            console.log(usuario);
            console.log(usuario.length);
            if (usuario.length == 0) {
                res.json({ message: 'Error al loguearse' });
            }
            else {
                if (bcrypt.compareSync(copiaUsuario.password, usuario[0].password)) {
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiresIn });
                    let usu;
                    usu = { usuario, accessToken };
                    res.json(usu);
                    console.log(usu);
                }
                else {
                    res.json({ message: 'Error al loguearse' });
                }
            }
        });
    }
}
exports.usuariosController = new UsuariosController;
