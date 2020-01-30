import {Request,Response} from 'express';
import pool from '../database';

class TrabajadoresController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en trabajadores'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO trabajadores SET ?', [req.body]);
        res.json({'message': 'Se ha creado el trabajador'});
    }

    public async read(req:Request,res:Response){
        const trabajadores = await pool.query('SELECT * FROM trabajadores', [req.body]);
        res.json(trabajadores);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE trabajadores SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM trabajadores WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const trabajador = await pool.query('SELECT * FROM trabajadores WHERE id=?', [req.params.id]);
        res.json(trabajador);
    }
}
export const trabajadoresController = new TrabajadoresController;