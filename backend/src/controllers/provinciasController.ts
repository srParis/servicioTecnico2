import {Request,Response} from 'express';
import pool from '../database';

class ProvinciasController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en provincias'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO provincias SET ?', [req.body]);
        res.json({'message': 'Se ha creado la provincia'});
    }

    public async read(req:Request,res:Response){
        const provincias = await pool.query('SELECT * FROM provincias', [req.body]);
        res.json(provincias);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE provincias SET ? WHERE id_provincia=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM provincias WHERE id_provincia =?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const provincia = await pool.query('SELECT * FROM provincias WHERE id_provincia=?', [req.params.id]);
        res.json(provincia);
    }

}
export const provinciasController = new ProvinciasController;