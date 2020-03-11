import { Request, Response } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MiClaveSecreta1234';
const bcrypt = require('bcryptjs');


class UsuariosController {
    index(req: Request, res: Response) {
        res.json({ 'message': 'Estás en usuarios' });
    }

    public async create(req: Request, res: Response) {
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
        await pool.query('INSERT INTO usuarios (nombre, email, password, direccion_id_direccion, NIF, tlf, rol) VALUES(?,?,?,?,?,?,?)',
                [user.nombre, user.email, hash, user.direccion, user.nif, user.tlf, user.rol]);
        res.json({ 'message': 'Se ha creado el usuario' });
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('select usuarios.*, direcciones.*, poblaciones.* from usuarios, direcciones, poblaciones, provincias where usuarios.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia', [req.body]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        await pool.query('UPDATE usuarios SET ? WHERE id_usuario=?', [req.params.id]);
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM usuarios WHERE id_usuario =?', [req.params.id]);
    }

    public async readone(req: Request, res: Response) {
        const usuario = await pool.query('SELECT * from usuarios, direcciones, poblaciones, provincias where usuarios.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia and id_usuario =?', [req.params.id]);
        res.json(usuario);
    }

    public async readlogin(req: Request, res: Response) {
        const copiaUsuario = {
            email: req.body.email,
            password: req.body.password
        };
        
        const usuario = await pool.query('SELECT * FROM usuarios where email = ?', [req.body.email]);
        console.log(usuario);
        console.log(usuario.length);


        if(usuario.length == 0){
            res.json({message: 'Error al loguearse'})
        }else{
            if(bcrypt.compareSync(copiaUsuario.password, usuario[0].password)){
                const expiresIn = 24*60*60;
                const accessToken = jwt.sign({ id: copiaUsuario.email},
                                                SECRET_KEY, {expiresIn: expiresIn});
                let usu: any;
                usu = {usuario, accessToken};

                res.json(usu);
                console.log(usu);
            }
            else{
                res.json({message: 'Error al loguearse'})
            }
        }
    }


    public async readloginGoogle(req: Request, res: Response) {
      
             const email= req.body.email;
       
        
        const usuario = await pool.query('SELECT * FROM usuarios where email = ?', [email]);
       
        console.log(usuario.length);


        if(usuario.length == 0){
            res.json({message: 'Error al loguearse'})
        }else{
            const expiresIn = 24*60*60;
            const accessToken = jwt.sign({ id: usuario.email},
                                            SECRET_KEY, {expiresIn: expiresIn});
            let usu: any;
            usu = {usuario, accessToken};

            res.json(usu);
            console.log(usu);
        }
    }

    public async filter(req:Request, res:Response){
        const usuario = await pool.query("select * from modelos where modelos.nombre like '%?%", [req.body.nombre]);
        res.json(usuario);
    }
}
export const usuariosController = new UsuariosController;
