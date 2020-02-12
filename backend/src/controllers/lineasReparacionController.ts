import {Request,Response} from 'express';
import pool from '../database';

class LineasReparacionController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en lineas Reparacion'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO lineas_reparacion SET ?', [req.body]);
        res.json({'message': 'Se ha creado la linea_reparacion'});
    }

    public async read(req:Request,res:Response){
        const lineasreparacion = await pool.query('SELECT * FROM lineas_reparacion', [req.body]);
        res.json(lineasreparacion);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE lineas_reparacion SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM lineas_Reparacion WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const lineaReparacion = await pool.query('SELECT * FROM lineas_Reparacion WHERE id=?', [req.params.id]);
        res.json(lineaReparacion);
    }
}
export const lineasReparacionController = new LineasReparacionController;