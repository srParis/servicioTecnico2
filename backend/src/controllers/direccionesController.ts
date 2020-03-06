import {Request,Response} from 'express';
import pool from '../database';

class DireccionesController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en direcciones'});
    }

    public async create(req:Request,res:Response){
        const dirUser = {
            direccion: req.body.nombre_dir,
            numDir: req.body.numero,
            piso: req.body.piso,
            numPiso: req.body.numeroPiso,
            poblacion: req.body.poblacion
        };
        await pool.query('INSERT INTO direcciones (nombre_calle, numero, piso, numero_piso, Poblaciones_id_poblacion) VALUES (?,?,?,?,?)',
                [dirUser.direccion, dirUser.numDir, dirUser.piso, dirUser.numPiso, dirUser.poblacion]);
        res.json({'message': 'Se ha creado la direccion'});
    }

    public async read(req:Request,res:Response){
        const direcciones = await pool.query('SELECT * FROM direcciones', [req.body]);
        res.json(direcciones);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE direcciones SET ? WHERE id_direccion =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM direcciones WHERE id_direccion =?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const direccion = await pool.query('SELECT * FROM direcciones WHERE id_direccion = ?', [req.params.id]);
        res.json(direccion);
    }

    public async readoneByNom(req:Request,res:Response){
        const direccion = await pool.query('SELECT * FROM direcciones WHERE nombre_calle = ? AND Poblaciones_id_poblacion = ?', [req.body.nombre_dir, req.body.poblacion]);
        res.json(direccion);
    }
}
export const direccionesController = new DireccionesController;