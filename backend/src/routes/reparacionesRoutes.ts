import {Router} from 'express';
import {reparacionesController} from '../controllers/reparacionesController';

class ReparacionesRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',reparacionesController.create);
        this.router.get('/',reparacionesController.read);
        this.router.put('/:id',reparacionesController.update);
        this.router.delete('/:id',reparacionesController.delete);
        this.router.get('/:id',reparacionesController.readone);
    }
}
const reparacionesRoutes = new ReparacionesRoutes();
export default reparacionesRoutes.router;