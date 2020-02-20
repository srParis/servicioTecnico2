import {Request,Response} from 'express';
import pool from '../database';

class ReparacionesController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en reparaciones'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO reparaciones SET ?', [req.body]);
        res.json({'message': 'Se ha creado la reparacion'});
    }

    public async read(req:Request,res:Response){
        const reparaciones = await pool.query('SELECT * FROM reparaciones', [req.body]);
        res.json(reparaciones);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE reparaciones SET ? WHERE id_reparaciones =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM reparaciones WHERE id_reparaciones =?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const reparacion = await pool.query('SELECT * FROM reparaciones WHERE id_reparaciones =?', [req.params.id]);
        res.json(reparacion);
    }
}
export const reparacionesController = new ReparacionesController;