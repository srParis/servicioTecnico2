import {Router} from 'express';
import {dispositivosController} from '../controllers/dispositivosController';

class DispositivosRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',dispositivosController.create);
        this.router.get('/',dispositivosController.read);
        this.router.put('/:id',dispositivosController.update);
        this.router.delete('/:id',dispositivosController.delete);
        this.router.get('/:id',dispositivosController.readone);
    }
}
const dispositivosRoutes = new DispositivosRoutes();
export default dispositivosRoutes.router;