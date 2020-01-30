import {Router} from 'express';
import {poblacionesController} from '../controllers/poblacionesController';

class PoblacionesRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',poblacionesController.create);
        this.router.get('/',poblacionesController.read);
        this.router.put('/:id',poblacionesController.update);
        this.router.delete('/:id',poblacionesController.delete);
        this.router.get('/:id',poblacionesController.readone);
    }
}
const poblacionesRoutes = new PoblacionesRoutes();
export default poblacionesRoutes.router;