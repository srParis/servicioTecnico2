import {Router} from 'express';
import {marcasController} from '../controllers/marcasController';

class MarcasRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }
    
    config():void{
        this.router.post('/',marcasController.create);
        this.router.get('/',marcasController.read);
        this.router.put('/:id',marcasController.update);
        this.router.delete('/:id',marcasController.delete);
        this.router.get('/:id',marcasController.readone);
        this.router.post('/filter',marcasController.filter);
    }
}
const marcasRoutes = new MarcasRoutes();
export default marcasRoutes.router;