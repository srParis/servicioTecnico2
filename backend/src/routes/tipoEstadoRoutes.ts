import {Router} from 'express';
import {tipoEstadoController} from '../controllers/tipoEstadoController';

class TipoEstadoRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',tipoEstadoController.create);
        this.router.get('/',tipoEstadoController.read);
        this.router.put('/:id',tipoEstadoController.update);
        this.router.delete('/:id',tipoEstadoController.delete);
        this.router.get('/:id',tipoEstadoController.readone);
    }
}
const tipoEstadoRoutes = new TipoEstadoRoutes();
export default tipoEstadoRoutes.router;