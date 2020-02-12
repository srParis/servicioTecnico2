import {Request,Response} from 'express';
import pool from '../database';

class TipoEstadoController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en tipoEstado'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO tipos_estado SET ?', [req.body]);
        res.json({'message': 'Se ha creado el estado'});
    }

    public async read(req:Request,res:Response){
        const tipoEstado = await pool.query('SELECT * FROM tipos_estado', [req.body]);
        res.json(tipoEstado);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE tipos_estado SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM tipos_estado WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const estado = await pool.query('SELECT * FROM tipos_estado WHERE id=?', [req.params.id]);
        res.json(estado);
    }
}
export const tipoEstadoController = new TipoEstadoController;