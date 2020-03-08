import {Router} from 'express';
import {modelosController} from '../controllers/modelosController';

class ModelosRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',modelosController.create);
        this.router.get('/',modelosController.read);
        this.router.put('/:id',modelosController.update);
        this.router.delete('/:id',modelosController.delete);
        this.router.get('/:id',modelosController.readone);
        this.router.get('/marca/:id',modelosController.getMarca);
    }
}
const modelosRoutes = new ModelosRoutes();
export default modelosRoutes.router;