import {Request,Response} from 'express';
import pool from '../database';

class PuestosController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en puestos'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO puestos SET ?', [req.body]);
        res.json({'message': 'Se ha creado el puesto'});
    }

    public async read(req:Request,res:Response){
        const puestos = await pool.query('SELECT * FROM puestos', [req.body]);
        res.json(puestos);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE puestos SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM puestos WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const puesto = await pool.query('SELECT * FROM puestos WHERE id=?', [req.params.id]);
        res.json(puesto);
    }
}
export const puestosController = new PuestosController;