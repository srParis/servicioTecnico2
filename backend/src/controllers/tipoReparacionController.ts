import {Request,Response} from 'express';
import pool from '../database';

class TipoReparacionController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en tipoReparacion'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO tipo_reparacion SET ?', [req.body]);
        res.json({'message': 'Se ha creado el usuario'});
    }

    public async read(req:Request,res:Response){
        const tipo_reparacion = await pool.query('SELECT * FROM tipo_reparacion', [req.body]);
        res.json(tipo_reparacion);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE tipo_reparacion SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM tipo_reparacion WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const tipoReparacion = await pool.query('SELECT * FROM tipo_reparacion WHERE id=?', [req.params.id]);
        res.json(tipoReparacion);
    }
}
export const tipoReparacionController = new TipoReparacionController;