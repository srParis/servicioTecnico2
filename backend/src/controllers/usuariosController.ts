import { Request, Response } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MiClaveSecreta1234';


class UsuariosController {
    index(req: Request, res: Response) {
        res.json({ 'message': 'Estás en usuarios' });
    }

    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({ 'message': 'Se ha creado el usuario' });
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        await pool.query('UPDATE usuarios SET ? WHERE id_usuario=?', [req.params.id]);
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM usuarios WHERE id_usuario =?', [req.params.id]);
    }

    public async readone(req: Request, res: Response) {
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id_usuario =?', [req.params.id]);
        res.json(usuario);
    }

    public async readlogin(req: Request, res: Response) {

        const copiaUsuario = {
            email: req.body.email,
            password: req.body.password
        };
        const usuario = await pool.query('SELECT * FROM usuarios where email = ? and password = ?', [req.body.email, req.body.password]);
        console.log(usuario);
        console.log(usuario.length);


        if(usuario.length == 0){
            res.json({message: 'Error al loguearse'})
        }else{
            const expiresIn = 24*60*60;
            const accessToken = jwt.sign({ id: copiaUsuario.email},
                                            SECRET_KEY, {expiresIn: expiresIn});
            let usu: any;
            usu = {usuario, accessToken};

            res.json(usu);
            console.log(usu);
        }

        
    }
}
export const usuariosController = new UsuariosController;
