import {Request,Response} from 'express';
import pool from '../database';

class HistorialEstadosController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en historial_estados'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO historial_estados SET ?', [req.body]);
        res.json({'message': 'Se ha creado el historial_estado'});
    }

    public async read(req:Request,res:Response){
        const historialEstados = await pool.query('SELECT * FROM historial_estados', [req.body]);
        res.json(historialEstados);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE historial_estados SET ? WHERE id_historial =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM historial_estados WHERE id_historial=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const historialEstado = await pool.query('SELECT * FROM historial_estados WHERE id_historial =?', [req.params.id]);
        res.json(historialEstado);
    }
}
export const historialEstadosController = new HistorialEstadosController;