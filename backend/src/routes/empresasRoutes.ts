import {Router} from 'express';
import {empresasController} from '../controllers/empresasController';

class EmpresasRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',empresasController.create);
        this.router.get('/',empresasController.read);
        this.router.put('/:id',empresasController.update);
        this.router.delete('/:id',empresasController.delete);
        this.router.get('/:id',empresasController.readone);
    }
}
const empresasRoutes = new EmpresasRoutes();
export default empresasRoutes.router;