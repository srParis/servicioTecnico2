import {Request,Response} from 'express';
import pool from '../database';

class TipoReparacionController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en tipos_reparacion'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO tipos_reparacion SET ?', [req.body]);
        res.json({'message': 'Se ha creado el usuario'});
    }

    public async read(req:Request,res:Response){
        const tipo_reparacion = await pool.query('SELECT * FROM tipos_reparacion', [req.body]);
        res.json(tipo_reparacion);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE tipos_reparacion SET ? WHERE id_reparacion =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM tipos_reparacion WHERE id_reparacion=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const tipoReparacion = await pool.query('SELECT * FROM tipos_reparacion WHERE id_reparacion=?', [req.params.id]);
        res.json(tipoReparacion);
    }
    public async filter (req:Request, res:Response){
        console.log(req.body);
        
        const rep = req.body.nombre;
        const rep2 = '%'+ rep+'%';
        const tipoReparacion = await pool.query("SELECT * FROM tipos_reparacion WHERE tipos_reparacion.nombre LIKE ? ",[ rep2]);
        res.json(tipoReparacion);
    }
}
export const tipoReparacionController = new TipoReparacionController;