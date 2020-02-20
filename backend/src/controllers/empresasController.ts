import {Request,Response} from 'express';
import pool from '../database';

class EmpresasController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en empresas'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO empresas SET ?', [req.body]);
        res.json({'message': 'Se ha creado la empresa'});
    }

    public async read(req:Request,res:Response){
        const empresas = await pool.query('SELECT * FROM empresas', [req.body]);
        res.json(empresas);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE empresas SET ? WHERE id_empresa=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM empresas WHERE id_empresa=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const empresa = await pool.query('SELECT * FROM empresas WHERE id_empresa=?', [req.params.id]);
        res.json(empresa);
    }
}
export const empresasController = new EmpresasController;