import {Request,Response} from 'express';
import pool from '../database';

class PoblacionesController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en poblaciones'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO poblaciones SET ?', [req.body]);
        res.json({'message': 'Se ha creado el poblacion'});
    }

    public async read(req:Request,res:Response){
        const poblaciones = await pool.query('SELECT * FROM poblaciones', [req.body]);
        res.json(poblaciones);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE poblaciones SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM poblaciones WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const poblacion = await pool.query('SELECT * FROM poblaciones WHERE id=?', [req.params.id]);
        res.json(poblacion);
    }
    public async readPobProvincias(req: Request, res:Response){
        console.log(req.params.id);
        const poblaciones = await pool.query('select poblaciones.* from poblaciones where poblaciones.id_provincia = ? ', [req.params.id]);
        res.json(poblaciones);

    }
}
export const poblacionesController = new PoblacionesController;