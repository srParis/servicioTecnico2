import {Router} from 'express';
import {tipoReparacionController} from '../controllers/tipoReparacionController';

class TipoReparacionRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',tipoReparacionController.create);
        this.router.get('/',tipoReparacionController.read);
        this.router.put('/:id',tipoReparacionController.update);
        this.router.delete('/:id',tipoReparacionController.delete);
        this.router.get('/:id',tipoReparacionController.readone);
        this.router.post('/filter',tipoReparacionController.filter);
    }
}
const tipoReparacionRoutes = new TipoReparacionRoutes();
export default tipoReparacionRoutes.router;