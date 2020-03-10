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
        const trabajadores = await pool.query('select * from trabajadores, direcciones, poblaciones, provincias where trabajadores.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia', [req.body]);
        res.json(trabajadores);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE trabajadores SET ? WHERE id_trabajador =?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM trabajadores WHERE id_trabajador =?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const trabajador = await pool.query('select * from trabajadores, direcciones, poblaciones, provincias where trabajadores.direccion_id_direccion = direcciones.id_direccion and direcciones.Poblaciones_id_poblacion = poblaciones.id_poblacion and poblaciones.id_provincia = provincias.id_provincia and  id_trabajador =?', [req.params.id]);
        res.json(trabajador);
    }
    public async filter(req:Request, res:Response){
        const trabajador = await pool.query('');
        res.json(trabajador);
    }
}
export const trabajadoresController = new TrabajadoresController;