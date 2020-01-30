import {Router} from 'express';
import {historialEstadosController} from '../controllers/historialEstadosController';

class HistorialEstadosRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',historialEstadosController.create);
        this.router.get('/',historialEstadosController.read);
        this.router.put('/:id',historialEstadosController.update);
        this.router.delete('/:id',historialEstadosController.delete);
        this.router.get('/:id',historialEstadosController.readone);
    }
}
const historialEstadosRoutes = new HistorialEstadosRoutes();
export default historialEstadosRoutes.router;