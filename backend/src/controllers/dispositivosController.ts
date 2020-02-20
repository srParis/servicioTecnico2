import {Request,Response} from 'express';
import pool from '../database';

class DispositivosController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en dispositivos'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO dispositivos SET ?', [req.body]);
        res.json({'message': 'Se ha creado el dispositivo'});
    }

    public async read(req:Request,res:Response){
        const dispositivos = await pool.query('SELECT * FROM dispositivos', [req.body]);
        res.json(dispositivos);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE dispositivos SET ? WHERE id_dispositivos =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM dispositivos WHERE id_dispositivos =?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const dispositivo = await pool.query('SELECT * FROM dispositivos WHERE id_dispositivo=?', [req.params.id]);
        res.json(dispositivo);
    }
}
export const dispositivosController = new DispositivosController;