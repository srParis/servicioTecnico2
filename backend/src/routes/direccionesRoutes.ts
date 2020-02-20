import {Router} from 'express';
import {direccionesController} from '../controllers/direccionesController';

class DireccionesRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',direccionesController.create);
        this.router.get('/',direccionesController.read);
        this.router.put('/:id',direccionesController.update);
        this.router.delete('/:id',direccionesController.delete);
        this.router.get('/:id',direccionesController.readone);
    }
}
const direccionesRoutes = new DireccionesRoutes();
export default direccionesRoutes.router;