import {Request,Response} from 'express';
import pool from '../database';

class LineasFacturaController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en lineasFactura'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO lineas_factura SET ?', [req.body]);
        res.json({'message': 'Se ha creado la linea_factura'});
    }

    public async read(req:Request,res:Response){
        const lineasFactura = await pool.query('SELECT * FROM lineas_factura', [req.body]);
        res.json(lineasFactura);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE lineas_factura SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM lineas_factura WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const lineaFactura = await pool.query('SELECT * FROM lineas_factura WHERE id=?', [req.params.id]);
        res.json(lineaFactura);
    }
}
export const lineasFacturaController = new LineasFacturaController;