import {Request,Response} from 'express';
import pool from '../database';

class ModelosController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en modelos'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO modelos SET ?', [req.body]);
        res.json({'message': 'Se ha creado el modelo'});
    }

    public async read(req:Request,res:Response){
        const modelos = await pool.query('SELECT * FROM modelos', [req.body]);
        res.json(modelos);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE modelos SET ? WHERE id_modelo =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM modelos WHERE id_modelo=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const modelo = await pool.query('SELECT * FROM modelos WHERE id_modelo=?', [req.params.id]);
        res.json(modelo);
    }
    public async getMarca(req:Request, res:Response){
        const modelo = await pool.query('select * from modelos where id_marca = ?', [req.params.id]);
        res.json(modelo);
    }
}
export const modelosController = new ModelosController;