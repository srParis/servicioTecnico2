import {Request,Response} from 'express';
import pool from '../database';

class MarcasController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en marcas'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO marcas SET ?', [req.body]);
        res.json({'message': 'Se ha creado la marca'});
    }

    public async read(req:Request,res:Response){
        const marcas = await pool.query('SELECT * FROM marcas', [req.body]);
        res.json(marcas);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE marcas SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM marcas WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const marca = await pool.query('SELECT * FROM marcas WHERE id=?', [req.params.id]);
        res.json(marca);
    }
}
export const marcasController = new MarcasController;