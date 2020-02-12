import {Router} from 'express';
import {lineasReparacionController} from '../controllers/lineasReparacionController';

class LineasReparacionRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',lineasReparacionController.create);
        this.router.get('/',lineasReparacionController.read);
        this.router.put('/:id',lineasReparacionController.update);
        this.router.delete('/:id',lineasReparacionController.delete);
        this.router.get('/:id',lineasReparacionController.readone);
    }
}
const lineasReparacionRoutes = new LineasReparacionRoutes();
export default lineasReparacionRoutes.router;