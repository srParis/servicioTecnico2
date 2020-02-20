import {Request,Response} from 'express';
import pool from '../database';

class DireccionesController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en direcciones'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO direcciones SET ?', [req.body]);
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
}
export const direccionesController = new DireccionesController;