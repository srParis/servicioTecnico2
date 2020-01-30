import {Router} from 'express';
import {puestosController} from '../controllers/puestosController';

class PuestosRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',puestosController.create);
        this.router.get('/',puestosController.read);
        this.router.put('/:id',puestosController.update);
        this.router.delete('/:id',puestosController.delete);
        this.router.get('/:id',puestosController.readone);
    }
}
const puestosRoutes = new PuestosRoutes();
export default puestosRoutes.router;