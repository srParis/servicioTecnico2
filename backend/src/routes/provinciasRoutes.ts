import {Router} from 'express';
import {provinciasController} from '../controllers/provinciasController';

class ProvinciasRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',provinciasController.create);
        this.router.get('/',provinciasController.read);
        this.router.put('/:id',provinciasController.update);
        this.router.delete('/:id',provinciasController.delete);
        this.router.get('/:id',provinciasController.readone);
        
    }
}
const provinciasRoutes = new ProvinciasRoutes();
export default provinciasRoutes.router;