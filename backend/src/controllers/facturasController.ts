import {Request,Response} from 'express';
import pool from '../database';

class FacturasController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en facturas'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO facturas SET ?', [req.body]);
        res.json({'message': 'Se ha creado la factura'});
    }

    public async read(req:Request,res:Response){
        const facturas = await pool.query('SELECT * FROM facturas', [req.body]);
        res.json(facturas);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE facturas SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM facturas WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const factura = await pool.query('SELECT * FROM facturas WHERE id=?', [req.params.id]);
        res.json(factura);
    }
}
export const facturasController = new FacturasController;